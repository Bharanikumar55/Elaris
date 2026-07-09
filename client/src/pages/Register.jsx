import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {

    event.preventDefault();

    setError("");

    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {

      setError("Please fill in all fields.");

      return;
    }

    if (password !== confirmPassword) {

      setError("Passwords do not match.");

      return;
    }

    setLoading(true);

    setTimeout(() => {

      console.log({

        username,

        email,

        password

      });

      alert("Account Created! (Demo)");

      setLoading(false);

    },1500);

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-6">

      <div className="grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">

        {/* Left */}

        <div className="hidden md:flex flex-col justify-center bg-green-700 text-white p-12">

          <h1 className="text-5xl font-extrabold">

            🌿 Elaris

          </h1>

          <h2 className="text-3xl font-bold mt-10">

            Start Your Journey

          </h2>

          <p className="mt-6 text-lg leading-8 text-green-100">

            Join thousands of explorers sharing
            beautiful destinations, unforgettable
            adventures and travel memories.

          </p>

          <div className="mt-12 text-7xl">

            🌲

          </div>

        </div>

        {/* Right */}

        <div className="p-10 md:p-14">

          <h2 className="text-4xl font-bold">

            Create Account

          </h2>

          <p className="text-gray-500 mt-3">

            Begin your adventure today.

          </p>

          <form
            className="mt-10"
            onSubmit={handleSubmit}
          >

            {/* Username */}

            <div>

              <label className="font-semibold">

                Username

              </label>

              <input

                type="text"

                className="w-full mt-2 p-4 border rounded-xl outline-none focus:ring-2 focus:ring-green-700"

                placeholder="Bharani"

                value={username}

                onChange={(e)=>setUsername(e.target.value)}

              />

            </div>

            {/* Email */}

            <div className="mt-5">

              <label className="font-semibold">

                Email

              </label>

              <input

                type="email"

                className="w-full mt-2 p-4 border rounded-xl outline-none focus:ring-2 focus:ring-green-700"

                placeholder="bharani@email.com"

                value={email}

                onChange={(e)=>setEmail(e.target.value)}

              />

            </div>

            {/* Password */}

            <div className="mt-5">

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

                  className="w-full mt-2 p-4 border rounded-xl outline-none focus:ring-2 focus:ring-green-700"

                  placeholder="Password"

                  value={password}

                  onChange={(e)=>setPassword(e.target.value)}

                />

                <button

                  type="button"

                  className="absolute right-4 top-6"

                  onClick={()=>setShowPassword(!showPassword)}

                >

                  {showPassword ? "🙈":"👁"}

                </button>

              </div>

            </div>

            {/* Confirm */}

            <div className="mt-5">

              <label className="font-semibold">

                Confirm Password

              </label>

              <div className="relative">

                <input

                  type={
                    showConfirmPassword
                    ? "text"
                    : "password"
                  }

                  className="w-full mt-2 p-4 border rounded-xl outline-none focus:ring-2 focus:ring-green-700"

                  placeholder="Confirm Password"

                  value={confirmPassword}

                  onChange={(e)=>setConfirmPassword(e.target.value)}

                />

                <button

                  type="button"

                  className="absolute right-4 top-6"

                  onClick={()=>setShowConfirmPassword(!showConfirmPassword)}

                >

                  {showConfirmPassword ? "🙈":"👁"}

                </button>

              </div>

            </div>

            {/* Error */}

            {error && (

              <p className="text-red-500 mt-5">

                {error}

              </p>

            )}

            {/* Button */}

            <button

              type="submit"

              disabled={loading}

              className="w-full mt-8 bg-green-700 text-white rounded-xl p-4 hover:bg-green-800 transition disabled:bg-gray-400"

            >

              {

                loading

                ?

                "Creating Account..."

                :

                "Create Account"

              }

            </button>

          </form>

          <p className="text-center mt-8">

            Already have an account?

            <Link

              to="/login"

              className="text-green-700 font-semibold ml-2"

            >

              Login

            </Link>

          </p>

        </div>

      </div>

    </div>

  )

}

export default Register;