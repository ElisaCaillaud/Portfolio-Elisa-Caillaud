const Header = () => (
  <div className="w-full fixed top-1">
    <nav className="flex justify-center mt-5 backdrop-blur-xl">
      <ul className="font-lato text-darkGreen font-bold text-base flex shadow-menu w-fit p-3 pl-8 pr-8 rounded-sm backdrop-blur-xl text-center">
        <li className="pr-8">
          <a href="#accueil">Accueil</a>
        </li>
        <li className="pr-8">
          <a href="#a-propos">À Propos</a>
        </li>
        <li className="pr-8">
          <a href="#competences">Compétences</a>
        </li>
        <li className="pr-8">
          <a href="#realisations">Réalisations</a>
        </li>
        <li className="pr-8">
          <a href="#parcours">Parcours</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
