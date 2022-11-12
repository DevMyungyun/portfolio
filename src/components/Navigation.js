import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './Navigation.css'

function Navigation() {
    const linkToGithub = () => {
        window.open("https://github.com/DevMyungyun")
    }
    const linkToLinkedin = () => {
        window.open("https://www.linkedin.com/in/myeong-yeon-cho-3309b9161/")
    }
    return (
        <div className="nav">
            <FontAwesomeIcon onClick={linkToGithub} icon={faGithub} />
            <FontAwesomeIcon onClick={linkToLinkedin} icon={faLinkedin} />
        </div>
    )
}

export default Navigation;