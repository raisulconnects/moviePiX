import { Link } from "react-router";
import useMovieContext from "../Hooks/useMovieContext";
import { useEffect, useState } from "react";

export default function FavMovieCard({ id }) {
  const { favMovies, setFavMovies } = useMovieContext();
  const [movie, setMovie] = useState(null);

  const isFav = favMovies.some((m) => m.id === id);

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
        <p className="text-gray-500">Loading movie...</p>
      </div>
    );
  }

  const toggleFavourite = () => {
    if (isFav) {
      setFavMovies(favMovies.filter((m) => m.id !== movie.imdbID));
    } else {
      setFavMovies([...favMovies, movie]);
    }
  };

  return (
    <div className="flex justify-center items-center mt-30">
      <div className="card w-80 bg-base-100 shadow-lg hover:shadow-2xl transition-transform transform  hover:scale-101 rounded-1xl">
        <figure>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-96 object-cover"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title justify-center">{movie.Title}</h2>
          <div className="flex justify-center gap-2 my-2">
            <div className="badge badge-primary">{movie.Year}</div>
            <div className="badge badge-outline">{movie.imdbID}</div>
          </div>
          <div className="flex justify-center gap-3 mt-4">
            <Link to={`/more-details/${movie.imdbID}`}>
              <button className="btn btn-primary btn-sm hover:scale-105 transition-transform">
                More Details
              </button>
            </Link>
            <button
              className={`btn btn-sm transition-transform hover:scale-105 ${
                isFav ? "btn-error" : "btn-secondary"
              }`}
              onClick={toggleFavourite}
            >
              {isFav ? "Remove from Favourites" : "Add To Favourites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
