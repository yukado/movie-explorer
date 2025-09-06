// MovieCard.js
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function MovieCard({ movie, addFavorite, removeFavorite, isFavorite }) {
  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="movie-card">
      <img src={poster} alt={movie.Title} />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <span
          className={`heart-icon ${isFavorite ? "active" : ""}`}
          onClick={handleClick}
          role="button"
          aria-label={isFavorite ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </span>
      </div>
    </div>
  );
}
