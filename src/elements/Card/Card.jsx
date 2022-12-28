import React from "react";
import classes from "./Card.module.css";

const Card = ({ children }) => {
  return <div className={classes.Card}>{children}</div>;
};

export default Card;
