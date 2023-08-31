import { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";
import Slider from "../components/Slider/Slider";
import PopularMovies from "../components/PopularMovies/PopularMovies";
import TopMovies from "../components/TopMovies/TopMovies";

import "./styles.css";
import "./movies.css";

function Homepage() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className={`homepage-container ${!darkMode && "home-light"}`}>
      <Slider />
      <div className="movies-wrapper">
        <PopularMovies />
        <TopMovies />
      </div>
    </div>
  );
}

export default Homepage;
