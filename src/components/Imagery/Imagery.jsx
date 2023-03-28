import React from "react";
import HeroImage from "/image-hero-desktop.png";
import styles from "./imagery.module.css";

const Imagery = () => {
  return (
    <div className={styles.imagery}>
      <img src={HeroImage} alt="" />
    </div>
  );
};

export default Imagery;
