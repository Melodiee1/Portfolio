import { Link } from 'react-router-dom';
import './header.css'

interface nav_buttons {
    name: string,
    key: string,
    path: string,
};
const navButtons: nav_buttons[] = [
    { key: '1', name: 'About Me',           path: '/'           },
    { key: '2', name: 'Project Showcase',   path: '/projects'    },
    { key: '3', name: 'Contact Me',         path: '/contact'   },
];
function NavButtonCard({ name, path }: { name: string, path: string }) {
    return ( <li>   <Link to={path}>{name}</Link>   </li> )
};

function Header() {

function mapNavigationButtons() {
    return navButtons.map(button => (
        <NavButtonCard key={button.key} name={button.name} path={button.path} />
    ))
}

return (
    <header>
        <div className="int_header">
            <div className="sec_one">
                <div className="nav"> <ul>    { mapNavigationButtons() }     </ul> </div>
            </div>
        </div>
    </header>
)};
export default Header;