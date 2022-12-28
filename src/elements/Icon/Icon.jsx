import React from "react";
import classes from "./Icon.module.css";

const Icon = ({ type }) => {
  return (
    <img
      src={require(`../../assets/images/${type}.svg`)}
      alt={type}
      className={classes.Icon}
    />
  );
};

export default Icon;
