import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                
        
        
                </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-secondary" type="submit">Mode</button>
                    </form> 
                    <button type="button" className="btn btn-primary mx-2" onClick={()=>{props.changeBGColor('primary')}}> </button>
                    <button type="button" className="btn btn-success mx-2" onClick={()=>{props.changeBGColor('success')}}> </button>
                    <button type="button" className="btn btn-danger mx-2" onClick={()=>{props.changeBGColor('danger')}}> </button>
                    <button type="button" className="btn btn-warning mx-2" onClick={()=>{props.changeBGColor('warning')}}> </button>*/}
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className=  {`form-check-label text-${props.mode2}`} htmlFor="flexSwitchCheckDefault">{props.a} DarkMode</label>
                </div>
            </div>
        </div>
    </nav>
  )
}
Navbar.propTypes={
    title: PropTypes.string,
    about: PropTypes.string
}
Navbar.defaultProps={
    title: "Set Title Here",
    about: "Set About Here"
}