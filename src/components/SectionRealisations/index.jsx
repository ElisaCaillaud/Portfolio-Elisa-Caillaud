import Button from "../Competences";
import competences from "../../datas/competences.json";

const SectionRealisations = ({ indicesOutils }) => {
  // Aplatir le tableau de compétences pour pouvoir le parcourir
  const flatCompetences = competences.flatMap((section) => section.liste);

  return (
    <div id="realisations" className="text-center mt-60 h-screen">
      <h1 className="text-45px font-abril tracking-tight text-darkGreen sm:text-6xl">
        Réalisations
      </h1>
      <div className="p-2 flex justify-center gap-6">
        {indicesOutils.map((index) => {
          return (
            <Button key={index} type="fonce" text={flatCompetences[index]} />
          );
        })}
      </div>
    </div>
  );
};

export default SectionRealisations;
