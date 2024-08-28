import React, { useState, useEffect } from "react";
import realisations from "../../datas/realisations.json";
import Button from "../Competences";
import Modal from "../Modal"; // Import du composant Modal
import "../../styles/index.css";

const BlocRealisations = ({ filter }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768); // Initialisation de la largeur de l'écran
  const [isModalOpen, setModalOpen] = useState(false); // État pour gérer la visibilité de la modale
  const [selectedRealisation, setSelectedRealisation] = useState(null); // État pour stocker la réalisation sélectionnée

  useEffect(() => {
    const resize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Fonction pour mettre à jour l'état chaque fois que la taille change
    };
    window.addEventListener("resize", resize);

    // Nettoyage de l'événement lorsque le composant est fermé
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Filtrage des réalisations
  const filteredRealisations = filter
    ? realisations.filter((realisation) => realisation.filter === filter)
    : realisations;

  // Fonction pour gérer l'ouverture de la modale
  const handleButtonClick = (realisation) => {
    setSelectedRealisation(realisation);
    setModalOpen(true);
  };

  // Fonction pour gérer la fermeture de la modale
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
        const even = Math.floor(index / 2) % 2 === 0;
        const pair = index % 2 === 0;

        const gridStyle = {
          gridColumnStart: even ? (pair ? 1 : 8) : pair ? 1 : 6, // Début de la colonne
          gridColumnEnd: even ? (pair ? 8 : 13) : pair ? 6 : 13, // Fin de la colonne
        };

        return (
          <div key={index} style={gridStyle} className="card-container">
            <div
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + realisation.cover
                })`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
                overflow: "hidden",
              }}
              key={index}
              className="card flex flex-col items-center text-center justify-center h-80 p-7 rounded-md w-full shadow-menu"
            >
              <div
                style={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(60, 98, 85, 0.9)",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />
              <h2 className="font-abril text-lightGreen text-40px leading-none mb-5 z-10">
                {realisation.title}
              </h2>
              <p className="text-xl text-lightGreen font-medium leading-none z-10">
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
      {isModalOpen && selectedRealisation && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal} // Ferme la modale
          realisation={selectedRealisation}
        />
      )}
    </div>
  );
};

export default BlocRealisations;
