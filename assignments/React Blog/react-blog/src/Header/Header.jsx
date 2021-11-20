import "./header.css"

export default function header() {
    return (
        <div className="header">
           <div className="headerTitles">
               <span className="headerTitleSmall">A complete and constant update on where your friendly neighborhood 
               Spider-Man is and what he's up to.
               </span>
               <span className="headerTitleLarge">Where in the world is Spider-Man?</span>
           </div>
           <img className="headerImg" 
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh-BcoQ6VrnTr4JB21rdHbHlNUxYyq49_3Gw&usqp=CAU" 
           alt="HeaderImage"></img>
        </div>
    )
}
