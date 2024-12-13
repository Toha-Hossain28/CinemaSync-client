import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function FavoriteMovies() {
  const { user } = useContext(AuthContext);
  let [favMovies, setFavMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://movie-server-zeta.vercel.app/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFavMovies([...new Set(data.favoriteMovies)]);
        setLoading(false);
      }) // Ensure no duplicates
      .catch((error) =>
        console.error("Error fetching favorite movies:", error)
      );
  }, [user.email]);

  useEffect(() => {
    const fetchMovies = async () => {
      const updatedMovieList = [];
      for (let id of favMovies) {
        try {
          const response = await fetch(
            `https://movie-server-zeta.vercel.app/movies/${id}`
          );
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

  const handleDelete = (movieId) => {
    fetch(`https://movie-server-zeta.vercel.app/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        const updatedFavorites = data.favoriteMovies.filter(
          (id) => id !== movieId
        );
        const updatedUser = { ...data, favoriteMovies: updatedFavorites };
        fetch(`https://movie-server-zeta.vercel.app/users/${user.email}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
          .then((res) => res.json())
          .then(() => {
            // alert("Movie removed from favorites!");
            Swal.fire("Success", "Movie removed from favorites!", "success");
            setFavMovies(updatedFavorites);
          })
          .catch((error) => console.error("Error deleting movie:", error));
      })
      .catch((error) => console.error("Error fetching user data:", error));
  };

  return (
    <div className="min-h-[calc(100vh-136px)] pt-10">
      <h1 className="text-3xl font-bold underline text-center pb-10">
        Favorite Movies
      </h1>
      <div
        className={`flex justify-center items-center ${
          loading ? "" : "hidden"
        }`}
      >
        <span className="loading loading-spinner loading-lg "></span>
      </div>
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
