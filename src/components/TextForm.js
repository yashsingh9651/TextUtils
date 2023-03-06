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
    navigator.clipboard.writeText(text);
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
    )||text.match(" ");
    setEmail(newEmail);
    if(text.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
    )){
      props.showAlert("Email Extracted","success");
    }
  };
  const emailChange=(event)=>{
    setEmail(event.target.value)
  }
  
  const clearEmail = () => {
    setEmail('');
    props.showAlert("Cleared","success");
  };
  const copyEmail = ()=>{
    navigator.clipboard.writeText(email);
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
          <h1>Enter Text Here</h1>
          <textarea
            value={text}
            onChange={onChange}
            className={`form-control bg-${props.mode} text-${props.mode==='dark' ? 'light' :'dark'}`}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button disabled={text.length===0} onClick={upperCase} className=" btn btn-primary my-2 mx-3">
          Convert to Upper Case
        </button>
        <button disabled={text.length===0} onClick={lowerCase} className="btn mx-3 my-2 btn-primary">
          Convert to Lower Case
        </button>
        <button disabled={text.length===0} onClick={clearAll} className="btn mx-3 my-2 btn-primary">
          Clear Text
        </button>
        <button disabled={text.length===0} onClick={copyAll} className="btn mx-3 my-2 btn-primary">
          {copyText}
        </button>
        <button disabled={text.length===0} onClick={removeExtraSpace} className="btn mx-3 my-2 btn-primary">
          Remove Extra Spaces
        </button>
      </div>
      <div className=" container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters
        </p>
        <p>You can read this in {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Nothing to Preview'}</p>
      </div>
      <div>
        <h1>Extract Emails</h1>
        <button className="btn btn-primary my-3" disabled={text.length===0} onClick={extractEmails}>
          Extract Emails
        </button>
        <p>Emails: <textarea
            value={email}
            id="emailBox"
            onChange={emailChange}
            className={`form-control bg-${props.mode} text-${props.mode==='dark' ? 'light' :'dark'}`}
            rows="3"
          ></textarea></p>
        <button className="btn btn-primary my-3" disabled={email.length===0} onClick={clearEmail}>
          Clear
        </button>
        <button disabled={email.length===0} onClick={copyEmail} className="btn mx-3 my-2 btn-primary">
          {copyEmailText}
        </button>
      </div>
    </>
  );
}
