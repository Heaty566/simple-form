import React from "react";
import "./inputFile.css";

const InputFile = ({ name, ...rest }) => {
  return (
    <input
      className="form-input-file"
      type="file"
      {...rest}
      name={name}
      id={name}
    />
  );
};

export default InputFile;
