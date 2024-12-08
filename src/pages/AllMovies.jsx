import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {} from "react";
import { Link } from "react-router-dom";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  // console.log(movies);

  return (
    <div>
      <section>{/* <Navbar /> */}</section>
      <section className="py-10">
        <h1 className="text-3xl font-bold underline text-center pb-10">
          All Movies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 mx-auto">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="card bg-base-100 shadow-xl border-2 border-white"
            >
              <figure>
                <img
                  src={movie.moviePoster}
                  alt={movie.movieTitle}
                  className=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{movie.movieTitle}</h2>
                <p>Genre: {movie.genre}</p>
                <p>Duration: {movie.duration} minutes</p>
                <p>Release Year: {movie.releaseYear}</p>
                <p>Rating: {movie.rating}</p>
                {/* <p>Summary: {movie.summary}</p> */}
                <div className="card-actions justify-end mt-4">
                  <Link to={`movies/${movie._id}`} className="btn btn-primary">
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>{/* <Footer /> */}</section>
    </div>
  );
}

export default AllMovies;
