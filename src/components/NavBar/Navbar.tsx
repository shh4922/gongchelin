import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import "./navbar.scss"

function Navbar() {

    return (
        <header className='navbar'>
            <div className='navbar-content'>
                <Link to={"/"}><h1>유튜브 맛집 지도</h1></Link>
                <p>문의하기</p>
            </div>
        </header>
    );
}

export default Navbar;
