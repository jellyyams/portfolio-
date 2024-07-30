import { useEffect, useState } from "react";
import "../styles/ProjectPanel.css"
import Markdown from "react-markdown"

interface ProjectPanelProps{
    title:string, 
    date:string, 
    skills:string, 
    mdfile:string
}

export default function ProjectPanel({title, date, skills, mdfile}:ProjectPanelProps) {
    const [md, setMD] = useState(""); 
    useEffect(() => {
        fetch(mdfile)
            .then((res) => res.text())
            .then((text) => setMD(text))
    })
    console.log(md)

    return (
        <div className="projectinfo">
            <div className = "header1">
                <p className = "title1">{title}</p>
                <p className = "date1">{date}</p>
            </div>
            <h2 className="skills1">{skills}</h2>
            <Markdown>{md}</Markdown>
        </div>
    );
}
