import React, { useState, useEffect } from "react";
import realisations from "../../datas/realisations.json";
import Button from "../Competences";
import Modal from "../Modal";
import "../../styles/index.css";

const BlocRealisations = ({ filter }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRealisation, setSelectedRealisation] = useState(null);

  useEffect(() => {
    const resize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const filteredRealisations = filter
    ? realisations.filter((realisation) => realisation.filter === filter)
    : realisations;

  const handleButtonClick = (realisation) => {
    setSelectedRealisation(realisation);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedRealisation(null);
  };

  return (
    <div
      className={`w-4/5 2xl:w-7/12 md:w-4/5 mt-6 grid-container ${
        isSmallScreen ? "single-column" : ""
      }${filter ? "filtered" : ""}`}
    >
      {filteredRealisations.map((realisation, index) => {
        // Calcul pour vérifier si on est dans une ligne "paire" de groupes de deux éléments
        const even = Math.floor(index / 2) % 2 === 0;
        // Vérification si l'index actuel est pair (l'élément est le premier de la paire)
        const pair = index % 2 === 0;

        const gridStyle = {
          // Si la ligne est "paire" et l'élément est pair, la colonne commence à 1, sinon à 8
          // Si la ligne est "impair", la colonne commence à 1 pour les éléments pairs, sinon à 6
          gridColumnStart: even ? (pair ? 1 : 8) : pair ? 1 : 6,
          gridColumnEnd: even ? (pair ? 8 : 13) : pair ? 6 : 13,
        };

        return (
          <div key={index} style={gridStyle} className="card-container">
            <div
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + realisation.cover //variable pour le dossier public
                })`,
              }}
              className="card h-80 p-7 w-full"
            >
              <div className="card-content">
                <h2 className="font-abril text-lightGreen text-28px md:text-40px leading-none mb-5">
                  {realisation.title}
                </h2>
                <p className="text-xl text-lightGreen font-medium leading-none">
                  {realisation.resume}
                </p>
                <Button
                  type="clair"
                  text="Découvrir"
                  style={{ marginTop: "4rem" }}
                  onClick={() => handleButtonClick(realisation)}
                />
              </div>
            </div>
          </div>
        );
      })}

      {isModalOpen && selectedRealisation && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          realisation={selectedRealisation}
        />
      )}
    </div>
  );
};

export default BlocRealisations;
