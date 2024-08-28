//Bloc de compétence principal affichant : le titre, la liste des compétences
import competences from "../../datas/competences.json";
import Button from "../Competences";

const BlocCompetences = ({ title, indices, indicesOutils, bgColor }) => {
  const flatCompetences = competences.flatMap((section) => section.list);

  return (
    <div className="w-4/5 2xl:w-1/6 md:w-4/5 mt-6">
      <div
        className={`p-4 rounded-md mb-4 ${bgColor} w-full shadow-menu text-left`}
      >
        <h2 className="font-abril text-lightGreen text-28px md:text-40px">
          {title}
        </h2>
        <p className="text-xl text-lightGreen font-medium">Technologies</p>
        <div className="flex flex-wrap">
          {indices.map((index) => (
            <div key={index} className="p-2">
              <Button type="clair" text={flatCompetences[index]} />
            </div>
          ))}
        </div>
        <p className="text-xl text-lightGreen font-medium">Outils</p>
        <div className="w-fit">
          <div className="flex flex-wrap gap-2 pl-2">
            {indicesOutils.map((index) => (
              <Button key={index} type="clair" text={flatCompetences[index]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlocCompetences;
