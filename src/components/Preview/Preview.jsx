import React from "react";
import classes from "./Preview.module.css";

const Preview = () => {
  return (
    <img
      src={require("../../assets/images/Preview.svg")}
      alt="Weather App Icon"
      className={classes.Preview}
    />
  );
};

export default Preview;
