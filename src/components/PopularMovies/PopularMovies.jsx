import React, { useState, useEffect } from "react";
import axios from "axios";

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}popular?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }`
      )
      .then((res) => {
        setPopularMovies(res?.data?.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>PopularMovies</div>;
}

export default PopularMovies;
