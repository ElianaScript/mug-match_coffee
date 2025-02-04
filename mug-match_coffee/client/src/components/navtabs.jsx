import React from "react";
import {Link} from "react-router-dom";

function NavTabs() {
    return (
        <ul className="nav-tabs">
            <li className="nav-item">
                <Link to='/'>Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/Post">Favorites</Link>
            </li>
            <li className="nav-item">
                <Link to="/Profile"> Profile</Link>
            </li>
            <li className="nav-item">
                <Link to="/Quiz">Quiz</Link>
            </li>
            <li className="nav-item">
                <Link to="/coffeeshops">Coffee Shops</Link>
            </li>
        </ul>
    );
}

export default NavTabs;