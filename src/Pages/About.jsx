export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-10 text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-white">
          Welcome to <span className="text-red-500">MoviePiX 🎬</span>
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-200 mb-8">
          MoviePiX is a simple yet powerful movie discovery app. Explore movies,
          save your favorites, and keep all your movie picks in one place.
        </p>

        {/* Features */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-md p-6 mb-8 text-left">
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>🔍 Search for movies</li>
            <li>⭐ Save and manage your favorite movies</li>
            <li>📖 View detailed information about each movie</li>
            <li>💾 Keep favorites in one place</li>
          </ul>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4">
          This project was created as a{" "}
          <span className="font-medium text-white">learning journey</span> to
          strengthen React fundamentals like components, state management,
          Context API, hooks, routing, and API integration.
        </p>

        <p className="font-medium text-gray-200 mb-2">
          MoviePiX makes browsing films simple and fun.
        </p>
        <p className="font-medium text-gray-200">
          Profile and Dark Mode features are being worked on and will be
          released soon!
        </p>

        {/* Footer */}
        <footer className="mt-10 text-sm text-gray-400">Raisul Tanna</footer>
      </div>
    </div>
  );
}
