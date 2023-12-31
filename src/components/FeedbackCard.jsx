import React from "react";
import { features } from "../constants";
import styles from "../style";

const FeedbackCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card cursor-pointer`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="icon" className="h-[50%] w-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3 text-white">
        <h4 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins text-[16px] leading-[24px] mb-1 text-dimWhite">
          {content}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
