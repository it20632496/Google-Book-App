import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Add custom styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">READ E</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bookshelf">My Bookshelf</Link></li>
        
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/join">Join</Link></li>
        </ul>
       
      </div>
    </nav>
  );
}

export default Navbar;
