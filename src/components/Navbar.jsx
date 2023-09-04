import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navigation">
            Navigation
        <div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
        </div>
        </nav>
    )
}

export default Navbar