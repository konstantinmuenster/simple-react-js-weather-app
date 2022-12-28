import React from "react";
import classes from "./Description.module.css";

const Description = ({ type }) => {
  return <div className={classes.DescriptionWrapper}>{type}</div>;
};

export default Description;
