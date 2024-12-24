import React from 'react';
// import { Link } from 'react-router-dom'; // You can use 'react-router-dom' for navigation if needed
import "./css/navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h2>LifeCoin</h2>
        </div>
        <ul className="nav-links">
          <li> <a href="Home.jsx">Home</a></li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Services</li>
        </ul>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
