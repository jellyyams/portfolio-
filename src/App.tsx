import "./styles/App.css";
import "./fonts/KosugiMaru-Regular.ttf"
import AboutPanel from "./components/AboutPanel";
import ProjectCard from "./components/ProjectCard";

function App() {
    return (
        <>

            <div className="parentPanel">
                <AboutPanel />
            </div>
            <div className="cardPanel">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
 
            
        </>
    );
}

export default App;
