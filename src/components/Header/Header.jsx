import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <Link className="logo" to="/">
        Cinetrail
      </Link>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
        />
      </div>
      <div className="header-buttons-container">
        <div className="theme-buttons-container">
          <MdOutlineLightMode className="theme-icon" />
          <MdOutlineDarkMode className="theme-icon theme-icon-active" />
        </div>
        <button className="create-account-btn">Create an account</button>
      </div>
    </div>
  );
}

export default Header;
