import Button from "../Competences";
import competences from "../../datas/competences.json";
import BlocRealisations from "../blocRealisations";

const SectionRealisations = ({ indicesOutils }) => {
  // Aplatir le tableau de compétences pour pouvoir le parcourir
  const flatSkills = competences.flatMap((section) => section.list);

  return (
    <div id="realisations" className="text-center mt-20 sm:mt-60">
      <h1 className="text-45px font-abril tracking-tight text-darkGreen sm:text-6xl">
        Réalisations
      </h1>
      <div className="w-full flex justify-center">
        <div className="p-2 flex flex-wrap w-4/5 justify-center gap-4 sm:gap-6">
          {indicesOutils.map((index) => {
            return <Button key={index} type="fonce" text={flatSkills[index]} />;
          })}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <BlocRealisations />
      </div>
    </div>
  );
};

export default SectionRealisations;
