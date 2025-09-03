import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function MoreMovieDetails() {
  const navigate = useNavigate();
  const { imdbID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchOneMovieData = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=e65b7396&i=${imdbID}`
        );
        const data = await res.json();
        if (data.Response === "True") setMovieDetails(data);
      } catch (e) {
        console.error(e.message);
      }
    };

    if (imdbID) fetchOneMovieData();
  }, [imdbID]);

  if (!movieDetails) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <span className="loading loading-spinner loading-lg text-red-500"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center items-start px-4 py-12 ">
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-8 relative flex flex-col lg:flex-row gap-8 mt-20">
        {/* Movie Poster */}
        <img
          src={
            movieDetails.Poster !== "N/A"
              ? movieDetails.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movieDetails.Title}
          className="w-full lg:w-64 h-auto rounded-xl shadow-2xl object-cover"
        />

        {/* Movie Info */}
        <div className="flex-1 text-white">
          <h1 className="text-4xl font-bold mb-2">{movieDetails.Title}</h1>
          <p className="text-gray-300 mb-4">
            {movieDetails.Year} • {movieDetails.Runtime} • {movieDetails.Genre}
          </p>

          <p className="mb-6">{movieDetails.Plot}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200 mb-6">
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
              <span className="font-semibold">Rated:</span> {movieDetails.Rated}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Ratings</h2>
            <ul className="list-disc list-inside text-gray-200">
              {movieDetails.Ratings?.map((r, idx) => (
                <li key={idx}>
                  {r.Source}: {r.Value}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="badge bg-red-500 text-white text-lg py-2 px-4">
              ⭐ {movieDetails.imdbRating} / 10
            </span>
            <span className="text-gray-300">
              {movieDetails.imdbVotes} votes
            </span>
          </div>

          <button
            className="mt-4 px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
            onClick={() => navigate(-1)}
          >
            ⬅ Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
