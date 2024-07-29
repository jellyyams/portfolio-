import "../styles/ProjectCard.css"
import { useState } from "react";



export default function ProjectCard() {
    // const [hover, setHover] = useState(false);
    // const onHover = () => {
    //     setHover(true); 
    // }
    // const onHoverOver = () => {
    //     setHover(false); 
    // }
    // const HoverData = "This sentence is a Project descirption, describing what the project is about."

    return(
        <div className="card">
            <div className = "imgcontainer">
                <div className="overlay">
                    Hello There this is the overlay this is a sentence lk odf asldk  wlekr asldkfja sdi welk dilal .
                </div>
             
                <img 
                    className="image" 
                    src="src/assets/test.jpeg" 
                />
            </div>
          
           
            <div className="cardtext">
                <h2 className="title">Title of Project</h2>
                <p className="position">
                    Project Manager | User Research{"\n\n"}
                </p>

                <p className="date">July 2023</p>

            </div>
        </div>
    )

}