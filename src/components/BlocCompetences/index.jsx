//Bloc de compétence principal affichant : le titre, la liste des compétences

import competences from "../../datas/competences.json";
import Button from "../Competences";

const BlocCompetences = () => {
  const indices = [0, 2, 4, 5, 7, 10];

  const flatCompetences = competences.flatMap((section) => section.liste);
  return (
    <div className="p-4 rounded-lg mb-4 bg-darkGreen">
      <p className="text-xl text-lightGreen font-bold">Technologies</p>
      <div className="inline-grid grid-cols-3 gap-4">
        {indices.map((index) => (
          <Button key={index} type="clair" text={flatCompetences[index]} />
        ))}
      </div>
    </div>
  );
};

export default BlocCompetences;
