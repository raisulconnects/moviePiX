export default function Login() {
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

          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-red-500 hover:bg-red-600 transition text-white font-semibold shadow-md"
          >
            Login
          </button>
        </form>

        {/* Extras */}
        <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
          <a href="#" className="hover:text-red-400">
            Forgot password?
          </a>
          <a href="#" className="hover:text-red-400">
            Create account
          </a>
        </div>

        {/* Social Login */}
        <div className="mt-6">
          <button className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white text-gray-800 hover:bg-gray-200 transition font-medium">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
