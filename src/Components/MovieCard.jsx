import { Link } from "react-router";
import useMovieContext from "../Hooks/useMovieContext";
import { toast } from "react-toastify";

export default function MovieCard({ movie }) {
  const { favMovies, setFavMovies } = useMovieContext();
  let isFav = favMovies.find((m) => m.id === movie.imdbID);

  return (
    <div className="card bg-base-100 w-96 shadow-lg">
      <figure>
        <img src={movie.Poster} alt="Poster" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {movie.Title}
          <div className="badge badge-secondary">{movie.Year}</div>
        </h2>
      </div>
      <div className="flex items-center justify-center gap-2 mb-4">
        <Link to={`/more-details/${movie.imdbID}`}>
          <button className="btn btn-primary">More Details</button>
        </Link>
        <button
          className="btn btn-secondary"
          onClick={() => {
            if (isFav) {
              // Removing From The list is it is in favourite list already
              let newArr = favMovies.filter((m) => m.id !== movie.imdbID);
              setFavMovies(newArr);
              toast.error("Removed From Favourite", {
                position: "bottom-right",
              });
            } else {
              // Adding to Favourite List
              let newArr = [
                ...favMovies,
                { title: movie.Title, id: movie.imdbID },
              ];
              setFavMovies(newArr);
              toast.success("Added to Favourite", {
                position: "bottom-right",
              });
            }
          }}
        >
          {isFav ? "Remove from Favourites" : "Add To Favourites"}
        </button>
      </div>
    </div>
  );
}
