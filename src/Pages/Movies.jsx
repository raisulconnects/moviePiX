import MoviesHeader from "../Components/MoviesHeader";
import Searchbar from "../Components/Searchbar";
import MovieCard from "../Components/MovieCard";
import useMovieContext from "../Hooks/useMovieContext";

export default function Movies() {
  const { movies, loading } = useMovieContext();

  return (
    <>
      <MoviesHeader />
      <Searchbar />
      {/* Here We Gonna Render The Movies */}

      {loading ? (
        <div className="flex flex-col gap-3 justify-center items-center mt-20">
          <span className="loading loading-spinner text-error size-10"></span>
          <p className="font-light text-center">Loading Movies</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-1 place-items-center">
          {movies?.map((movie) => {
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })}
        </div>
      )}
    </>
  );
}
