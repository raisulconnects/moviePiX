import useMovieContext from "../Hooks/useMovieContext";
import { Link } from "react-router";
import FavMovieCard from "../Components/FavMovieCard";

export default function Favourite() {
  const { favMovies } = useMovieContext();

  if (favMovies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
          Your Favourites List is Empty 🎬
        </h1>
        <p className="text-gray-500 mb-6">
          Add some movies to your favourites and they’ll show up here.
        </p>
        <Link to="/movies">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-transform transform hover:scale-105">
            Browse Movies
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {favMovies.map((movie) => (
        <FavMovieCard key={movie.imdbID} id={movie.id} />
      ))}
    </div>
  );
}
