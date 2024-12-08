import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

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
  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
    // console.log(movie);
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
    fetch(`http://localhost:3000/favorite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl max-w-5xl mx-auto my-48">
      <figure className="w-1/2 rounded-box">
        <img src={moviePoster} alt="Movie" />
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
          <strong>Rating:</strong> {rating}
        </p>

        <div className="card-actions">
          <button className="btn btn-primary">Delete</button>
          <button className="btn btn-primary" onClick={handleFavorite}>
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
