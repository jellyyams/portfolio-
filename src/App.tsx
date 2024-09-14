import "./styles/App.css";
import "./fonts/KosugiMaru-Regular.ttf";
import { useState } from "react";
import AboutPanel from "./components/AboutPanel";
import ProjectCard from "./components/ProjectCard";
import ProjectPanel from "./components/ProjectPanel";
import * as data from "./data/projects.json";

export default function App() {
    type Project = {
        title: string;
        date: string;
        skills: string;
        description: string;
        mdfile: string;
        img: string;
        index: number;
    };
    const projectsjson = JSON.parse(JSON.stringify(data));
    const projects: Project[] = [];
    for (const i in projectsjson.projects) {
        const pUntyped = projectsjson.projects[i];
        const pObject: Project = {
            title: pUntyped.title,
            date: pUntyped.date,
            skills: pUntyped.skills,
            description: pUntyped.description,
            mdfile: pUntyped.mdfile,
            img: pUntyped.img,
            index: Number(i),
        };
        projects.push(pObject);
    }
    const [showCards, setShowCards] = useState(true);
    const [projectclicked, setProjectClicked] = useState(projects[0]);

    const onProjectCardClick = (p: Project) => {
        setProjectClicked(p);
        setShowCards(false);
    };

    const onClickNext = (curri: number) => {
        let nexti: number = curri + 1;
        nexti %= projects.length;
        setProjectClicked(projects[nexti]);
    };

    const onClickPrevious = (curri: number) => {
        let nexti: number = curri - 1;
        if (nexti < 0) nexti = projects.length - 1;
        setProjectClicked(projects[nexti]);
    };

    return (
        <>
            <div className="leftPanel">
                <AboutPanel onClickHandler={() => setShowCards(true)} />
            </div>
            {showCards ? (
                <div className="rightPanel">
                    {projects.map((project) => (
                        <ProjectCard
                            title={project.title}
                            date={project.date}
                            skills={project.skills}
                            description={project.description}
                            img={project.img}
                            onClickHandler={() => onProjectCardClick(project)}
                        />
                    ))}
                </div>
            ) : (
                <div className="rightPanel">
                    <ProjectPanel
                        title={projectclicked.title}
                        date={projectclicked.date}
                        skills={projectclicked.skills}
                        mdfile={projectclicked.mdfile}
                        index={projectclicked.index}
                        maxindex={projects.length - 1}
                        onClickHome={() => setShowCards(true)}
                        onClickNext={onClickNext}
                        onClickPrevious={onClickPrevious}
                    />
                </div>
            )}
        </>
    );
}
