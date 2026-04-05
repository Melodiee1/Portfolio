import HeroSection from "./hero-section/Hero.tsx";
import Techs from "./techs-used/Techs.tsx";
import Journey from "./my-journey/Journey.tsx";

function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Techs />
      <Journey />
    </div>
  );
}
export default Home;
