//Bloc de compétence principal affichant : le titre, l'année, la liste des compétences
import parcours from "../../datas/parcours.json";
import Button from "../Competences";
import { LinkIcon } from "@heroicons/react/20/solid";

const BlocParcours = ({ title, job, year, link, indices, bgColor }) => {
  const flatCompetences = parcours.flatMap((section) => section.skills);

  return (
    <div className="w-4/5 2xl:w-7/12 md:w-4/5 mt-6">
      <div
        className={`p-4 rounded-md mb-4 ${bgColor} w-full shadow-menu text-left`}
      >
        <div className=" flex !w-full justify-between 2xl:w-1/6 md:w-4/5 mt-6">
          <h2 className="font-abril text-lightGreen text-40px leading-10 pb-7">
            {title}
          </h2>
          <a href={link} target="_blank rel='noopener noreferrer'">
            <LinkIcon className="w-12 h-12 text-darkGreen bg-lightGreen rounded-md p-2" />
          </a>
        </div>
        <p className="text-base text-lightGreen font-medium leading-6 pb-2">
          {year}
        </p>
        <p className="text-xl text-lightGreen font-bold leading-6 pb-5">
          {job}
        </p>
        <div className="w-fit">
          <div className="flex flex-wrap w-4/5">
            {indices.map((index) => (
              <div key={index} className="p-2">
                <Button type="clair" text={flatCompetences[index]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlocParcours;
