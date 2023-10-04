import React from "react";
import Button from "./Button";
import styles from "../style";

const CTA = () => {
  return (
    <section
      id="CTA"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} text-white sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero porro
          laborum aliquam magni? Totam sed nostrum fugiat asperiores eos, fugit
          assumenda dolorem in cum a, est quod nulla saepe corporis.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0  sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
