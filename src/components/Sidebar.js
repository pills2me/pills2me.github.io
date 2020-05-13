import React from "react";
import "../style.css";
import { slide as Menu } from "react-burger-menu";

const Sidebar = () => {
    return (
        <Menu>
            <a className="menu-item" href="/">Home</a>

            <a className="menu-item" href="/about">About</a>

            <a className="menu-item" href="/news">News</a>

            <a className="menu-item" href="/donate">Donate</a>

            <a className="menu-item" href="/contact">Contact Us</a>

        </Menu>
    );
}

export default Sidebar;