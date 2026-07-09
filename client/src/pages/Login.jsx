import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Simulate backend request
    setTimeout(() => {
      console.log({
        email,
        password,
      });

      alert("Login Successful! (Demo)");

      setLoading(false);
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-6">

      <div className="grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">

        {/* Left Side */}

        <div className="hidden md:flex flex-col justify-center bg-green-700 text-white p-12">

          <h1 className="text-5xl font-extrabold">
            🌿 Elaris
          </h1>

          <h2 className="text-3xl font-bold mt-10">
            Continue Your Journey
          </h2>

          <p className="mt-6 text-green-100 leading-8 text-lg">
            Explore breathtaking destinations,
            preserve unforgettable memories,
            and inspire others to discover nature.
          </p>

          <div className="mt-12 text-7xl">
            🏔️
          </div>

        </div>

        {/* Right Side */}

        <div className="p-10 md:p-14">

          <h2 className="text-4xl font-bold text-gray-800">
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-3">
            Login to continue exploring.
          </p>

          <form
            className="mt-10"
            onSubmit={handleSubmit}
          >

            {/* Email */}

            <div>

              <label className="font-semibold">
                Email
              </label>

              <input
                type="email"
                placeholder="bharani@email.com"
                className="w-full mt-2 p-4 border rounded-xl focus:ring-2 focus:ring-green-600 outline-none"

                value={email}

                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>

            {/* Password */}

            <div className="mt-6">

              <label className="font-semibold">
                Password
              </label>

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }

                  placeholder="Enter password"

                  className="w-full mt-2 p-4 border rounded-xl focus:ring-2 focus:ring-green-600 outline-none"

                  value={password}

                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"

                  className="absolute right-4 top-6"

                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >

                  {showPassword ? "🙈" : "👁"}

                </button>

              </div>

            </div>

            {/* Error */}

            {error && (

              <p className="text-red-500 mt-4">

                {error}

              </p>

            )}

            {/* Login Button */}

            <button
              type="submit"

              disabled={loading}

              className="w-full mt-8 bg-green-700 hover:bg-green-800 transition text-white p-4 rounded-xl font-semibold disabled:bg-gray-400"
            >

              {loading
                ? "Logging In..."
                : "Login"}

            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">

            Don't have an account?

            <Link
              to="/register"
              className="text-green-700 font-semibold ml-2"
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