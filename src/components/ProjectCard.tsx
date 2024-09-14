import "../styles/ProjectCard.css";

interface ProjectCardProps {
    title: string;
    date: string;
    skills: string;
    description: string;
    img: string; 
    onClickHandler: () => void;
}

export default function ProjectCard({
    title,
    date,
    skills,
    description,
    img,
    onClickHandler,
}: ProjectCardProps) {
    return (
        <div className="card" onClick={onClickHandler}>
            <div className="imgcontainer">
                <div className="overlay">{description}</div>

                <img className="image" src={img} />
               
            </div>

            <div className="cardtext">
                <h2 className="title">{title}</h2>
                <p className="position">{skills}</p>
            </div>
            <p className="date">{date}</p>
        </div>
    );
}
