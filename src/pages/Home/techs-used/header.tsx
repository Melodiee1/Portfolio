function Header() {
  return (
    <section className="flex flex-col items-center gap-4.5">
      <div className="flex flex-col gap-4 px-4">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-200 leading-tight p-5 pl-4 flex gap-3 flex-wrap justify-center ">
          <span className="italic text-gray-300">Frontend</span>{" "}
          <span className="text-blue-300 font-bold">Developer</span>{" "}
          <span className="text-gray-400">&</span>{" "}
          <span className="text-amber-400">Web</span>
          <span className="text-amber-500 font-bold">Designer</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-left md:text-center text-gray-400 leading-relaxed">
          I build clean, responsive, and engaging web experiences using{" "}
          <span className="text-white font-medium">modern technologies</span>.
        </p>
      </div>
    </section>
  );
}
export default Header;
