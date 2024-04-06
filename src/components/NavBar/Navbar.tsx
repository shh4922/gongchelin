
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


function Navbar() {

    return (
        <nav className='navbar'>
            <div className='navbar-content'>
                <h1>공슐랭 가이드</h1>
                <ul className='links'>
                    <li>
                        <a className="login-icon" href="/login">
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                    </li>
                    <li>
                        <a className='youtube' href='https://www.youtube.com/results?search_query=%EA%B3%B5%ED%98%81%EC%A4%80' target="_blank" aria-label='공혁준 유튜브 바로가기'>
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
