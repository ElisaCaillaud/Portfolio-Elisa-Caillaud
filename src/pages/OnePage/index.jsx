import Header from "../../components/Header";
import Accueil from "../../components/Accueil";
import APropos from "../../components/APropos";
import SectionCompetences from "../../components/SectionCompetences";
import SectionRealisations from "../../components/SectionRealisations";

function Home() {
  const indices = [0, 4, 3, 28, 9];
  return (
    <div>
      <Header />
      <Accueil />
      <APropos />
      <SectionCompetences />
      <SectionRealisations indicesOutils={indices} />
    </div>
  );
}

export default Home;
