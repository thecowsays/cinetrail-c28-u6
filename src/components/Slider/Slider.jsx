import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Slider.css";

const [upcomingMovies, setUpcomingMovies] = useState([]);

function Slider() {
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}upcoming?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }`
      )
      .then((res) => {
        console.log(res?.data?.results);
        setUpcomingMovies(res?.data?.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const sliderStyle = {
    backgroundImage: `url(${import.meta.env.VITE_API_BASE_IMAGE_URL}${
      upcomingMovies[0]?.backdrop_path
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    width: "100%",
    position: "relative",
    zIndex: 0,
  };

  return <div style={sliderStyle}>Slider</div>;
}

export default Slider;
