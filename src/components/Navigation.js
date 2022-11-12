import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

function Navigation() {
    const linkToGithub = () => {
        window.open("https://github.com/DevMyungyun")
    }
    return (
        <div className="nav">
            <div onClick={linkToGithub}>github</div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/example">Example</Link>
        </div>
    )
}

export default Navigation;