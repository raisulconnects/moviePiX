import MoviesHeader from "../Components/MoviesHeader";
import Searchbar from "../Components/Searchbar";
import MovieCard from "../Components/MovieCard";
import useMovieContext from "../Hooks/useMovieContext";

export default function Movies() {
  const { movies, loading } = useMovieContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-12">
      {/* Page Header */}
      <MoviesHeader />

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-8">
        <Searchbar />
      </div>

      {/* Movies List */}
      {loading ? (
        <div className="flex flex-col gap-3 justify-center items-center mt-20">
          <span className="loading loading-spinner text-red-500 size-10"></span>
          <p className="font-light text-center text-gray-200">Loading Movies</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 place-items-center  mx-auto">
          {movies?.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
