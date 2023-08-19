import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({
  movie,
  height,
  width,
  cardStyle,
  radius,
  imgSrc,
  id,
}) {
  const cardStyleObj = {
    backgroundImage: `url(${import.meta.env.VITE_API_BASE_IMAGE_URL}${imgSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height,
    width,
    borderRadius: radius,
    boxShadow:
      cardStyle === "popular-card"
        ? "8px 8px 10px 8px rgba(118, 118, 118, 0.75)"
        : null,
  };
  return (
    <Link className={cardStyle} to={`/movieDetails/${id}`}>
      <div style={cardStyleObj}></div>
    </Link>
  );
}
