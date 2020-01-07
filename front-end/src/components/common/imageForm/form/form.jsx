import React, { Component } from "react";
import Input from "./input/input";
import "./form.css";
import InputFile from "./input/inputFile";
import Btn from "./btn/btn";

class Form extends Component {
  state = {
    data: {}
  };

  handleOnChangeText = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    console.log(data);
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleOnChangeFile = ({ currentTarget: input }) => {
    var reader = new FileReader();
    reader.onload = function() {
      var dataURL = reader.result;
      var output = document.getElementById("image-show");
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
    const data = { ...this.state.data };
    data[input.name] = input.files[0];
    this.setState({ data });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.doSubmit();
  };

  renderInput = (label, name) => {
    const { data } = this.state;
    return (
      <Input
        label={label}
        name={name}
        onChange={this.handleOnChangeText}
        value={data[name]}
      />
    );
  };
  renderInputFile = name => {
    return <InputFile onChange={this.handleOnChangeFile} name={name} />;
  };
  renderBtn = () => {
    return <Btn />;
  };
}

export default Form;
