import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

export default function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [pageNumber, setPageNumber] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}popular?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }&page=${pageNumber}`
      )
      .then((res) => {
        setPopularMovies(res?.data?.results);
      })
      .catch((err) => console.log(err));
  }, [pageNumber]);

  return (
    <div className="popular-movies">
      <h3 className="popular-title">Popular Movies</h3>
      <div className="popular-cards-wrapper">
        {popularMovies.map((movie) => (
          <MovieCard
            key={movie?.id}
            movie={movie}
            height="300px"
            width="200px"
            radius="16px"
            cardStyle="popular-card"
            imgSrc={movie?.poster_path}
            id={movie?.id}
          />
          //   <p key={movie?.id}>{movie?.title}</p>
        ))}
      </div>
      <div className="page-numbers">
        <p>Select Page: </p>
        {numbers.map((num) => (
          <p className="page" key={num} onClick={() => setPageNumber(num)}>
            {num}
          </p>
        ))}
      </div>
    </div>
  );
}
