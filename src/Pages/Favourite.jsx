import useMovieContext from "../Hooks/useMovieContext";
import { Link } from "react-router";
import FavMovieCard from "../Components/FavMovieCard";

export default function Favourite() {
  const { favMovies } = useMovieContext();

  if (favMovies.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Your Favourites List is Empty 🎬
        </h1>
        <p className="text-gray-300 mb-6">
          Add some movies to your favourites and they’ll show up here.
        </p>
        <Link to="/movies">
          <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-lg transition-transform transform hover:scale-105">
            Browse Movies
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-12">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {favMovies?.map((movie) => (
          <FavMovieCard key={movie.id} id={movie.id} />
        ))}
      </div>
    </div>
  );
}
