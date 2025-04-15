import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* <Link className="navbar-brand fw-bold fs-4" to="/">Interview Prep</Link> */}
        <div className="logo"><span> <img src='image.png' width='50px' height='40px' alt='icon' /></span> Prep<span className="highlight">Interview</span></div>
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
