import React from "react";
import Slider from "../components/Slider/Slider";
import PopularMovies from "../components/PopularMovies/PopularMovies";
import TopMovies from "../components/TopMovies/TopMovies";

import "./styles.css";
import "./movies.css";

function Homepage() {
  return (
    <div>
      <Slider />
      <div className="movies-wrapper">
        <PopularMovies />
        <TopMovies />
      </div>
    </div>
  );
}

export default Homepage;
