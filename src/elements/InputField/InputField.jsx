import React from "react";
import classes from "./InputField.module.css";
import assetMapping from "../../assets/assetMapping.json";

const InputField = ({
  name,
  type,
  placeholder,
  value,
  handleChange,
  error,
  label,
}) => {
  return (
    <div className={classes.InputFieldWrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        style={error ? { borderBottomColor: assetMapping.colors.error } : null}
        required
      />
    </div>
  );
};

export default InputField;
