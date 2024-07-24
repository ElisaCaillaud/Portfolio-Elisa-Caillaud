//Bloc de compétence principal affichant : le titre, la liste des compétences

import competences from "../../datas/competences.json";
import Button from "../Competences";

const BlocCompetences = () => {
  const indices = [0, 2, 4, 5, 7, 10];
  const flatCompetences = competences.flatMap((section) => section.liste);
  const developpement = competences[0]?.title;

  return (
    <div className="">
      <div className="p-4 rounded-md mb-4 bg-darkGreen w-1/4 shadow-menu text-left">
        <h2 className="font-abril text-lightGreen text-40px">
          {developpement}
        </h2>
        <p className="text-xl text-lightGreen font-medium">Technologies</p>
        <div className="grid grid-cols-3 gap-4">
          {indices.map((index) => (
            <Button key={index} type="clair" text={flatCompetences[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlocCompetences;
