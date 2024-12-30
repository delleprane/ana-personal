import data from "../../../data.json";
import { motion } from "framer-motion";

import "./Hero.css";
import { Button } from "../Button";

export function Hero() {
    const hero = data.Hero;

    return (
        <section
            className="hero"
            id="home"
            aria-labelledby="hero-title"
        >
            <div className="hero-container" style={{ color: hero.textColor }}>
                <h1 id="hero-title">{hero.title}</h1>
                <div
                    className="image"
                    style={{
                        backgroundImage: `url(${hero["secondary-image"]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    role="img"
                    aria-label="Fundo de academia"
                >
                    <motion.div
                        className="image-woman"
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 4, // Duração de cada ciclo
                            repeat: Infinity, // Repetição infinita
                            repeatType: "loop", // Tipo de repetição
                        }}
                    >
                        <img
                            src={hero["principla-image"]}
                            alt="Mulher malhando com roupa esportiva"
                        />
                    </motion.div>
                </div>
                <h2>{hero.subtitle}</h2>
                <div className="button">
                    <Button button={hero.button} />
                </div>
            </div>
        </section>
    );
}
