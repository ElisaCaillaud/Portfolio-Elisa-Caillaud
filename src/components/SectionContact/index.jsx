const SectionContact = () => {
  return (
    <div>
      <div id="contact" className="text-center mt-20 sm:mt-30 lg:px-5">
        <h1 className="text-45px font-abril tracking-tight text-darkGreen sm:text-6xl">
          Contact
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <p className="lg:w-4/5 w-4/5 mt-6 text-xl leading-7 text-darkGreen font-lato text-center">
          Si mon profil vous a convaincu,
          <br /> n'hésitez pas à me contacter par <b>mail</b> ou
          <b> téléphone</b> !
          <br />
          <br />
          <b>
            <a
              href="mailto:elisa.caillaud@outlook.fr"
              target="_blank"
              rel="noreferrer"
            >
              elisa.caillaud@outlook.fr
            </a>
            <br />
            <a href="tel:+33647025497" target="_blank" rel="noreferrer">
              06 47 02 54 97
            </a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default SectionContact;
