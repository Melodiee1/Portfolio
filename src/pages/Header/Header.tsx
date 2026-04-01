import "../../_essentials.css";

import DesktopNavbar from "./DesktopNavbar.tsx";
import MobileNavbar from "./MobileNavbar.tsx";

function Header() {
  return (
    <div className="nav-component z-100 sticky top-0 left-0 min-w-full flex justify-between p-3 2xl:p-10">
      <a
        className="text-white hover:text-amber-400 text-2xl tracking-wider font-semibold font-[Cursive] transition-all ease active:scale-[0.96] 2xl:text-5xl"
        href="#"
      >
        Portfolio
        <span className="text-amber-400">.</span>
      </a>

      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
}
export default Header;
