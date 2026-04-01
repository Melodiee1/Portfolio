interface _techs {
  title: string;
  imgPath: string;
  path: string;
}
const techs: _techs[] = [
  { title: "React", imgPath: "/techs/react.png", path: "" },
  { title: "Typescript", imgPath: "/techs/typescript.png", path: "" },
  { title: "TailwindCSS", imgPath: "/techs/tailwind.svg", path: "" },
];

function Icons() {
  return (
    <section className="flex gap-6 justify-center">
      {techs.map((tech, index) => (
        <a
          className="flex flex-col items-center gap-0.5 w-27 height-27 rounded-[50%] hover:[&>img]shadow-2xl hover:[&>img]shadow-amber-50 hover:[&>p]:text-white hover:[&>p]:text-shadow-amber-100 hover:[&>p]:text-shadow-2xs"
          key={index}
          href=""
        >
          <img
            className="w-16 h-16 rounded-xl"
            src={tech.imgPath}
            alt={tech.title}
          />{" "}
          <p className="text-mist-300 text-lg italic font-semibold hover:text-white hover:font-normal transition ease-in-out duration-500">
            {tech.title}
          </p>
        </a>
      ))}
    </section>
  );
}
export default Icons;
