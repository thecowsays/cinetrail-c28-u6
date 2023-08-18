import React, { useState, useEffect } from "react";
import axios from "axios";

function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }&language=en`
      )
      .then((res) => {
        console.log("res from genres");
        console.log(res);
      });
  });

  return <div>Genres</div>;
}

export default Genres;
