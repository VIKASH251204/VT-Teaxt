import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";




export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation" >

          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">

              <Link className="nav-link active" aria-current="page" to="/">
                {props.reacthome}
              </Link>

            </li>
            <li className="nav-item">

              <Link className="nav-link" to="/about">
                {props.reactabout}
              </Link>

            </li>
          </ul>

          
           
          <button type="button" className="btn btn-danger mx-2" onClick={props.changeBgColor}>Red</button>
          <button type="button" className="btn btn-success mx-2" onClick={props.changeBgColor1}>Green</button>
          <button type="button" className="btn btn-secondary mx-2" onClick={props.changeBgColor2}>Grey</button>


          <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
           <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
             </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  reacthome: PropTypes.string,
  reactabout: PropTypes.string
}

