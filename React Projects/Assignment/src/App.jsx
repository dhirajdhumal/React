import React, { useState } from "react";
import "./style.css";

const API_URL = "https://api.testingapis.com/api/Movies";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const searchMovies = async (event) => {
    event.preventDefault();

    setSelectedMovie(null);
    setError("");
    setMovies([]);
    setHasSearched(true);

    if (!search.trim()) {
      setError("Please enter a movie name.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}?q=${encodeURIComponent(search.trim())}&limit=100`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies.");
      }

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setMovies(data);
      } else {
        setError("No movies found. Try another movie name.");
      }
    } catch (err) {
      setError("Unable to fetch movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getMovieDetails = async (id) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/${id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch movie details.");
      }

      const data = await response.json();

      setSelectedMovie(data);
    } catch (err) {
      setError("Unable to load movie details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const showAllMovies = async () => {
    setSearch("");
    setSelectedMovie(null);
    setMovies([]);
    setError("");
    setHasSearched(true);
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}?limit=100`);

      if (!response.ok) {
        throw new Error("Failed to fetch movies.");
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setMovies(data);

        if (data.length === 0) {
          setError("No movies available.");
        }
      } else {
        setError("Unexpected response from the server.");
      }
    } catch (err) {
      setError("Unable to fetch movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const closeDetails = () => {
    setSelectedMovie(null);
  };

  const formatGenres = (genres) => {
    if (Array.isArray(genres)) {
      return genres.join(", ");
    }

    return genres || "Not available";
  };

  const formatCast = (cast) => {
    if (Array.isArray(cast)) {
      return cast.join(", ");
    }

    return cast || "Not available";
  };

  const formatBoxOffice = (amount) => {
    if (amount == null) {
      return "Not available";
    }

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="movie-app">
      <header className="movie-header">
        <h1>🎬 Movie Explorer</h1>
        <p>Search movies and explore their details</p>
      </header>

      <form className="search-form" onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Search movie by title..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button type="submit" disabled={loading}>
          Search
        </button>

        <button
          type="button"
          className="all-movies-btn"
          onClick={showAllMovies}
          disabled={loading}
        >
          All Movies
        </button>
      </form>

      {loading && (
        <p className="status-message">Loading movies...</p>
      )}

      {error && (
        <p className="error-message">{error}</p>
      )}

      {selectedMovie && (
        <section className="movie-details">
          <button
            type="button"
            className="close-btn"
            onClick={closeDetails}
          >
            ✕ Close Details
          </button>

          <div className="details-content">
            <img
              className="details-poster"
              src={
                selectedMovie.poster ||
                `https://picsum.photos/seed/movie${selectedMovie.id}/300/450`
              }
              alt={`${selectedMovie.title} poster`}
            />

            <div className="details-info">
              <h2>{selectedMovie.title}</h2>

              <p>
                <strong>Release Year:</strong>{" "}
                {selectedMovie.year ?? "Not available"}
              </p>

              <p>
                <strong>Director:</strong>{" "}
                {selectedMovie.director || "Not available"}
              </p>

              <p>
                <strong>Genre:</strong>{" "}
                {formatGenres(selectedMovie.genres)}
              </p>

              <p>
                <strong>Runtime:</strong>{" "}
                {selectedMovie.runtimeMinutes != null
                  ? `${selectedMovie.runtimeMinutes} minutes`
                  : "Not available"}
              </p>

              <p>
                <strong>Rating:</strong>{" "}
                {selectedMovie.rating != null
                  ? `⭐ ${selectedMovie.rating}/10`
                  : "Not available"}
              </p>

              <p>
                <strong>Cast:</strong>{" "}
                {formatCast(selectedMovie.cast)}
              </p>

              <p>
                <strong>Box Office:</strong>{" "}
                {formatBoxOffice(selectedMovie.boxOffice)}
              </p>

              {selectedMovie.plot && (
                <>
                  <h3>Plot</h3>
                  <p>{selectedMovie.plot}</p>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {!selectedMovie && movies.length > 0 && (
        <section className="movies-section">
          <h2>
            {hasSearched ? "Movie Results" : "Movies"}{" "}
            <span className="movie-count">
              ({movies.length})
            </span>
          </h2>

          <div className="movie-grid">
            {movies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <img
                  src={
                    movie.poster ||
                    `https://picsum.photos/seed/movie${movie.id}/300/450`
                  }
                  alt={`${movie.title} poster`}
                  loading="lazy"
                />

                <div className="movie-card-content">
                  <h3>{movie.title}</h3>

                  <p>Year: {movie.year ?? "N/A"}</p>

                  <p>
                    ⭐{" "}
                    {movie.rating != null
                      ? movie.rating
                      : "Not rated"}
                  </p>

                  <button
                    type="button"
                    onClick={() => getMovieDetails(movie.id)}
                    disabled={loading}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {!loading &&
        !error &&
        !selectedMovie &&
        movies.length === 0 &&
        !hasSearched && (
          <div className="welcome-message">
            <h2>Find Your Favorite Movies</h2>
            <p>
              Search for a movie by title or click All Movies
              to explore the available collection.
            </p>
          </div>
        )}
    </div>
  );
}

export default App;