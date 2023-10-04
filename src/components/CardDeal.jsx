import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find abetter deal <br className="sm:block hidden" />
          in few steps
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          eaque doloremque! Veritatis necessitatibus ab sequi magni enim velit,
          nihil cumque iusto, dignissimos doloremque repellendus cupiditate
          culpa omnis nulla. Accusamus, libero.
        </p>
        <Button styles="mt-5" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
