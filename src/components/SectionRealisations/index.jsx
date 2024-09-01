import React, { useState } from "react";
import Button from "../Competences";
import competences from "../../datas/competences.json";
import BlocRealisations from "../blocRealisations";

const SectionRealisations = () => {
  // Définir les index de tri ici
  const indicesOutils = [0, 3, 4, 9, 28, 30];

  const flatSkills = competences.flatMap((section) => section.list);

  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div id="realisations" className="text-center mt-20 sm:mt-30">
      <h1 className="text-45px font-abril tracking-tight text-darkGreen mb-7 sm:text-6xl sm:mb-7">
        Réalisations
      </h1>
      <div className="flex flex-col items-center">
        <p className="text-green leading-4 w-4/5 mb-3">
          Cliquez ci-dessous pour filtrer les réalisations et survolez-les pour
          en savoir plus.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="p-2 flex flex-wrap w-4/5 justify-center gap-4 sm:gap-6 ">
          <div className="hover:shadow-menu">
            <Button
              type="fonce"
              text="Tout"
              onClick={() => handleFilterClick(null)}
            />
          </div>
          {indicesOutils.map((index) => (
            <div className="button-container">
              <Button
                key={index}
                type="fonce"
                text={flatSkills[index]}
                onClick={() => handleFilterClick(flatSkills[index])}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <BlocRealisations filter={selectedFilter} />
      </div>
    </div>
  );
};

export default SectionRealisations;
