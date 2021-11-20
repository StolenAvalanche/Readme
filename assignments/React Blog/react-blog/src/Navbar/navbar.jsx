import React from "react"
import "./navbar.css" 
import {Link} from "react-router-dom"

export default function navbar() {
    return (
        <div className="nav">
            <div className="topLeft">
                <ul className="navBarList">
                    <li className="navBarItem"><Link to="/home">Home</Link></li>
                    <li className="navBarItem"><Link to="/blogs">Blogs</Link></li>
                    <li className="navBarItem"><Link to="/about">About</Link></li>
                    <li className="navBarItem"><Link to="/contact">Contact</Link></li>
                    <li className="navBarItem"><Link to="/login">Log In</Link></li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                className="logo"
                src="https://www.kindpng.com/picc/m/289-2898002_transparent-background-spider-man-logo-png-png-download.png" 
                alt="logo"/>
            </div>
        </div>
    )
}
