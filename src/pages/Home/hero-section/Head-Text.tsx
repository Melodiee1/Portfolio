import { Link } from "react-router-dom";

function HeadText() {
  const linkStyle =
    "text-white underline underline-offset-4 decoration-amber-500 decoration-[1px] hover:text-amber-400 transition-colors";

  return (
    <div className="w-[60%] pt-12">
      <div className="text-amber-400 font-semibold tracking-widest text-md">
        ABOUT MYSELF
      </div>

      <div className="text-gray-300 text-lg leading-relaxed p-5 pl-2">
        <p>
          I am a <span className="text-white font-medium">14-year-old</span>{" "}
          self-taught
          <span className="text-white font-medium"> front-end developer</span>.
          I live in <span className={linkStyle}>Nepal, Koshi Province</span>,
          and am currently studying at{" "}
          <span className={linkStyle}>Pashupati Academy</span>.
        </p>

        <p className="mt-4">
          I am currently in 8th grade and trying to get into the programming
          world in my free time. I see a very bright future ahead of myself.
        </p>

        <p className="mt-4">
          You can navigate to{" "}
          <Link to="/contact-page" className={linkStyle}>
            Contact Page
          </Link>{" "}
          to contact me directly.
        </p>

        <div className="mt-10 pl-4 border-l-4 border-amber-500 italic text-mist-500">
          Have a great time navigating my portfolio...
        </div>

        <div className="text-olive-400 italic font-semibold mt-5">
          ✔ Open to learning opportunities
        </div>
      </div>
    </div>
  );
}
export default HeadText;
