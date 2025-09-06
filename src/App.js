// App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import { FaHeart } from "react-icons/fa";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = process.env.REACT_APP_OMDB_KEY;
        if (!apiKey) {
          throw new Error("OMDb API Key fehlt. Bitte in .env setzen.");
        }

        const url = `https://www.omdbapi.com/?s=batman&apikey=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.Response === "True") {
          setMovies(data.Search);
          setError(null);
        } else {
          setError(data.Error || "Keine Filme gefunden");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Duplikate nach imdbID entfernen
  const uniqueMovies = movies.filter(
    (m, index, self) => index === self.findIndex((t) => t.imdbID === m.imdbID)
  );

  const addFavorite = (movie) => {
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites((prev) => [...prev, movie]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.imdbID !== id));
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <h1>🎬 Movie Explorer</h1>

      <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <FaHeart style={{ color: "red" }} /> Favoriten: {favorites.length}
      </p>

      {error && <p style={{ color: "red" }}>Fehler: {error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "1rem",
        }}
      >
        {uniqueMovies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
          />
        ))}
      </div>
    </div>
  );
}
