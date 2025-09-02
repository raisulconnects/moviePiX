import { useNavigate } from "react-router";

export default function Home() {
  const navigator = useNavigate();

  return (
    <>
      <div className="hero min-h-[100vh] bg-base-200 z-50">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-primary mb-4">
              Welcome to <span className="text-accent">MoviePiX 🎬</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Discover, explore, and save your favorite movies — all in one
              place with MoviePiX.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigator("/movies");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
