import React from "react"
import "./navbar.css" 

export default function navbar() {
    return (
        <div className="nav">
            <div className="topLeft">
                <ul className="navBarList">
                    <li className="navBarItem"><a href="./Pages.Home.home.jsx">Home</a></li>
                    <li className="navBarItem"><a href="./Pages.Blogs.blogs.jsx">Blogs</a></li>
                    <li className="navBarItem"><a href="./Pages.About.about.jsx">About</a></li>
                    <li className="navBarItem"><a href="./Pages.Contact.contact.jsx">Contact</a></li>
                    <li className="navBarItem"><a href="./Pages.Log In.login.jsx">Log In</a></li>
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
