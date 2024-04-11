import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import "./navbar.scss"

function Navbar() {

    return (
        <header className='navbar'>
            <div className='navbar-content'>
                <Link to={"/"}><h1>맛있는 길찾기</h1></Link>
                <p>맛집이란 맛집은 모두 올려드립니다.</p>
            </div>
        </header>
    );
}

export default Navbar;
