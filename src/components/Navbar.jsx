import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navigation">
            <div className="nav-elements">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/topics">Topics</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;