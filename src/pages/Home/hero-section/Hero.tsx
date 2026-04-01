import Head from "./Head.tsx";
import HeadText from "./Head-Text.tsx";

function HeroSection() {
  return (
    <div className="w-full bg-bg-1">
      <div className=" flex flex-col md:flex-row md:justify-between ">
        <Head />
        <HeadText />
      </div>
    </div>
  );
}
export default HeroSection;
