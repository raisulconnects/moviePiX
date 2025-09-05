import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth, db } from "../Firebase/firebase";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const navigator = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    c_password: "",
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    // console.log(newUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (newUser.password === newUser.c_password) {
        await createUserWithEmailAndPassword(
          auth,
          newUser.email,
          newUser.password
        );

        await setDoc(doc(db, "users", auth.currentUser.uid), {
          username: newUser.username,
          role: "member",
          fav: [],
        });

        navigator("/");
        toast.success("Account Created Successfully!");
        // console.log("Log From Singup Page: ", auth);
        // console.log("Log From Singup Page: ", auth.currentUser);
        // console.log("Log From Singup Page: ", auth.currentUser.uid);
      } else {
        toast.error("Your Passwords don't match");
      }
    } catch (e) {
      console.log(e.messsage);
      toast.error("An Error Occured, please try again later.");
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
            <label className="block text-sm text-gray-300 mb-1">Username</label>
            <input
              required
              name="username"
              type="text"
              placeholder="dave.24"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              required
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              required
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              required
              type="password"
              name="c_password"
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-red-500 hover:bg-red-600 transition text-white font-semibold shadow-md"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                {" "}
                Creating Account{" "}
                <span className="loading loading-dots loading-xl"></span>{" "}
              </>
            ) : (
              <> Create Account</>
            )}
          </button>
        </form>

        {/* Extras */}
        <div className="flex justify-center text-sm text-gray-400 mt-4">
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="hover:text-red-400">
              Login
            </Link>
          </p>
        </div>

        {/* Social Signup */}
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
            Sign up with Google (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
}
