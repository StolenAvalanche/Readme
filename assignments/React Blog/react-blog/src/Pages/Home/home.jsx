import "./home.css"
import Header from "../../Header/Header"
import Posts from "../../posts/posts"

export default function home() {
    return ( 
        <> 
        <Header/>
        <div className="home">
         <Posts/> 
        </div>
        </>
    )
}
