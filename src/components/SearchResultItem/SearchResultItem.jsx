import { Link } from "react-router-dom";
import noImage from "../../assets/noImage.png";

export default function SearchResultItem({ movie }) {
  return (
    <Link className="search-results-item" to={`movieDetails/${movie?.id}`}>
      <img
        src={
          movie?.backdrop_path
            ? `${import.meta.env.VITE_API_BASE_IMAGE_URL}${movie.backdrop_path}`
            : noImage
        }
        alt={movie?.title}
      />
      <p>{movie?.title}</p>
    </Link>
  );
}
