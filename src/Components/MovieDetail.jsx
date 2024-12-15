import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";

function MovieDetail() {
  // const movie = {
  //   _id: "67551f0cd2aed2c0ce85dafa",
  //   moviePoster:
  //     "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
  //   movieTitle: "Ironman",
  //   genre: "Sci-Fi",
  //   duration: "126",
  //   releaseYear: "2008",
  //   rating: 0.25,
  //   summary:
  //     "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.",
  // };
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [favLoading, setFavLoading] = useState(false);

  useEffect(() => {
    fetch(`https://movie-server-zeta.vercel.app/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  const {
    moviePoster,
    movieTitle,
    genre,
    duration,
    releaseYear,
    rating,
    summary,
  } = movie;

  const handleFavorite = () => {
    setFavLoading(true);

    fetch(`https://movie-server-zeta.vercel.app/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        // Check if the user data and favoriteMovies exist
        if (data && data.favoriteMovies) {
          // Check if the movie is already in the favoriteMovies array
          if (data.favoriteMovies.includes(id)) {
            setFavLoading(false);
            Swal.fire("Info", "Movie is already in your favorites!", "info");
          } else {
            // Add the movie ID to the favoriteMovies array
            const updatedFavorites = [...data.favoriteMovies, id];

            // Update the user's favoriteMovies in the backend
            fetch(`https://movie-server-zeta.vercel.app/users/${user.email}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...data,
                favoriteMovies: updatedFavorites,
              }),
            })
              .then((res) => res.json())
              .then(() => {
                setFavLoading(false);
                Swal.fire("Success", "Movie added to favorites!", "success");
              })
              .catch((error) => {
                setFavLoading(false);
                console.error("Error adding movie to favorites:", error);
              });
          }
        } else {
          console.error("Error: User data or favoriteMovies not found.");
          setFavLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setFavLoading(false);
      });
  };

  const handleDelete = () => {
    fetch(`https://movie-server-zeta.vercel.app/movies/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        Swal.fire("Success", "Movie deleted successfully!", "success");
        navigate("/movies");
      })
      .catch((error) => console.error("Error deleting movie:", error));
  };

  return (
    <div className="min-h-[calc(100vh-136px)] grid place-content-center mt-10 mb-10">
      <h1 className="text-3xl font-bold underline text-center pb-10">
        Movie Details
      </h1>
      <div className="card card-side bg-base-100 shadow-xl mx-auto max-w-4xl flex flex-col md:min-w-[725px]">
        <figure className="rounded-box">
          <img
            src={moviePoster}
            alt="Movie"
            className="h-[400px] w-[300px] rounded-box"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movieTitle}</h2>
          <p>{summary}</p>
          <p>
            <strong>Genre:</strong> {genre}
          </p>
          <p>
            <strong>Duration:</strong> {duration} minutes
          </p>
          <p>
            <strong>Release Year:</strong> {releaseYear}
          </p>
          <p>
            {<Rating readonly initialValue={movie.rating * 20} allowHalfIcon />}
          </p>

          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleDelete}>
              Delete
            </button>
            <button className="btn btn-primary" onClick={handleFavorite}>
              {favLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Favorite"
              )}
            </button>
            <Link to={`/movies/update/${id}`} className="btn btn-primary">
              Update
            </Link>
            {/* <button
            onClick={() =>
              Swal.fire({
                title: "Error!",
                text: "Do you want to continue",
                icon: "error",
                confirmButtonText: "Cool",
              })
            }
          >
            AlertCheck
          </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
