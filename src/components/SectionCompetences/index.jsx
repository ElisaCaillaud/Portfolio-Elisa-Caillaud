import BlocCompetences from "../BlocCompetences";
import competences from "../../datas/competences.json";

const Competences = () => {
  const competencesData = [
    {
      title: competences[0]?.title,
      indices: [0, 1, 2, 3, 4],
      indicesOutils: [7, 5, 13],
      bgColor: "bg-darkGreen",
    },
    {
      title: competences[1]?.title,
      indices: [14, 15, 16, 18],
      indicesOutils: [19, 20],
      bgColor: "bg-middleGreen",
    },
    {
      title: competences[2]?.title,
      indices: [29, 28, 21, 20],
      indicesOutils: [22, 23, 24],
      bgColor: "bg-green",
    },
  ];

  return (
    <div id="competences" className="text-center mt-20 sm:mt-30 lg:px-5">
      <h1 className="text-45px font-abril tracking-tight text-darkGreen sm:text-6xl">
        Compétences
      </h1>
      <div className="flex flex-col items-center md:flex-col lg:flex-row justify-center gap-10 mt-6">
        {competencesData.map((data, index) => (
          <BlocCompetences
            key={index}
            title={data.title}
            indices={data.indices}
            indicesOutils={data.indicesOutils}
            bgColor={data.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Competences;
