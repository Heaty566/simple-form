import React from "react";
import "./input.css";

const Input = ({ label, name, ...rest }) => {
  return (
    <input
      type="text"
      className="form-control"
      autoComplete="off"
      {...rest}
      name={name}
      id={name}
      placeholder={label}
    />
  );
};

export default Input;
