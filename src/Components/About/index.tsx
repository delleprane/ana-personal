import data from "../../../data.json"

import "./About.css"

export function About() {
    const about = data.About;

    return (
        <div className="about">
            <div className="about-container">
                <h2>{about.title}</h2>
                <div className="display">
                    <div className="info">
                        {about.contents.map((info) => (
                            <p>{info.content}</p>
                        ))}
                    </div>
                    <div className="image">
                        <img src={about.image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}