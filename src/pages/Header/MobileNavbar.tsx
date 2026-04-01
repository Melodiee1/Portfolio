import NavbarCard from "./NavbarCard.tsx";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface _nav_links {
  title: string;
  path: string;
}
const navLinks: _nav_links[] = [
  { title: "About Me", path: "/about-me" },
  { title: "Projects", path: "/projects" },
  { title: "Contact Me", path: "/contact-me" },
];

function MobileNavbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      {/* Mobile Navbar Button */}
      <div className="flex md:hidden">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-white cursor-pointer"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navbar */}
      {isMenuOpen && (
        <div
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
          className="nav-component-1 fade-in absolute top-15 left-0 flex flex-col min-w-full"
        >
          {navLinks.map((link, index) => (
            <NavbarCard
              key={index}
              title={link.title}
              path={link.path}
              className="text-white text-lg font-normal"
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default MobileNavbar;
