import BlocParcours from "../BlocParcours";
import parcours from "../../datas/parcours.json";

const SectionParcours = () => {
  const parcoursData = [
    {
      title: parcours[0]?.title,
      job: parcours[0]?.job,
      year: parcours[0]?.year,
      link: parcours[0]?.link,
      indices: [0, 1, 2, 3, 4, 6, 7, 8],
      bgColor: "bg-darkGreen",
    },
    {
      title: parcours[1]?.title,
      job: parcours[1]?.job,
      year: parcours[1]?.year,
      link: parcours[1]?.link,
      indices: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      bgColor: "bg-middleGreen",
    },
    {
      title: parcours[2]?.title,
      job: parcours[2]?.job,
      year: parcours[2]?.year,
      link: parcours[2]?.link,
      indices: [19, 20, 21, 22, 23, 24, 25],
      bgColor: "bg-green",
    },
  ];

  return (
    <div id="parcours" className="text-center mt-20 sm:mt-30 lg:px-5">
      <h1 className="text-45px font-abril tracking-tight text-darkGreen sm:text-6xl">
        Parcours
      </h1>
      <div className="!flex !flex-col items-center md:flex-col lg:flex-row justify-center gap-5 mt-6">
        {parcoursData.map((data, index) => (
          <BlocParcours
            key={index}
            title={data.title}
            year={data.year}
            job={data.job}
            link={data.link}
            indices={data.indices}
            bgColor={data.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionParcours;
