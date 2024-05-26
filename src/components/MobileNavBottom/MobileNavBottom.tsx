import { faMap , faEnvelope, faFile, faBookmark} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./mobileNavBottom.scss"

export default function MobileNavBottom() {
    return (
        <ul className="mobile-nav-bottom">
                <li>
                    <NavLink to={'/'}>
                        <div>
                            <FontAwesomeIcon icon={faMap} />
                            <p>map</p>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/readme'}>
                        <div>
                            <FontAwesomeIcon icon={faBookmark} />
                            <p>readMe</p>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>contact</p>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/updateBoard'}>
                        <div>
                            <FontAwesomeIcon icon={faFile} />
                            <p>fetchNote</p>
                        </div>
                    </NavLink>
                </li>
            </ul>
    )
}