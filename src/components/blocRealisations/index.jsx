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
        const even = Math.floor(index / 2) % 2 === 0;
        const pair = index % 2 === 0;

        const gridStyle = {
          gridColumnStart: even ? (pair ? 1 : 8) : pair ? 1 : 6,
          gridColumnEnd: even ? (pair ? 8 : 13) : pair ? 6 : 13,
        };

        return (
          <div key={index} style={gridStyle} className="card-container">
            <div
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + realisation.cover
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
