import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import SearchResultItem from "../SearchResultItem/SearchResultItem";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./Header.css";

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_APP_API_KEY
      }&query=${query}`
    )
      .then((res) => setSearchResults(res?.data?.results))
      .catch((err) => console.log(err));
  }, [query]);

  const toggleMode = () => {
    setDarkMode((prevState) => !prevState);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className={`header-container ${!darkMode && "header-light"}`}>
      <Link className="logo" to="/">
        Cinetrail
      </Link>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
        />

        {query.trim() && (
          <div className="search-results-container">
            {searchResults.map((result) => (
              <SearchResultItem movie={result} key={result?.id} />
            ))}
          </div>
        )}
      </div>

      <div className="header-buttons-container">
        <div className="theme-buttons-container">
          <MdOutlineLightMode
            className={`theme-icon ${!darkMode && "theme-icon-active"}`}
            onClick={!darkMode ? undefined : toggleMode}
          />
          <MdOutlineDarkMode
            className={`theme-icon ${darkMode && "theme-icon-active"}`}
            onClick={darkMode ? undefined : toggleMode}
          />
        </div>
        <button className="create-account-btn">Create an account</button>
      </div>
    </div>
  );
}

export default Header;
