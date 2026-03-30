function Title() {
  return (
    <h1 className="text-6xl max-w-fit">
      <span className="text-gray-300 pl-5 font-mono flex justify-start">
        HI, I'm
      </span>

      <span
        className="text-cyan-700 block font-header"
        style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}
      >
        Ajesh
      </span>

      <span
        className="text-amber-600 block font-[cursive] "
        style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}
      >
        Kharel
      </span>
    </h1>
  );
}
export default Title;
