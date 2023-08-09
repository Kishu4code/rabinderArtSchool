import React from "react";

export default function Navbar(props){
    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==='dark'?'dark':'primary'} bg-gradient sticky-top`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" onClick={props.home}><b>{props.heading}</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#" onClick={props.abt}><b>About</b></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#" onClick={props.com}><b>Community</b></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#" onClick={props.lrn}><b>Learn</b></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><b>{props.author}</b></a>
                    </li>
                  </ul>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.modeChange}/>
                    <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} for="flexSwitchCheckDefault" >{props.mode==='dark'?'Dark':'Light'} mode</label>
                  </div>
                </div>
                
            </div>
        </nav>
        </>
    )
}