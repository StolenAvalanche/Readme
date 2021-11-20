import "./home.css"
import Header from "../../Header/Header"
import Posts from "../../posts/posts"
import {Switch, Route} from "react-router-dom"
import Blogs from "../Blogs/blogs";
import Contact from "../Contact/contact";
import Login from "../Log In/login";
import About from "../About/about";

export default function home() {
    return ( 
        <div className="home">
                <Header/>
                <Posts/> 
        </div>
    )
}
