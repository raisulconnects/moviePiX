import { useEffect, useState } from "react";
import MoviesHeader from "../Components/MoviesHeader";
import Searchbar from "../Components/Searchbar";
import getRandomMovie from "../UtilityFuctions/getRandomMovie";
import MovieCard from "../Components/MovieCard";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (search = "") => {
      if (search) {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=e65b7396&s=${search}`
        );
        const data = await res.json();
        console.log("With Search Query: ", data.Search);
        setMovies(data.Search);
        setLoading(false);
      } else {
        let randomMovie = getRandomMovie();
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=e65b7396&s=${randomMovie}`
        );
        const data = await res.json();
        console.log("In Initial State: ", data.Search);
        setMovies(data.Search);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
