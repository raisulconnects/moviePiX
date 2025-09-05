import { Link } from "react-router";
import useMovieContext from "../Hooks/useMovieContext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function FavMovieCard({ id }) {
  const { favMovies, toggleFavourite } = useMovieContext();
  const [movie, setMovie] = useState(null);

  // Check if this movie is already in favorites
  const isFav = favMovies.some((m) => m.id === id);

  // Fetch movie details from OMDB
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=e65b7396&i=${id}`
        );
        const data = await res.json();
        if (data.Response === "True") setMovie(data);
      } catch (err) {
        console.error("Failed to fetch movie:", err);
      }
    };
    if (id) fetchData();
  }, [id]);

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-300">Loading movie...</p>
      </div>
    );
  }

  const handleToggle = () => {
    toggleFavourite({ title: movie.Title, id: movie.imdbID });

    toast[isFav ? "error" : "success"](
      isFav ? "Removed from Favourites" : "Added to Favourites",
      { position: "bottom-right" }
    );
  };

  return (
    <div className="flex justify-center">
      <div className="w-80 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden flex flex-col transition-transform transform">
        {/* Movie Poster */}
        <figure className="w-full h-96 overflow-hidden">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </figure>

        {/* Movie Info */}
        <div className="p-4 flex-1 flex flex-col justify-between text-center">
          <h2 className="text-xl font-bold text-white mb-2">{movie.Title}</h2>

          <div className="flex justify-center gap-2 my-2">
            <span className="badge bg-red-500 text-white">{movie.Year}</span>
            <span className="badge bg-white/20 text-white">{movie.imdbID}</span>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <Link to={`/more-details/${movie.imdbID}`}>
              <button className="w-full py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition">
                More Details
              </button>
            </Link>

            <button
              className={`w-full py-2 rounded-xl font-semibold transition ${
                isFav
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              onClick={handleToggle}
            >
              {isFav ? "Remove from Favourites" : "Add To Favourites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
