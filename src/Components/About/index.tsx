import data from "../../../data.json";

import "./About.css";

export function About() {
  const about = data.About;

  return (
    <section
      className="about"
      id="sobre"
      aria-labelledby="about-title"
    >
      <div className="about-container">
        <h2 id="about-title">{about.title}</h2>
        <div className="display">
          <div className="info">
            {about.contents.map((info, index) => (
              <p key={index}>{info.content}</p>
            ))}
          </div>
          <div className="image">
            <img
              src={about.image}
              alt="Imagem representativa sobre Ana Personal Trainer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
