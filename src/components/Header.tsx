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
        <Link to={path} className="">
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
