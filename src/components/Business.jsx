import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import FeedbackCard from "./FeedbackCard";
import { features } from "../constants";

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do business, <br className="sm:block hidden" /> we'll handle the
          money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
          quibusdam. Quisquam hic accusamus ipsum natus commodi excepturi animi
          tempora corrupti expedita nisi dicta unde quas quasi alias, pariatur,
          reiciendis ea.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeedbackCard key={feature.id} {...feature} index />
        ))}
      </div>
    </section>
  );
};

export default Business;
