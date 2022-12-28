import React from "react";
import classes from "./Button.module.css";

const Button = ({ position, type, name, clicked, children }) => {
  const buttonClasses = [
    classes.ButtonWrapper,
    position === "onForm" ? classes.FormButtonWrapper : null,
  ];
  return (
    <div className={buttonClasses.join(" ")}>
      <button type={type} name={name} onClick={clicked}>
        {children}
      </button>
    </div>
  );
};

export default Button;
