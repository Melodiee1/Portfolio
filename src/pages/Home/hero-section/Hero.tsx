import Head from "./Head.tsx";
import HeadText from "./Head-Text.tsx";
import SecThree from "./Section-three.tsx";

function HeroSection() {
  return (
    <div className="w-full">
      <div className=" flex flex-col md:flex-row md:justify-between ">
        <Head />
        <HeadText />
      </div>
      <SecThree />
    </div>
  );
}
export default HeroSection;
