import Button from "../Competences";
const SectionFooter = () => {
  return (
    <div>
      <div className="w-full flex justify-center mt-30 gap-5">
        <a
          href="https://github.com/ElisaCaillaud"
          target="_blank"
          rel="noreferrer"
        >
          <Button type="fonce" text="Github" style={{ marginTop: "4rem" }} />
        </a>
        <a
          href={process.env.PUBLIC_URL + "/docs/CV_Elisa_Caillaud.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <Button type="fonce" text="Mon CV" style={{ marginTop: "4rem" }} />
        </a>
      </div>
      <div className="w-full flex justify-center">
        <p className="lg:w-4/5 w-4/5 mb-6 mt-3 text-sml leading-7 text-darkGreen font-lato text-center">
          © 2024 - Réalisé par Elisa Caillaud
        </p>
      </div>
    </div>
  );
};

export default SectionFooter;
