import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Rating } from "react-simple-star-rating";

function FavoriteMovies() {
  const { user } = useContext(AuthContext);
  const [favMovies, setFavMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setFavMovies([...new Set(data.favoriteMovies)])) // Ensure no duplicates
      .catch((error) =>
        console.error("Error fetching favorite movies:", error)
      );
  }, [user.email]);

  useEffect(() => {
    const fetchMovies = async () => {
      const updatedMovieList = [];
      for (let id of favMovies) {
        try {
          const response = await fetch(`http://localhost:3000/movies/${id}`);
          const data = await response.json();
          updatedMovieList.push(data);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      }
      setMovieList(updatedMovieList);
    };

    if (favMovies.length > 0) {
      fetchMovies();
    }
  }, [favMovies]);

  // const handleDelete = (movieId) => {
  //   fetch(`http://localhost:3000/users/${user.email}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       favoriteMovies: favMovies.filter((id) => id !== movieId),
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setFavMovies(data.favoriteMovies);
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting favorite movie:", error);
  //     });
  // };

  return (
    <div className="min-h-[calc(100vh-136px)] pt-10">
      <h1 className="text-3xl font-bold underline text-center pb-10">
        Favorite Movies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 mx-auto">
        {movieList.map((movie) => (
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

              <Rating readonly initialValue={movie.rating * 20} allowHalfIcon />

              <div className="card-actions mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(movie._id)}
                >
                  Delete from Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteMovies;
