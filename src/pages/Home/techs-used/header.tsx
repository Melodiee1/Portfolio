function Header() {
  return (
    <section className="flex flex-col items-center gap-4.5">
      <div className="flex flex-col gap-4">
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-semibold text-gray-200 leading-tight">
          <span className="italic text-gray-300">Frontend</span>{" "}
          <span className="text-blue-300 font-bold">Developer</span>{" "}
          <span className="text-gray-400">&</span>{" "}
          <span className="text-amber-400">
            Web <span className="text-amber-500 font-bold">Designer</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          I build clean, responsive, and engaging web experiences using{" "}
          <span className="text-white font-medium">modern technologies</span>.
        </p>

        {/* Tech Intro */}
        <p className="text-lg uppercase tracking-wider text-gray-200">
          My Tech Stack
        </p>
      </div>
    </section>
  );
}
export default Header;
