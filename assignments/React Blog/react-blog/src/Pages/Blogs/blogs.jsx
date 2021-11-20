import "./blogs.css"
import content from "../../content"

export default function blogs() {
    return (
        content.map((blog, i) => (

        <div key={i}> 
            {blog.title}
        </div>
        )
    ))
}
