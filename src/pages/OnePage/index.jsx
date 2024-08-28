import Header from "../../components/Header";
import Accueil from "../../components/Accueil";
import APropos from "../../components/APropos";
import SectionCompetences from "../../components/SectionCompetences";
import SectionRealisations from "../../components/SectionRealisations";
import SectionParcours from "../../components/SectionParcours";
import SectionContact from "../../components/SectionContact";

function Home() {
  return (
    <div>
      <Header />
      <Accueil />
      <APropos />
      <SectionCompetences />
      <SectionRealisations />
      <SectionParcours />
      <SectionContact />
    </div>
  );
}

export default Home;
