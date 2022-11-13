import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './Navigation.css'
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Navigation(props) {
    const link = props.navigation.link;
    const sidebarIconClick = () => {
        props.simpleSidebarClick();
    }
    const linkToGithub = () => {
        window.open(link.github);
    }
    const linkToLinkedin = () => {
        window.open(link.linkedin);
    }
    return (
        <div className="nav">
            <div className="left">
                <FontAwesomeIcon icon={faBars}
                    onClick={sidebarIconClick}
                />
            </div>
            <div className="right">
                <FontAwesomeIcon onClick={linkToGithub} icon={faGithub}/>
                <FontAwesomeIcon onClick={linkToLinkedin} icon={faLinkedin}/>
            </div>

        </div>
    )
}

export default Navigation;