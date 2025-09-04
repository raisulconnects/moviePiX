import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../Firebase/firebase";
import { toast } from "react-toastify";

export default function Login() {
  const navigator = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      console.log(auth);
      console.log(auth.currentUser);
      navigator("/");
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        {/* Logo / Title */}
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          🎬 Movie<span className="text-red-500">Pix</span>
        </h1>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-red-500 hover:bg-red-600 transition text-white font-semibold shadow-md"
          >
            {isLoading ? (
              <>
                Logging In{" "}
                <span className="loading loading-dots loading-xl"></span>
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Extras */}
        <div className="flex justify-center items-center text-sm text-gray-400 mt-4">
          <Link to={"/signup"} className="hover:text-red-400">
            Create account
          </Link>
        </div>

        {/* Social Login */}
        <div className="mt-6">
          <button
            className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white text-gray-800 hover:bg-gray-200 transition font-medium"
            disabled
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
}
