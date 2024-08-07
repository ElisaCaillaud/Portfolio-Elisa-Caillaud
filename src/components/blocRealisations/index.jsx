//Bloc de realisations principal affichant les infos principales
import React from "react";
import realisations from "../../datas/realisations.json";

const BlocRealisations = () => {
  return (
    <div className="w-4/5 2xl:w-1/6 md:w-4/5 mt-6">
      {realisations.map((realisation, index) => (
        <div
          key={index}
          className={`p-4 rounded-md mb-4 w-full shadow-menu text-left`}
          style={{
            backgroundImage: `url(${realisation.cover})`,
          }}
        >
          <h2 className="font-abril text-lightGreen text-40px">
            {realisation.title}
          </h2>
          <p className="text-xl text-lightGreen font-medium">
            {realisation.resume}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlocRealisations;
