import { Link } from "react-router-dom";

import Icons from "./icons.tsx";
import Header from "./header.tsx";

function Techs() {
  return (
    <div className="flex flex-col justify-center gap-20 bg-bg-1 pt-12 pb-15 min-h-screen">
      <div>
        <Header />
        <Icons />
      </div>

      <div className="flex gap-12 justify-center flex-wrap">
        <Link
          className="inline-block border border-amber-400 text-amber-400 font-medium px-6 py-3 rounded-lg hover:bg-amber-400 hover:text-zinc-950 transition-all duration-200"
          to="/projects"
        >
          View My Projects →
        </Link>

        <Link
          className="inline-block border border-amber-400 text-amber-400 font-medium px-6 py-3 rounded-lg hover:bg-amber-400 hover:text-zinc-950 transition-all duration-200"
          to="/contact-me"
        >
          Contact Me →
        </Link>
      </div>
    </div>
  );
}
export default Techs;
