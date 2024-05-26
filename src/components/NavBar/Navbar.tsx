import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import "./navbar.scss"

function Navbar() {
    return (
        <header className='navbar'>
            <Link to={"/"}>유튜브 맛집 지도</Link>
            <nav>
                <Link to={"/readme"}>readMe</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/updateBoard"}>fetchNote</Link>
            </nav>

        </header>
    );
}

export default Navbar;
