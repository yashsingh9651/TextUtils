import React from "react";

export default function Navbar(props) {
  let buttonStyleA = {
    backgroundColor:"#faedcd",
    color:"#aa5cff00"
  }
  let buttonStyleB = {
    backgroundColor:"#283618",
    color:"#aa5cff00"
  }
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand mx-5" href="/">
            TextUtils
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              </li>
            </ul>
            <button style={buttonStyleA} onClick={props.buttonA} className="mx-3 rounded-circle" >ya</button>
            <button style={buttonStyleB} onClick={props.buttonB} className="mx-3 rounded-circle" >ya</button>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                onClick={props.toggle}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label mr-5" htmlFor="flexSwitchCheckDefault">
                {props.mode==='light'?'Switch to dark mode':'Switch to light mode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

