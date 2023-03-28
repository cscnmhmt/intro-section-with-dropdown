import React from "react";
import { description } from "./description.module.css";

const Description = (props) => {
  return <p className={description}>{props.description}</p>;
};

export default Description;
