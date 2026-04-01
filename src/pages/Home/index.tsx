import HeroSection from "./hero-section/Hero.tsx";
import Techs from "./techs-used/Techs.tsx";

function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Techs />
    </div>
  );
}
export default Home;
