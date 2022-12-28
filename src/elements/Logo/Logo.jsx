import React from "react";
import classes from "./Logo.module.css";

const logo = (props) => {
  const logoWithColorScheme = [
    classes.Logo,
    props.colorScheme === "dark" ? classes.Dark : classes.Light,
  ];

  return (
    <h1 className={logoWithColorScheme.join(" ")} onClick={props.clicked}>
      My Weather
    </h1>
  );
};

export default logo;
