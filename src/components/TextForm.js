import React, { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  };
  const clearAll = () => {
    setText("");
    props.showAlert("Cleared","success");
  };
  
  const onChange = (event) => {
    setText(event.target.value);
  };
  
  
  const copyAll = () => {
    let myBox = document.getElementById("myBox");
    myBox.select();
    navigator.clipboard.writeText(myBox.value);
    setCopyText("Copied");
    props.showAlert("Copied to clipboard!","success");
    setTimeout(() => {
      setCopyText("Copy Text");
    }, 1500);
  };
  const removeExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed","success");
  }
  
  
  
  const extractEmails = () => {
    let newEmail = text.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
    );
    setEmail(newEmail);
    props.showAlert("Email Extracted","success");
  };
  const emailChange=(event)=>{
    setEmail(event.target.value)
  }
  
  const clearEmail = () => {
    setEmail('');
    props.showAlert("Cleared","success");
  };
  const copyEmail = ()=>{
    let emailBox = document.getElementById('emailBox');
    emailBox.select();
    navigator.clipboard.writeText(emailBox.value);
    setCopyEmailText("Copied");
    props.showAlert("Copied to clipboard!","success");
    setTimeout(() => {
      setCopyEmailText("Copy Text");
    }, 1500);
  }

  const [text, setText] = useState("");
  const [copyText, setCopyText] = useState("Copy Text");
  const [copyEmailText, setCopyEmailText] = useState("Copy Email");
  const [email, setEmail] = useState("");
  
  return (
    <>
      <div>
        <div className="mb-3 ">
          <h1>{props.heading}</h1>
          <textarea
            value={text}
            onChange={onChange}
            className={`form-control bg-${props.mode} text-${props.mode==='dark' ? 'light' :'dark'}`}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button onClick={upperCase} className=" btn btn-primary">
          Convert to Upper Case
        </button>
        <button onClick={lowerCase} className="btn mx-3 btn-primary">
          Convert to Lower Case
        </button>
        <button onClick={clearAll} className="btn mx-3 btn-primary">
          Clear Text
        </button>
        <button onClick={copyAll} className="btn mx-3 btn-primary">
          {copyText}
        </button>
        <button onClick={removeExtraSpace} className="btn mx-3 btn-primary">
          Remove Extra Spaces
        </button>
      </div>
      <div className=" container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} Characters
        </p>
        <p> You can read this in {0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
      <div>
        <h1>Extract Emails</h1>
        <button className="btn btn-primary my-3" onClick={extractEmails}>
          Extract Emails
        </button>
        <p>Emails: <textarea
            value={email}
            id="emailBox"
            onChange={emailChange}
            className={`form-control bg-${props.mode} text-${props.mode==='dark' ? 'light' :'dark'}`}
            rows="3"
          ></textarea></p>
        <button className="btn btn-primary my-3" onClick={clearEmail}>
          Clear
        </button>
        <button onClick={copyEmail} className="btn mx-3 btn-primary">
          {copyEmailText}
        </button>
      </div>
    </>
  );
}
