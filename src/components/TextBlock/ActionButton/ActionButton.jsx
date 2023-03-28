import React from "react";
import styles from "./button.module.css";

const ActionButton = (props) => {
  return <button className={styles["hero-btn"]}>{props.buttonText}</button>;
};

export default ActionButton;
