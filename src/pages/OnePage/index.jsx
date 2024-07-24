import Header from "../../components/Header";
import Accueil from "../../components/Accueil";
import APropos from "../../components/APropos";
import SectionCompetences from "../../components/SectionCompetences";

function Home() {
  return (
    <div>
      <Header />
      <Accueil />
      <APropos />
      <SectionCompetences />
    </div>
  );
}

export default Home;
