import data from "../../../data.json"
import { motion } from "framer-motion";

import "./Hero.css"
import { Button } from "../Button";


export function Hero() {
    const hero = data.Hero;

    return (
        <div className="hero">
            <div className="hero-container" style={{ color: hero["textColor"] }}>
                <h1>{hero.title}</h1>
                <div className="image"
                    style={{
                        backgroundImage: `url(${hero["secondary-image"]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "300px",
                        height: "300px"
                    }}
                >
                    <motion.div
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
                            style={{
                                width: "300px",
                                height: "300px"
                            }} />
                    </motion.div>
                </div>
                <h2>{hero.subtitle}</h2>
                <div className="button">
                    <Button button={hero.button} />
                </div>
            </div>
        </div>
    )
}