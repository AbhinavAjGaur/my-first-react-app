import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success ");
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success ");
  };
  const handleExClick = () => {
    console.log("Extra Space was removed ");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space was removed", "success ");
  };
  const handleClClick = () => {
    console.log("Text was Cleared " + text);
    let newText = " ";
    setText(newText);
    props.showAlert("Text was Cleared", "success ");

  };
  const handleDoClick = () => {
    console.log("Text was Doubled ");
    setText(text + " " + text);
    props.showAlert("Text was Doubled", "success ");

  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div className="container"  style={{Color : props.mode==='dark'?'#042743':'white'}} >
     
      <h1 className='mb-4' style={{color: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>        <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          {" "}
          convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          {" "}
          convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClClick}>
          {" "}
          Clear Text Area
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDoClick}>
          {" "}
          Double the Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExClick}>
          {" "}
          Remove Extra space
        </button>
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h1 className="my-3">Preview</h1>
        <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
      </div>
    </>
  );
}
