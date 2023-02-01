import React from "react";
import PropTypes from "prop-types";

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
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/components/about">
                  {props.about}
                </a>
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
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {props.mode==='light'?'Switch to dark mode':'Switch to light mode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Monster",
  about: "Yash",
};
