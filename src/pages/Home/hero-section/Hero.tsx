import Head from "./Head.tsx";
import SideText from "./SideText.tsx";

function HeroSection() {
  return (
    <div className=" bg-zinc-950 w-full min-h-screen">
      <div className="relative flex gap-15 lg:gap-5 flex-col lg:flex-row md:justify-between items-center py-30 md:py-50 backdrop-blur-sm min-h-screen">
        <Head />
        <SideText />
      </div>
    </div>
  );
}
export default HeroSection;
