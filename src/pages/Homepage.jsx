import React from "react";
import Slider from "../components/Slider/Slider";
import PopularMovies from "../components/PopularMovies/PopularMovies";

function Homepage() {
  return (
    <div>
      <Slider />
      <PopularMovies />
    </div>
  );
}

export default Homepage;
