import React, { useState, useEffect } from "react";
import realisations from "../../datas/realisations.json";
import Button from "../Competences";
import Modal from "../Modal"; // Import du composant Modal
import "../../styles/index.css";

const BlocRealisations = ({ filter }) => {
  const [isSmallScreen, SmallScreen] = useState(window.innerWidth <= 768); // Initialisation de la largeur de l'écran
  const [isModalOpen, setModalOpen] = useState(false); // État pour gérer la visibilité de la modale
  const [selectedRealisation, setSelectedRealisation] = useState(null); // État pour stocker la réalisation sélectionnée

  useEffect(() => {
    const resize = () => {
      SmallScreen(window.innerWidth <= 768); // Fonction pour mettre à jour l'état chaque fois que la taille change
    };

    // Ajout d'un écouteur d'événement pour les changements de taille de l'écran
    window.addEventListener("resize", resize);
  }, []);

  // Filtrage des réalisations
  const filteredRealisations = filter
    ? realisations.filter((realisation) => realisation.filter === filter)
    : realisations;

  // Fonction pour fermer la modale
  const handleButtonClick = (realisation) => {
    setSelectedRealisation(realisation);
    setModalOpen(true);
  };

  return (
    <div
      className={`w-4/5 2xl:w-3/6 md:w-4/5 mt-6 grid-container ${
        isSmallScreen ? "single-column" : ""
      }${filter ? "filtered" : ""}`}
    >
      {filteredRealisations.map((realisation, index) => {
        const even = Math.floor(index / 2) % 2 === 0;
        const pair = index % 2 === 0;

        const gridStyle = {
          gridColumnStart: even ? (pair ? 1 : 8) : pair ? 1 : 6, // Début de la colonne
          gridColumnEnd: even ? (pair ? 8 : 13) : pair ? 6 : 13, // Fin de la colonne
        };

        return (
          <div key={index} style={gridStyle} className="card-container">
            <div className="card flex flex-col items-center text-center justify-center h-80 p-7 rounded-md w-full shadow-menu bg-darkGreen">
              <h2 className="font-abril text-lightGreen text-40px leading-none mb-5">
                {realisation.title}
              </h2>
              <p className="text-xl text-lightGreen font-medium leading-none">
                {realisation.resume}
              </p>
              <Button
                type="clair"
                text="Découvrir"
                style={{ marginTop: "4rem" }}
                onClick={() => handleButtonClick(realisation)} // Ouvre la modale avec la réalisation sélectionnée
              />
            </div>
          </div>
        );
      })}

      {/* Affichage de la modale */}
      {selectedRealisation && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          realisation={selectedRealisation}
        />
      )}
    </div>
  );
};

export default BlocRealisations;
