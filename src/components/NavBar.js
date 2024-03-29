import React from 'react'
import PropTypes from 'prop-types'


export default function NavBar(props) { 
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="./">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./">Home</a>
             </li>
              <li className="nav-item">
                <a className="nav-link" href="./">{props.AboutText}</a>
              </li>
           </ul>
           <div className={`form-check form-switch text-${props.text} mx-2`}>
              <input className="form-check-input" type="checkbox" onClick={props.modeHandle} role="switch" id="flexSwitchCheckChecked" />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked" >Dark Mode</label>
            </div>
                <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

NavBar.propTypes = {title: PropTypes.string.isRequired,
                    AboutText: PropTypes.string.isRequired}

NavBar.defaultProps = {title: "Title",
                      AboutText: "About"}
