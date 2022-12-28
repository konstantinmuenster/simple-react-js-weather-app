import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../elements/Logo/Logo";

const Footer = ({ onClickHandler }) => {
  return (
    <footer className={classes.Footer}>
      <Logo colorScheme="dark" clicked={onClickHandler} />
      <div className={classes.Separator}></div>
    </footer>
  );
};

export default Footer;
