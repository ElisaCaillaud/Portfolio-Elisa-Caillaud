import { useState } from "react";
import ChevronUpIcon from "@heroicons/react/24/solid/ChevronUpIcon";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const ouvrirComposant = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="derouleur mt-5" onClick={ouvrirComposant}>
        <h2 className="leading-7 text-base font-bold text-lightGreen font-lato text-center">
          {title}
        </h2>
        <ChevronUpIcon
          className={`w-6 h-6 cursor-pointer fill-lightGreen ${
            isOpen ? "rotateBottom" : "rotateTop"
          }`}
        />
      </div>
      <div className={isOpen ? "openDerouleur" : "closedDerouleur"}>
        {isOpen && (
          <p className="leading-7 text-base text-darkGreen font-lato text-center mb-4">
            {content}
          </p>
        )}
      </div>
    </div>
  );
}

export default Collapse;
