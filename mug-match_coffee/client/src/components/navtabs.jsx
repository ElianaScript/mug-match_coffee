import React from "react";
import {Link} from "react-router-dom";

function NavTabs() {
    return (
        <ul className="nav-tabs">
            <li className="nav-item">
                <Link to='/'>Explore</Link>
            </li>
            <li className="nav-item">
                <Link to="/Post">Post</Link>
            </li>
            <li className="nav-item">
                <Link to="/Profile"> Profile</Link>
            </li>
            <li className="nav-item">
                <Link to="/Quiz">Quiz</Link>
            </li>
        </ul>
    );
}

export default NavTabs;