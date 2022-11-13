import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faUser, faList, faBriefcase, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import React from "react";
import "./Sidebar.css";
function Sidebar(props) {
    const menu = props.sidebar;
    const simpleSidebar = props.simpleSidebar
    const icons = [faHouse, faUser, faList, faBriefcase, faPaperPlane];

    return (
        <div className="menus">
            {menu.map((el, i) => {
                return <div className="menu">
                    <FontAwesomeIcon icon={icons[i]}/> 
                    {!simpleSidebar
                        ? <span>{el}</span>
                        : null}

                </div>
            })
}

        </div>
    )
}

export default Sidebar;