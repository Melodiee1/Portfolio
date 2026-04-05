import { Link } from "react-router-dom";

function SideText() {
  const linkStyle =
    "text-white underline decoration-dotted underline-offset-4 decoration-amber-500 decoration-[1px] hover:text-amber-400 transition-colors px-0.5";

  return (
    <div className="lg:w-[60%] bg-zinc-950 px-4">
      <div className="text-amber-400 font-semibold tracking-widest text-md 2xl:text-5xl slide-from-right">
        ABOUT MYSELF
      </div>

      <div className="text-gray-300 text-lg leading-relaxed p-5 pl-2 2xl:text-4xl 2xl:pl-12 fade-in">
        <p>
          I am a 14-year-old self-taught
          <span className="text-white font-medium"> front-end developer</span>.
          I live in <span className={linkStyle}>Nepal, Koshi Province</span>,
          and am currently studying at{" "}
          <span className={linkStyle}>Pashupati Academy</span>.
        </p>

        <p className="mt-4 2xl:mt-8">
          I am currently in 8th grade and trying to get into the programming
          world in my free time. I see a very bright future ahead of myself.
        </p>

        <p className="mt-4 2xl:mt-8">
          You can navigate to{" "}
          <Link to="/contact-me" className={linkStyle}>
            Contact Page
          </Link>{" "}
          to contact me directly.
        </p>

        <div className="mt-10 2xl:mt-20 pl-4 border-l-2 border-amber-500 italic text-mist-400 text-lg">
          Have a great time navigating my portfolio...
        </div>
      </div>
    </div>
  );
}
export default SideText;
