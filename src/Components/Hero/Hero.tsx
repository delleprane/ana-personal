import data from "../../../data.json"
import { motion } from "framer-motion";

import "./Hero.css"
import { Button } from "../Button";


export function Hero() {
    const hero = data.Hero;

    return (
        <section className="hero" id="home">
            <div className="hero-container" style={{ color: hero["textColor"] }}>
                <h1>{hero.title}</h1>
                <div className="image"
                    style={{
                        backgroundImage: `url(${hero["secondary-image"]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
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
                        }}>
                        <img src={hero["principla-image"]}
                            alt="Banner mulher malhando"
                             />
                    </motion.div>
                </div>
                <h2>{hero.subtitle}</h2>
                <div className="button">
                    <Button button={hero.button} />
                </div>
            </div>
        </section>
    )
}