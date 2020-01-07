import React from "react";
import "./imageForm.css";
import Form from "./form/form";
import ImageF from "./imageF/imageF";
import axios from "axios";
const http = axios.create({ baseURL: "http://localhost:3000/" });

class ImageForm extends Form {
  state = {
    data: {
      title: "",
      price: "",
      image: ""
    }
  };

  doSubmit = () => {
    const data = { ...this.state.data };

    const db = new FormData();
    for (let value in data) {
      db.append(value, data[value]);
    }

    http.post("/image/add", db, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    console.log("done");
  };

  render() {
    return (
      <div className="container">
        <div className="title">
          <img src={"../image/icon.png"} className="icon" alt="logo" />
          <h2>Image Form</h2>
        </div>
        <div className="form-image">
          <ImageF />
        </div>
        <div className="form-content">
          <form onSubmit={this.handleOnSubmit}>
            {this.renderInput("Title", "title")}
            {this.renderInput("Price", "price")}
            {this.renderInputFile("image")}
            {this.renderBtn()}
          </form>
        </div>
      </div>
    );
  }
}

export default ImageForm;
