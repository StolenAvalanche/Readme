import "./post.css"

export default function post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="data:image/jpeg;base64,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" alt="spider-man with caps shield"></img>
       <div className="postInfo">
           <div className="postCats">
               <span className="postCat">Germany</span>
           </div>
           <span className="postTitle">Spider-Man</span><br/>
           <span className="postDate">09/24/2017</span>
           <hr/>
       </div>
       </div>
    )
}