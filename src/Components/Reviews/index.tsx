import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Reviews.css";
import data from "../../../data.json";

export function Reviews() {
    const reviews = data.Reviews;
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = reviews.comments;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <section
            className="reviews"
            style={{ color: reviews.textColor }}
            id="reviews"
            aria-labelledby="reviews-title"
        >
            <div className="reviews-container">
                <h2 id="reviews-title">{reviews.title}</h2>
                <div className="carousel" style={{ backgroundColor: reviews.background, position: "relative" }}>
                    <div className="content">
                        <div className="quatation-left">
                            <img
                                src={reviews.image}
                                alt="Ícone de citação decorativa à esquerda"
                                className="top" />
                        </div>
                        <div className="info">
                            <div
                                onClick={prevSlide}
                                className="nav-button prev"
                                aria-label="Mostrar comentário anterior"
                            >
                                ◀
                            </div>
                            <div className="slide-container">
                                <AnimatePresence>
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="slide"
                                        aria-live="polite"
                                    >
                                        <div className="comment">
                                            <p style={{ fontWeight: "bold", fontSize: "1.2em" }} aria-label="Nome do autor do comentário">{slides[currentIndex].name}</p>
                                            <p aria-label="Texto do comentário">{slides[currentIndex].comment}</p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <div
                                onClick={nextSlide}
                                className="nav-button next"
                                aria-label="Mostrar próximo comentário"
                            >
                                ▶
                            </div>
                        </div>
                        <div className="quatation-right">
                            <img src={reviews.image}
                                alt="Ícone de citação decorativa à direita"
                                className="down"
                                style={{ transform: "scaleX(-1)", right: "0" }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
