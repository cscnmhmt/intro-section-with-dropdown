import React from "react";
import Imagery from "../../components/Imagery/Imagery";
import TextBlock from "../../components/TextBlock/TextBlock";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles["hero-section"]}>
      <TextBlock />
      <Imagery />
    </div>
  );
};

export default Hero;
