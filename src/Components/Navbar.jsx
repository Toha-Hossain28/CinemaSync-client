import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies">All Movie</NavLink>
              </li>
              <li>
                <NavLink to="/addMovie">Add Movie</NavLink>
              </li>
              <li>
                <NavLink to="/favoriteMovies">My Favorites</NavLink>
              </li>
              <li>
                <NavLink to="/coming">Coming</NavLink>
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">All Movie</NavLink>
            </li>
            <li>
              <NavLink to="/addMovie">Add Movie</NavLink>
            </li>
            <li>
              <NavLink to="/favoriteMovies">My Favorites</NavLink>
            </li>
            <li>
              <NavLink to="/coming">Coming</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <Link to="/auth/signin" className="btn btn-xs md:btn-sm xl:btn-md">
            Sign In
          </Link>
          <Link to="/auth/signup" className="btn btn-xs md:btn-sm xl:btn-md">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
