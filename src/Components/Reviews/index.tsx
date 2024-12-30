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
        <section className="reviews" style={{ color: reviews.textColor }} id="reviews">
            <div className="reviews-container">
                <h2>{reviews.title}</h2>
                <div className="carousel" style={{ backgroundColor: reviews.background, position: "relative" }}>
                    <div className="content">
                        <div className="quatation-left">
                            <img src={reviews.image} alt="" className="top" />
                        </div>
                        <div className="info">
                            <div onClick={prevSlide} className="nav-button prev">◀</div>
                            <div className="slide-container">
                                <AnimatePresence>
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="slide"
                                    >
                                        <div className="comment">
                                            <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>{slides[currentIndex].name}</p>
                                            <p>{slides[currentIndex].comment}</p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <div onClick={nextSlide} className="nav-button next">▶</div>
                        </div>
                        <div className="quatation-right">
                            <img src={reviews.image} alt="" className="down" style={{ transform: "scaleX(-1)", right: "0" }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
