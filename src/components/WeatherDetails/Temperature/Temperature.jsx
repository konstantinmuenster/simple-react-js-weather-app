import React from "react";
import classes from "./Temperature.module.css";

const Temperature = ({ degrees }) => {
  return (
    <div className={classes.TemperatureWrapper}>
      {Math.round(degrees)}
      <span className={classes.TemperatureSymbol}>°</span>
    </div>
  );
};

export default Temperature;
