import React from "react";
import "../style.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Menu>
            <Link className="menu-item" to="/">Home</Link>

            <Link className="menu-item" to="/about">About</Link>

            <Link className="menu-item" to="/news">News</Link>

            <Link className="menu-item" to="/donate">Partner with Us</Link>

            <Link className="menu-item" to="/donate">Donate</Link>

            <Link className="menu-item" to="/contact">Contact Us</Link>

        </Menu>
    );
}

export default Sidebar;