import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  // Filter movies based on search query
  const filteredMovies = movies.filter((movie) =>
    movie.movieTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-136px)]">
      <section>{/* <Navbar /> */}</section>
      <section className="py-10">
        <h1 className="text-3xl font-bold underline text-center pb-10">
          All Movies
        </h1>
        <div className="md:w-1/2 w-full mx-auto mb-10 px-8">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 mx-auto">
          {filteredMovies.map((movie) => (
            <div
              key={movie._id}
              className="card bg-base-100 shadow-xl border-2 border-white"
            >
              <figure>
                <img
                  src={movie.moviePoster}
                  alt={movie.movieTitle}
                  className="rounded-lg mt-5"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{movie.movieTitle}</h2>
                <p>Genre: {movie.genre}</p>
                <p>Duration: {movie.duration} minutes</p>
                <p>Release Year: {movie.releaseYear}</p>
                <p>Rating: {movie.rating}</p>

                <Rating
                  readonly
                  initialValue={movie.rating * 20}
                  allowHalfIcon
                />

                <div className="card-actions justify-end mt-4">
                  <Link to={`/movies/${movie._id}`} className="btn btn-primary">
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredMovies.length === 0 && (
          <p className="text-center text-gray-500">No movies found.</p>
        )}
      </section>
      <section>{/* <Footer /> */}</section>
    </div>
  );
}

export default AllMovies;
