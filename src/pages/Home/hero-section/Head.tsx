import "../../../_essentials.css";

function Head() {
  return (
    <h1
      className={[
        "text-center font-['Bricolage_Grotesque'] px-12 fade-slide-up",
        "w-fit lg:w-[50%]",
        "flex flex-col items-center gap-2 md:grid md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-col lg:items-center lg:gap-2",
      ].join(" ")}
    >
      <span className="col-span-2 text-lg md:text-xl lg:text-2xl font-light tracking-[0.3em] uppercase text-zinc-400">
        Hi, I'm
      </span>

      <span className="text-6xl md:text-7xl lg:text-9xl font-extrabold leading-none bg-linear-to-br from-amber-300 via-amber-500 to-orange-600 bg-clip-text text-transparent">
        Ajesh
      </span>

      <span className="text-6xl md:text-7xl lg:text-9xl font-extrabold leading-none text-white">
        Kharel
      </span>
    </h1>
  );
}

export default Head;
