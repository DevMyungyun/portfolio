import React from "react";
import "./Sidebar.css";
function Sidebar() {
    return (
        <div>
            <a href="#home">
                <i class="fa fa-fw fa-home"></i>
                Home</a>
            <a href="#services">
                <i class="fa fa-fw fa-wrench"></i>
                Services</a>
            <a href="#clients">
                <i class="fa fa-fw fa-user"></i>
                Clients</a>
            <a href="#contact">
                <i class="fa fa-fw fa-envelope"></i>
                Contact</a>
        </div>
    )
}

export default Sidebar;