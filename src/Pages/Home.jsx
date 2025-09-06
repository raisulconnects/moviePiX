import { useNavigate } from "react-router";

export default function Home() {
  const navigator = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-12 text-center">
        {/* Hero Title */}
        <h1 className="text-5xl font-bold mb-6 text-white">
          Welcome to <span className="text-red-500">MoviePiX 🎬</span>
        </h1>

        {/* Hero Description */}
        <p className="text-lg text-gray-200 mb-8">
          Discover, explore, and save your favorite movies — all in one place
          with MoviePiX.
        </p>

        {/* Call-to-Action Button */}
        <button
          className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold shadow-lg transition hover:scale-105"
          onClick={() => navigator("/movies")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
