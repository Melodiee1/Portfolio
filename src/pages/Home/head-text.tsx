import { Link } from "react-router-dom";

function HeadText() {
  return (
    <div className="text-gray-50 max-w-xl flex flex-col gap-6">
      {/* Section label */}
      <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-semibold">
        About Myself
      </span>

      {/* Bio text */}
      <p className="text-gray-300 text-lg leading-relaxed">
        I am a 14 year old self-taught frontend developer. I live in{" "}
        <a
          href=""
          className="text-white underline underline-offset-4 decoration-amber-500 hover:text-amber-400 transition-colors"
        >
          Nepal, Koshi Province
        </a>
        , and am studying in{" "}
        <a
          href=""
          className="text-white underline underline-offset-4 decoration-amber-500 hover:text-amber-400 transition-colors"
        >
          Pashupati Academy
        </a>{" "}
        School. I am currently in 8th grade and am trying to get into the
        programming world while free. I see a very bright future ahead for
        myself. You can navigate to{" "}
        <Link
          to="/contact-me"
          className="text-white underline underline-offset-4 decoration-amber-500 hover:text-amber-400 transition-colors"
        >
          Contact Page
        </Link>{" "}
        to contact me directly.
      </p>

      {/* Closing line */}
      <p className="text-gray-500 text-base italic border-l-2 border-amber-500 pl-4">
        Hope you have a great time navigating my personal portfolio...
      </p>

      <div className="text-xl text-gray-400 italic font-bold">
        ❌ Not Looking to be hired
      </div>
    </div>
  );
}
export default HeadText;
