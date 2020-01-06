import React, { Component } from "react";
import "./main.css";
import axios from "axios";
import Img from "react-image";
const port = axios.create({ baseURL: "http://localhost:3000/" });

class Main extends Component {
  state = {
    file: "",
    title: "test",
    price: 111
  };

  handleOnChangeImage = event => {
    this.setState({ file: event.currentTarget.files[0] });
    this.openFile(event);
  };

  openFile = function(file) {
    var input = file.target;

    var reader = new FileReader();
    reader.onload = function() {
      var dataURL = reader.result;
      var output = document.getElementById("target");
      output.src = dataURL;
    };

    reader.readAsDataURL(input.files[0]);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const db = new FormData();
    db.append("image", this.state.file);
    db.append("price", this.state.price);
    db.append("title", this.state.title);
    port.post("/image/add", db, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  };

  render() {
    const src = ["../image/ss.jpg", "../image/pop.jpg", "../image/eee.png"];
    let index = 0;

    console.log(index);
    return (
      <div className="wrapper">
        <Img src={""} />
        <img id="target" />
        <form onSubmit={this.handleOnSubmit}>
          <input type="file" onChange={this.handleOnChangeImage} id="src" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Main;
