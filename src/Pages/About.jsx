export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-center">
      <h1 className="text-4xl font-bold mb-6 text-primary mt-20">
        Welcome to <span className="text-accent">MoviePiX 🎬</span>
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        MoviePiX is a simple yet powerful movie discovery app. It allows you to
        easily explore movies and save your favorites.
      </p>

      <div className="bg-base-200 dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8">
        <ul className="text-left list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>🔍 Search for movies</li>
          <li>⭐ Save and manage your favorite movies</li>
          <li>📖 View detailed information about each movie</li>
          <li>💾 Keep favorites in One Place</li>
        </ul>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        This project was created as a{" "}
        <span className="font-medium">learning journey</span>
        to strengthen React fundamentals like components, state management,
        Context API, hooks, routing, and API integration.
      </p>

      <p className="font-medium text-gray-700 dark:text-gray-300">
        MoviePiX makes browsing films simple and fun.
      </p>

      <footer className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        Raisul Tanna
      </footer>
    </div>
  );
}
