import { useEffect, useState } from "react";
import "../styles/ProjectPanel.css";
import Markdown from "react-markdown";

interface ProjectPanelProps {
    title: string;
    date: string;
    skills: string;
    mdfile: string;
    index: number;
    maxindex: number;
    onClickNext: (arg: number) => void;
    onClickPrevious: (arg: number) => void;
    onClickHome: () => void;
}

export default function ProjectPanel({
    title,
    date,
    skills,
    mdfile,
    index,
    maxindex,
    onClickNext,
    onClickPrevious,
    onClickHome,
}: ProjectPanelProps) {
    const [md, setMD] = useState("");
    useEffect(() => {
        fetch(mdfile)
            .then((res) => res.text())
            .then((text) => setMD(text));
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });

    return (
        <div className="projectpage">
            {/* <div className="closecontainer">
            <p className="closebutton" onClick={onClickHome}>
            Close X
            </p>

            </div> */}

            <div className="projectinfo">
                <div className="header1">
                    <p className="title1">{title}</p>
                    <p className="date1">{date}</p>
                </div>
                <h2 className="skills1">{skills}</h2>
                <Markdown>{md}</Markdown>
            </div>

            <div className="buttons">
                {index > 0 && (
                    <p className="previousbutton" onClick={() => onClickPrevious(index)}>
                        {"<-"} Previous Projects
                    </p>
                )}
                <p className="homebutton" onClick={onClickHome}>
                    View All Projects
                </p>
                {index < maxindex && (
                    <p className="nextbutton" onClick={() => onClickNext(index)}>
                        Next Project {"->"}
                    </p>
                )}
            </div>
        </div>
    );
}
