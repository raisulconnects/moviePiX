import { Link } from "react-router";
import useMovieContext from "../Hooks/useMovieContext";
import { toast } from "react-toastify";
import useAuthContext from "../Hooks/useAuthContext";

export default function MovieCard({ movie }) {
  const { favMovies, setFavMovies, toggleFavourite } = useMovieContext();
  const { userLoggedIn } = useAuthContext();
  let isFav = favMovies.find((m) => m.id === movie.imdbID);

  return (
    <div className="w-80 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden flex flex-col">
      {/* Movie Poster */}
      <figure className="w-full h-96 overflow-hidden">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
        />
      </figure>

      {/* Movie Info */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h2 className="text-xl font-bold text-white mb-2 flex justify-between items-center">
          {movie.Title}
          <span className="badge bg-red-500 text-white">{movie.Year}</span>
        </h2>

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
            onClick={() => {
              if (userLoggedIn) {
                if (isFav) {
                  const newArr = favMovies.filter((m) => m.id !== movie.imdbID);
                  setFavMovies(newArr);
                  toggleFavourite({ title: movie.Title, id: movie.imdbID });
                  toast.error("Removed From Favourite", {
                    position: "bottom-right",
                  });
                } else {
                  const newArr = [
                    ...favMovies,
                    { title: movie.Title, id: movie.imdbID },
                  ];
                  setFavMovies(newArr);
                  toggleFavourite({ title: movie.Title, id: movie.imdbID });

                  toast.success("Added to Favourite", {
                    position: "bottom-right",
                  });
                }
              } else {
                toast.error("Please login first.");
              }
            }}
          >
            {isFav ? "Remove from Favourites" : "Add To Favourites"}
          </button>
        </div>
      </div>
    </div>
  );
}
