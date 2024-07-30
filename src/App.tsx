import "./styles/App.css";
import "./fonts/KosugiMaru-Regular.ttf";
import { useState } from "react";
import AboutPanel from "./components/AboutPanel";
import ProjectCard from "./components/ProjectCard";
import ProjectPanel from "./components/ProjectPanel";
import * as data from "./data/projects.json"

function App() {
    const [view, setView] = useState(""); 
    const [projecti, setProjectI] = useState(0); 

    const projectsjson = JSON.parse(JSON.stringify(data))
    const projects = []; 
    for (const i in projectsjson.projects) projects.push(projectsjson.projects[i])
    
    return (
        <>
            <div className="leftPanel">
                <AboutPanel />
            </div>
            {console.log(projects)}
            <div className="rightPanel">
                {projects.map(project => (
                     <ProjectCard 
                        title = {project.title}
                        date = {project.date}
                        skills = {project.skills}
                        description = {project.description}

                    />
                ))}
           
            </div> 
            {/* <div className="rightPanel">
                <ProjectPanel
                title="Kyaro Assistive Tech"
                date = "June 2023"
                skills = "Visual Design | Photography | Website Building"
                mdfile = "projects/kyaro.md"
                />
            </div> */}
        </>
    );
}

export default App;
