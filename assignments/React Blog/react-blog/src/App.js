import React from "react";
import Navbar from "./Navbar/navbar";
import About from "./Pages/About/about";
import Home from "./Pages/Home/home";
import Blogs from "./Pages/Blogs/blogs";
import Contact from "./Pages/Contact/contact";
import Login from "./Pages/Log In/login";
import Footer from "./Footer/footer";
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Blogs/>
    <About/>
    <Contact/>
    <Login/>
    <ScrollToTop/>
    <Footer/>
    </>
  );
}

export default App;
