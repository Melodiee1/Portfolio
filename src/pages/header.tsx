import { Link } from 'react-router-dom';

interface nav_buttons { title: string, path: string, };
const navButtons: nav_buttons[] = [
    { title: 'About Me', path: '/' },
    { title: 'Project Menu', path: '/projectMenu' },
    { title: 'Contact', path: '/contact' },
];
function NavButtonCard({ title, path }: { title: string, path: string }) {
    return <li> <Link to={path}> {title} </Link> </li>
}

function Header() {
    function MapNavButtons() {
        return navButtons.map(button => (<NavButtonCard title={button.title} path={button.path} />))
    }

    return (
        <header>
            <div className="int-header">
                { /* Navigation System */}
                <div className="navigation-container">
                    <ul className='navigation-list'> {MapNavButtons()} </ul>
                </div>

            </div>
        </header>
    )
}
export default Header;