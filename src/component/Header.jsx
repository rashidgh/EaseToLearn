// Header.js

import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; 
import logo from "../asset/logo.png"

function Header() {
  return (
    <header className="header">
      {" "}
      <div className="logo-container">
        <img src={logo} alt="Provision Store Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-menu">
          {" "}
          <li>
            <Link to="/" className="nav-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
