import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function MoreMovieDetails() {
  const navigator = useNavigate();
  const { imdbID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchOneMovieData = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=e65b7396&i=${imdbID}`
        );
        const data = await res.json();
        setMovieDetails(data);
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchOneMovieData();
  }, [imdbID]);

  if (!movieDetails) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen p-6">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={
              movieDetails.Poster !== "N/A"
                ? movieDetails.Poster
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movieDetails.Title}
            className="max-w-sm rounded-lg shadow-2xl"
          />

          <div className="lg:ml-8 max-w-2xl">
            <h1 className="text-4xl font-bold mb-2">{movieDetails.Title}</h1>
            <p className="text-lg text-gray-600 mb-4">
              {movieDetails.Year} • {movieDetails.Runtime} •{" "}
              {movieDetails.Genre}
            </p>

            <p className="mb-4">{movieDetails.Plot}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <p>
                <span className="font-semibold">Director:</span>{" "}
                {movieDetails.Director}
              </p>
              <p>
                <span className="font-semibold">Writer:</span>{" "}
                {movieDetails.Writer}
              </p>
              <p>
                <span className="font-semibold">Actors:</span>{" "}
                {movieDetails.Actors}
              </p>
              <p>
                <span className="font-semibold">Language:</span>{" "}
                {movieDetails.Language}
              </p>
              <p>
                <span className="font-semibold">Country:</span>{" "}
                {movieDetails.Country}
              </p>
              <p>
                <span className="font-semibold">Box Office:</span>{" "}
                {movieDetails.BoxOffice}
              </p>
              <p>
                <span className="font-semibold">Awards:</span>{" "}
                {movieDetails.Awards}
              </p>
              <p>
                <span className="font-semibold">Rated:</span>{" "}
                {movieDetails.Rated}
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Ratings</h2>
              <ul className="list-disc list-inside">
                {movieDetails.Ratings?.map((r, idx) => (
                  <li key={idx}>
                    {r.Source}: {r.Value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <span className="badge badge-primary text-lg p-3">
                ⭐ {movieDetails.imdbRating} / 10
              </span>
              <span className="text-gray-600">
                {movieDetails.imdbVotes} votes
              </span>
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary absolute bottom-40 z-50 scale-110 hover:scale-115 "
          onClick={() => {
            navigator(-1);
            console.log(window.history);
          }}
        >
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
}
