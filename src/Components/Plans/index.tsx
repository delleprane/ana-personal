import data from "../../../data.json"
import { Button } from "../Button";
import { motion } from "framer-motion";

import "./Plans.css"

export function Plans() {
    const plans = data.Plans;

    return (
        <section className="plans" style={{ color: plans.textColor }} id="planos">
            <div className="plans-container">
                <h2>{plans.title}</h2>
                <div className="metods">
                    {plans.plans.map((plan) => (
                        <motion.div
                            className="metod"
                            initial={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }} // Estado inicial
                            whileInView={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)" }} // Durante a visualização
                            transition={{ duration: 0.8 }} 
                        >
                            <img src={plan.icon} alt="" />
                            <div className="info">
                                <h3>{plan.tile}</h3>
                                <p>{plan.content}</p>
                            </div>
                            <Button button={plan.button} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}