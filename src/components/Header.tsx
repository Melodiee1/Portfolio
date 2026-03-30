/* Dependencies */
import { Link } from "react-router-dom";
import "../_essentials.css";

/* Main Header Component */
function Header() {
  return (
    <div id="header-container" className="flex justify-center p-2.5">
      <ul className="flex justify-center gap-7 bg-header p-4 py-5 border border-black rounded-2xl shadow-2xl shadow-black/80">
        {mapNavBar()}
      </ul>
    </div>
  );
}
export default Header;

/* Function for mapping the navigation links */
function mapNavBar() {
  interface _nav {
    title: string;
    path: string;
  }
  const nav: _nav[] = [
    { title: "About Me", path: "/about-me" },
    { title: "Projects", path: "/projects" },
    { title: "Skills", path: "/skills" },
    { title: "Contact", path: "/contact-me" },
  ];

  function NavCard({ title, path }: { title: string; path: string }) {
    return (
      <li className="list-none">
        <Link
          to={path}
          className="text-gray-100 text-base p-2 pr-4 pl-4 hover:bg-nav-hover rounded-md relative w-full after:absolute after:content-[''] after:bg-blue-500 after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full focus:after:w-full focus:after:h-0.5 focus:bg-nav-hover after:transition-all after:duration-300"
        >
          {title}
        </Link>
      </li>
    );
  }
  function mapCards() {
    return nav.map((link) => (
      <NavCard key={link.title} title={link.title} path={link.path} />
    ));
  }

  return mapCards();
}
