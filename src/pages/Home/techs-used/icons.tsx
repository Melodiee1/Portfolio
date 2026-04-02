interface _techs {
  title: string;
  imgPath: string;
  path: string;
  border: string;
}
const techs: _techs[] = [
  {
    title: "React",
    imgPath: "/techs/react.png",
    path: "https://react.dev/",
    border: "border rounded",
  },
  {
    title: "Typescript",
    imgPath: "/techs/typescript.png",
    path: "https://www.typescriptlang.org/",
    border: "border rounded",
  },
  {
    title: "TailwindCSS",
    imgPath: "/techs/tailwind.svg",
    path: "https://tailwindcss.com/",
    border: "",
  },
  {
    title: "GitHub",
    imgPath: "/techs/github.png",
    path: "https://github.com/",
    border: "border rounded-[50%]",
  },
];

function Icons() {
  return (
    <section className="flex gap-6 justify-center flex-wrap p-5 w-full">
      {techs.map((tech, index) => (
        <a
          className="flex flex-col items-center gap-0.5 w-27 height-27 rounded-[50%] hover:scale-105 transition ease-in-out hover:shadow-2xl hover:[&>img]shadow-2xl hover:[&>img]shadow-amber-50 hover:[&>p]:text-white hover:[&>p]:text-shadow-amber-100 hover:[&>p]:text-shadow-2xs active:scale-95"
          key={index}
          href={tech.path}
          target="_blank"
        >
          <img
            className={["w-16 h-16", tech.border].join("")}
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
