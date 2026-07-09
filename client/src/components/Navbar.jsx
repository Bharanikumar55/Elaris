import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { user, logout } = useAuth();

  return (

    <nav className="sticky top-0 z-50 bg-white shadow">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <Link
          to="/"
          className="text-3xl font-bold text-green-700"
        >

          🌿 Elaris

        </Link>

        <div className="flex gap-6 items-center">

          <Link to="/">Home</Link>

          <Link to="/">Discover</Link>

          <Link to="/">About</Link>

          {

            user ? (

              <>

                <Link
                  to="/create-post"
                >

                  Create Post

                </Link>

                <Link
                  to="/profile"
                >

                  Profile

                </Link>

                <button

                  onClick={logout}

                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"

                >

                  Logout

                </button>

              </>

            )

            :

            (

              <>

                <Link
                  to="/login"
                >

                  Login

                </Link>

                <Link
                  to="/register"
                  className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
                >

                  Register

                </Link>

              </>

            )

          }

        </div>

      </div>

    </nav>

  );

}

export default Navbar;