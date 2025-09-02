export default function MovieCard({ movie }) {
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
        {/* <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p> */}
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{movie.imdbID}</div>
        </div>
      </div>
      <button className="btn btn-secondary"> Add To Favourite </button>
    </div>
  );
}
