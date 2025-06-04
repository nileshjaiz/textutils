import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log('On Change')
    setText(event.target.value);
  };

  const handleUpClick = () => {
    // console.log('Uppercase was clicked' + Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    // console.log('Uppercase was clicked' + Text);
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleClearClick = () => {
    // console.log('Uppercase was clicked' + Text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const [Text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ Color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control border-dark"
            value={Text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LOWERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ Color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 color>Your Text Summary</h2>
        <p>
          {Text.split(" ").length} words and {Text.length} characters
        </p>
        <p>{0.008 * Text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{Text}</p>
      </div>
    </>
  );
}
