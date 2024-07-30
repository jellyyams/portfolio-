import "../styles/ProjectCard.css";

interface ProjectCardProps{
    title:string, 
    date:string, 
    skills:string, 
    description:string

}

export default function ProjectCard({title, date, skills, description} : ProjectCardProps) {
    // const [hover, setHover] = useState(false);
    // const onHover = () => {
    //     setHover(true);
    // }
    // const onHoverOver = () => {
    //     setHover(false);
    // }
    // const HoverData = "This sentence is a Project descirption, describing what the project is about."

    return (
        <div className="card">
            <div className="imgcontainer">
                <div className="overlay">
                    {description}
                </div>

                <img className="image" src="src/assets/test.jpeg" />
            </div>

            <div className="cardtext">
                <h2 className="title">{title}</h2>
                <p className="position">{skills}</p>

                <p className="date">{date}</p>
            </div>
        </div>
    );
}
