import NavbarCard from "./NavbarCard.tsx";

interface _nav_links {
  title: string;
  path: string;
}
const navLinks: _nav_links[] = [
  { title: "About Me", path: "/about-me" },
  { title: "Projects", path: "/projects" },
  { title: "Skills", path: "/skills" },
  { title: "Contact Me", path: "/contact-me" },
];

function DesktopNavbar() {
  return (
    <div className="hidden md:flex gap-4">
      {navLinks.map((link, index) => (
        <NavbarCard
          key={index}
          title={link.title}
          path={link.path}
          className=""
        />
      ))}
    </div>
  );
}
export default DesktopNavbar;
