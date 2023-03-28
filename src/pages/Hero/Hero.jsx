import React from "react";
import Header from "../../components/Header/Header";
import Imagery from "../../components/Imagery/Imagery";
import TextBlock from "../../components/TextBlock/TextBlock";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div>
      <Header />
      <div className={styles["hero-section"]}>
        <TextBlock />
        <Imagery />
      </div>
    </div>
  );
};

export default Hero;
