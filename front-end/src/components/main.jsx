import React, { Component } from "react";
import "./main.css";
import ImageForm from "./common/imageForm/imageForm";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <ImageForm />
      </div>
    );
  }
}

export default Main;
