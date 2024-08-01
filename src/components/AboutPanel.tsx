import "../styles/AboutPanel.css";

interface AboutPanelProps {
    onClickHandler: () => void;
}

export default function AboutPanel({ onClickHandler }: AboutPanelProps) {
    return (
        <div className="sidePanel">
            <h1 className="siteTitle" onClick={onClickHandler}>
                Kelly Yen
            </h1>
            <div className="about">
                <p>
                    Hello World! I'm a software developer, academic in training, and aspiring social
                    scientist passionate about understanding the systemic factors that influence
                    technology development.
                </p>
                <p></p>
                <p>
                    I'm currently looking for full time oppourtunities for Summer of 2025. Feel free
                    to reach out via Linkedin or email (kelly.sy.yen@gmail.com)
                </p>
                <br></br>
                <p>Resume</p>
            </div>

            <div className="socialLinks">
                <p>Github</p>
                <p>Linkedin</p>
                <p>
                    Bachelor's of Science in Engineering from Franklin W. Olin College of
                    Engineering (2023)
                </p>
                <p>Master's of Science in Information Networks from Aalto University (2026)</p>
            </div>
        </div>
    );
}
