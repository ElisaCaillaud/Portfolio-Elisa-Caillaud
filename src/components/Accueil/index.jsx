import { ArrowLongDownIcon } from "@heroicons/react/20/solid";

const Accueil = () => {
  // Fonction pour faire défiler smooth jusqu'à une section spécifique
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="pt-60 flex flex-col items-center lg:flex-row justify-center gap-16">
        <img
          className="rounded-[200px] w-[50%] sm:w-80 sm:h-80 object-cover"
          src={process.env.PUBLIC_URL + "images/profil.jpg"}
          alt="Elisa Caillaud"
        />
        <div id="accueil" className="text-center lg:text-left h-50vh">
          <h1 className="text-45px font-abril tracking-tight text-darkGreen sm:text-6xl">
            Elisa Caillaud
          </h1>
          <div className="w-full flex justify-center">
            <p className="sm:w-full w-4/5 mt-6 text-xl leading-7 text-darkGreen font-lato">
              En tant que{" "}
              <span className="font-bold">développeuse web frontend,</span>
              <br /> je convertis vos concepts en interfaces interactives.
            </p>
          </div>
          <div className="text-center flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mt-10">
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact"); // Appelle la fonction de défilement smooth
              }}
              className="w-155 text-lightGreen rounded bg-green px-3.5 py-2.5 text-base font-semibold text-white shadow-menu"
            >
              Me contacter
            </button>
            <a
              href="https://www.linkedin.com/in/elisa-caillaud/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-155 text-lightGreen rounded bg-middleGreen px-3.5 py-2.5 text-base font-semibold text-white shadow-menu"
            >
              Linkedin
            </a>
            <a
              href={process.env.PUBLIC_URL + "/docs/CV_Elisa_Caillaud.pdf"}
              target="_blank"
              rel="noreferrer"
              className="w-155 text-lightGreen rounded bg-darkGreen px-3.5 py-2.5 text-base font-semibold text-white shadow-menu"
            >
              Mon CV
            </a>
          </div>
        </div>
      </div>
      <div className="mt-32 text-center">
        <a
          href="#realisations"
          className="text-sm text-darkGreen font-lato font-bold w-full"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#realisations"); // Appelle la fonction de défilement smooth
          }}
        >
          Découvrir mon travail
          <div className="flex justify-center slide-bottom">
            <ArrowLongDownIcon className="w-8 h-10 text-darkGreen" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Accueil;
