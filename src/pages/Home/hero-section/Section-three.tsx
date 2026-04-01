import "../../../_essentials.css";
import { Link } from "react-router-dom";

function SecThree() {
  return (
    <div className="max-w-[40%]">
      <div className="flex flex-col gap-10">
        <Link
          className="text-white underline decoration-amber-400 underline-offset-6 text-xl pl-4"
          to="/projects"
        >
          See the projects that I've built
        </Link>

        <div className="flex gap-7 flex-col">
          <div className="pl-2 italic text-mist-400 text-lg">
            Technologies used to build this projects:
          </div>

          <div className="flex gap-10">
            <div>
              <img
                className="w-12 h-12 rounded-[50%] cursor-pointer hover:scale-105 transition ease-in-out after:content=[React]"
                src="/react.png"
                alt="React"
              />
            </div>
            <div>
              <img
                className="w-12 h-12 rounded-[50%] cursor-pointer hover:scale-105 transition ease-in-out"
                src="/tailwind.svg"
                alt="Tailwind"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SecThree;
