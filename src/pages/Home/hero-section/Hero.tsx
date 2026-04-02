import Head from "./Head.tsx";
import HeadText from "./Head-Text.tsx";

function HeroSection() {
  return (
    <div className=" bg-gray-900 w-full min-h-screen">
      {/* Cool Background and animation but too laggy so removed it */}
      {/* <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="/hero-bg.jpg"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/10 to-black" />
      </div>

      <div className="absolute inset-0 pointer-events-none z-1">
        {[...Array(5)].map((_, index) => (
          <div
            className="absolute w-1 h-1 rounded-[50%] opacity-60 shadow-lg shadow-emerald-500/50 slow-drift"
            style={{
              background: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
            }}
            key={index}
          />
        ))}
      </div> */}
      <div className="relative flex gap-10 md:gap-4 flex-col lg:flex-row md:justify-between py-30 md:py-50 backdrop-blur-sm">
        <Head />
        <HeadText />
      </div>
    </div>
  );
}
export default HeroSection;
