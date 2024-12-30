import data from "../../../data.json";
import { Button } from "../Button";
import { motion } from "framer-motion";

import "./Plans.css";

export function Plans() {
  const plans = data.Plans;

  return (
    <section
      className="plans"
      style={{ color: plans.textColor }}
      id="planos"
      aria-labelledby="plans-title"
    >
      <div className="plans-container">
        <h2 id="plans-title">{plans.title}</h2>
        <div className="metods">
          {plans.plans.map((plan, index) => (
            <motion.div
              key={index}
              className="metod"
              initial={{
                clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)",
              }}
              whileInView={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              transition={{ duration: 0.8 }}
              aria-labelledby={`plan-title-${index}`}
            >
              <img
                src={plan.icon}
                alt={`Ícone do plano ${plan.tile}`}
                loading="lazy"
              />
              <div className="info">
                <h3 id={`plan-title-${index}`}>{plan.tile}</h3>
                <p>{plan.content}</p>
              </div>
              <Button button={plan.button} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
