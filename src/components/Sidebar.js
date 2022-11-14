import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faUser, faBriefcase, faPaperPlane, faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
function Sidebar(props) {
    const menu = props.sidebar;
    const simpleSidebar = props.simpleSidebar
    const icons = [faHouse, faUser, faBriefcase, faFolderOpen, faPaperPlane];
    const navigate = useNavigate();
    return (
        <div className="menus">
            {menu.map((el, i) => {
                return <div className="menu" onClick={() => navigate(
                    el === "Home" ? "/" : "/"+el
                )}>
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