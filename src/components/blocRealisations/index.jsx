//Bloc de realisations principal affichant les infos principales
import React, { useState, useEffect } from "react";
import realisations from "../../datas/realisations.json";
import Button from "../Competences";
import "../../styles/index.css";

const BlocRealisations = ({ filter }) => {
  const [isSmallScreen, SmallScreen] = useState(window.innerWidth <= 768); //Initialisation de la largeur de l'ecran

  useEffect(() => {
    const resize = () => {
      SmallScreen(window.innerWidth <= 768); // Fonction pour mettre à jour l'état chaque fois que la taille change
    };

    // Ajout d'un écouteur d'événement pour les changements de taille de l'écran
    window.addEventListener("resize", resize);
  }, []);

  const filteredRealisations = filter
    ? realisations.filter((realisation) => realisation.filter === filter)
    : realisations; //Filtrage des realisations

  return (
    <div
      className={`w-4/5 2xl:w-3/6 md:w-4/5 mt-6 grid-container ${
        isSmallScreen ? "single-column" : "" //vérification de la taille de l'écran pour appliquer une ou plusieurs colonnes
      }`}
    >
      {filteredRealisations.map((realisation, index) => {
        //permet de déterminer si la ligne est pair ou impair, si 0=pair, si 1=impair
        //vérifie si la ligne entiere est pair ou impair
        const even = Math.floor(index / 2) % 2 === 0;

        //vérifie si l'element est le premier de la pair par rapport á l'index
        const pair = index % 2 === 0;

        const gridStyle = {
          gridColumnStart: even ? (pair ? 1 : 8) : pair ? 1 : 6, //debut de la colonne
          gridColumnEnd: even ? (pair ? 8 : 13) : pair ? 6 : 13, //fin de la colonne
        };

        return (
          <div key={index} style={gridStyle} className="card-container">
            <div className="card flex flex-col items-center text-center justify-center h-80 p-4 rounded-md w-full shadow-menu bg-darkGreen">
              <h2 className=" font-abril text-lightGreen text-40px">
                {realisation.title}
              </h2>
              <p className="text-xl text-lightGreen font-medium">
                {realisation.resume}
              </p>
              <Button
                type="clair"
                text="Découvrir"
                style={{ marginTop: "5rem" }}
              />{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlocRealisations;
