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
    <div id="realisations" className="text-center mt-20 sm:mt-60">
      <h1 className="text-45px font-abril tracking-tight text-darkGreen sm:text-6xl">
        Réalisations
      </h1>
      <div className="w-full flex justify-center">
        <div className="p-2 flex flex-wrap w-4/5 justify-center gap-4 sm:gap-6">
          <Button
            type="fonce"
            text="Tout"
            onClick={() => handleFilterClick(null)}
          />
          {indicesOutils.map((index) => (
            <Button
              key={index}
              type="fonce"
              text={flatSkills[index]}
              onClick={() => handleFilterClick(flatSkills[index])}
            />
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
