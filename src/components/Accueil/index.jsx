import { ArrowLongDownIcon } from "@heroicons/react/20/solid";

const Accueil = () => (
  <div id="accueil" className="text-center mt-60 h-50vh">
    <h1 className="text-45px font-abril tracking-tight text-darkGreen sm:text-6xl">
      Elisa Caillaud
    </h1>
    <p className="mt-6 text-xl leading-7 text-darkGreen font-lato w-full">
      En tant que <span className="font-bold">développeuse web frontend,</span>
      <br></br> je convertis vos concepts en interfaces interactives.
    </p>
    <div className="mt-10 items-center  justify-center gap-x-6 sm:grid grid-rows-3 sm:gap-4 lg:flex">
      <a
        href="#contact"
        className="w-155 text-lightGreen rounded bg-green px-3.5 py-2.5 text-base font-semibold text-white shadow-menu"
      >
        Me contacter
      </a>
      <a
        href="https://www.linkedin.com/in/elisa-caillaud/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-155 text-lightGreen rounded bg-middleGreen px-3.5 py-2.5 text-base font-semibold text-white shadow-menu"
      >
        Linkedin
      </a>
      <a
        href="https://www.linkedin.com/in/elisa-caillaud/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-155 text-lightGreen rounded bg-darkGreen px-3.5 py-2.5 text-base font-semibold text-white shadow-menu"
      >
        Mon CV
      </a>
    </div>
    <div className="mt-32">
      <a
        href="#realisations"
        className=" text-sm text-darkGreen font-lato font-bold w-full"
      >
        Découvrir mon travail
        <div className="flex justify-center">
          <ArrowLongDownIcon className="w-8 h-10 text-darkGreen" />
        </div>
      </a>
    </div>
  </div>
);

export default Accueil;
