import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { img: null, listimg: [] };
    this.imageUpload = this.imageUpload.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  imageUpload(e) {
    this.setState({
      img: URL.createObjectURL(e.target.files[0]),
      listimg: [...this.state.listimg, URL.createObjectURL(e.target.files[0])]
    });
  }

  removeImage(e) {
    var arrayImg = [...this.state.listimg];
    var indexOfimg = arrayImg.indexOf(e.target.src);

    if (indexOfimg !== -1) {
      arrayImg.splice(indexOfimg, 1);
      this.setState({ listimg: arrayImg });
    }
  }

  render() {
    return (
      <div>
        <div
          className="imageUpload"
          style={{
            width: "auto",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            height: "300px",
            margin: "2%",
            display: "flex"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%"
            }}
          >
            {this.state.listimg.map(img => (
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  marginLeft: "5%",
                  justifyContent: "space-around",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
                src={img}
                onClick={this.removeImage}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              margin:"2%"
            }}
          >
            <button
              style={{ height: "25px" }}
              type="button"
              onClick={() => this.fileinInput.click()}
            >
              Upload
            </button>
          </div>
        </div>
        <div className="uploadFile" />
        <input
          style={{ display: "none" }}
          type="file"
          ref={input => (this.fileinInput = input)}
          onChange={this.imageUpload}
        />
      </div>
    );
  }
}

export default App;
