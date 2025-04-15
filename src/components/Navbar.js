import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm w-100">
      <div className="container-fluid">  
        
         <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center" to="/">
      <img src={`${process.env.PUBLIC_URL}/image.png`} width="40" height="35" alt="icon" className="me-2" />
       <span>Prep<span className="text-warning">Interview</span></span>
         </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/htmlpage">HTML</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/csspage">CSS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bootpage">Bootstrap</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jspage">JavaScript</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reactpage">React</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
