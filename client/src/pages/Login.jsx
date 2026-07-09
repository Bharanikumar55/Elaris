import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  // -----------------------------
  // State
  // -----------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // -----------------------------
  // Submit
  // -----------------------------

  function handleSubmit(e) {
    e.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    // Fake Backend Delay

    setTimeout(() => {
      login({
        id: 1,
        username: "bharani",
        email: email,
      });

      setLoading(false);

      navigate("/");
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="hidden lg:flex flex-col justify-center bg-green-700 text-white p-16">

          <h1 className="text-5xl font-extrabold">

            🌿 Elaris

          </h1>

          <p className="uppercase tracking-widest mt-5 text-green-200">

            Continue Your Journey

          </p>

          <h2 className="text-4xl font-bold leading-tight mt-8">

            Explore Beyond Maps.

            <br />

            Create Lasting Memories.

          </h2>

          <p className="mt-8 leading-8 text-green-100">

            Share your adventures, discover hidden places,
            and inspire thousands of explorers around the world.

          </p>

          <div className="text-8xl mt-14">

            🏔️

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="p-10 lg:p-16">

          <h2 className="text-4xl font-bold text-gray-800">

            Welcome Back 👋

          </h2>

          <p className="mt-3 text-gray-500">

            Login to continue exploring nature.

          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            {/* EMAIL */}

            <div>

              <label className="font-semibold text-gray-700">

                Email

              </label>

              <input
                type="email"
                placeholder="bharani@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-700"
              />

            </div>

            {/* PASSWORD */}

            <div>

              <label className="font-semibold text-gray-700">

                Password

              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-2 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-700"
                />

                <button
                  type="button"
                  className="absolute right-5 top-6 text-xl"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >

                  {showPassword ? "🙈" : "👁"}

                </button>

              </div>

            </div>

            {/* ERROR */}

            {error && (

              <div className="bg-red-100 text-red-700 rounded-lg p-3">

                {error}

              </div>

            )}

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 hover:bg-green-800 text-white rounded-xl p-4 font-semibold transition disabled:bg-gray-400"
            >

              {loading
                ? "Logging In..."
                : "Login"}

            </button>

          </form>

          {/* DIVIDER */}

          <div className="flex items-center gap-4 my-8">

            <hr className="flex-1" />

            <span className="text-gray-400 text-sm">

              OR

            </span>

            <hr className="flex-1" />

          </div>

          {/* GOOGLE */}

          <button
            className="w-full border rounded-xl p-4 hover:bg-gray-50 transition"
          >

            Continue with Google

          </button>

          {/* REGISTER */}

          <p className="text-center mt-10 text-gray-600">

            Don't have an account?

            <Link
              to="/register"
              className="ml-2 text-green-700 font-semibold hover:underline"
            >

              Register

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;