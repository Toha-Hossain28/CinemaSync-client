import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

function Navbar() {
  const { user, userSignOut } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);
  const handleSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // console.log(databaseUser);

  return (
    <div className="px-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  to="/"
                  className={`${
                    location.pathname === "/" ? "bg-primary" : "bg-transparent"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className={`${
                    location.pathname === "/movies"
                      ? "bg-primary"
                      : "bg-transparent"
                  }`}
                >
                  All Movie
                </Link>
              </li>
              <li>
                <Link
                  to="/movies/addmovie"
                  className={`${
                    location.pathname === "/movies/addmovie"
                      ? "bg-primary"
                      : "bg-transparent"
                  }`}
                >
                  Add Movie
                </Link>
              </li>
              <li>
                <Link
                  to="/movies/favoriteMovies"
                  className={`${
                    location.pathname === "/movies/favoriteMovies"
                      ? "bg-primary"
                      : "bg-transparent"
                  }`}
                >
                  My Favorites
                </Link>
              </li>
              <li>
                <Link
                  to="/coming"
                  className={`${
                    location.pathname === "/coming"
                      ? "bg-primary"
                      : "bg-transparent"
                  }`}
                >
                  Coming
                </Link>
              </li>
            </ul>
          </div>
          <Link className="text-xl xl:text-3xl md:text-2xl  font-bold">
            CinemaSync
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/"
                className={`${
                  location.pathname === "/" ? "bg-primary" : "bg-transparent"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/movies"
                className={`${
                  location.pathname === "/movies"
                    ? "bg-primary"
                    : "bg-transparent"
                }`}
              >
                All Movie
              </Link>
            </li>
            <li>
              <Link
                to="/movies/addmovie"
                className={`${
                  location.pathname === "/movies/addmovie"
                    ? "bg-primary"
                    : "bg-transparent"
                }`}
              >
                Add Movie
              </Link>
            </li>
            <li>
              <Link
                to="/movies/favoriteMovies"
                className={`${
                  location.pathname === "/movies/favoriteMovies"
                    ? "bg-primary"
                    : "bg-transparent"
                }`}
              >
                My Favorites
              </Link>
            </li>
            <li>
              <Link
                to="/coming"
                className={`${
                  location.pathname === "/coming"
                    ? "bg-primary"
                    : "bg-transparent"
                }`}
              >
                Coming
              </Link>
            </li>
          </ul>
        </div>
        <div className={`navbar-end space-x-2`}>
          <Link
            to="/auth/signin"
            className={`btn btn-xs md:btn-sm xl:btn-md ${user ? "hidden" : ""}`}
          >
            Sign In
          </Link>
          <Link
            to="/auth/signup"
            className={`btn btn-xs md:btn-sm xl:btn-md ${user ? "hidden" : ""}`}
          >
            Sign Up
          </Link>

          <div className={`${user ? "" : "hidden"} flex items-center gap-5`}>
            <div
              className={`tooltip tooltip-left z-20 `}
              data-tip={user?.displayName}
            >
              <div className="flex justify-center items-center gap-5">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} alt="" />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <button onClick={handleSignOut} className="btn btn-error">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
