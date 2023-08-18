import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Genres({ genreIds }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }&language=en`
      )
      .then((res) => {
        setGenres(res.data.genres);
      });
  });

  return (
    <div className="genre-container">
      <p>Genres:&nbsp;</p>
      {/* maps through the genreIds prop passed at top */}
      {/* has a second param for index to add comma & space */}
      {genreIds.map((id, index) => {
        for (let i = 0; i < genres.length; i++) {
          if (genres[i].id === id) {
            return (
              <p key={id}>
                {genres[i]?.name}
                {/* length - 1 b/c starts at 0, adds comma and space */}
                {index === genreIds.length - 1 ? "" : ","}&nbsp;
              </p>
            );
          }
        }
      })}
    </div>
  );
}