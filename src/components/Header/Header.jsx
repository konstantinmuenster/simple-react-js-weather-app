import React from "react";
import classes from "./Header.module.css";
import Logo from "../../elements/Logo/Logo";

const Header = ({ onClickHandler, color }) => {
  return (
    <header className={classes.Header} style={{ backgroundColor: color }}>
      <Logo colorScheme={"light"} clicked={onClickHandler} />
    </header>
  );
};

export default Header;
