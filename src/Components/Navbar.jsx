import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

function Navbar() {
  const { user } = useContext(AuthContext);

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
          <div
            className={`tooltip tooltip-left z-20 ${user ? "" : "hidden"}`}
            data-tip="hello"
          >
            <div className="flex justify-center items-center gap-5">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXXQkegDDyw8ZeNVE7pR2YfHqc8ZRLXSK8wA&s"
                      alt=""
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-36"
                >
                  <li>
                    <button className="btn btn-error">Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
