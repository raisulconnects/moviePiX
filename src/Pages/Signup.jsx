export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        {/* Logo / Title */}
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          🎬 Movie<span className="text-red-500">Pix</span>
        </h1>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-red-500 hover:bg-red-600 transition text-white font-semibold shadow-md"
          >
            Create Account
          </button>
        </form>

        {/* Extras */}
        <div className="flex justify-center text-sm text-gray-400 mt-4">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-red-400 hover:underline">
              Log in
            </a>
          </p>
        </div>

        {/* Social Signup */}
        <div className="mt-6">
          <button className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white text-gray-800 hover:bg-gray-200 transition font-medium">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
}
