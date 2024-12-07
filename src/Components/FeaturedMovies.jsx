import { Link } from "react-router-dom";

const movies = [
  {
    MoviePoster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
    MovieTitle: "Iron Man",
    Genre: ["Action", "Adventure", "Sci-Fi"],
    Duration: 126,
    ReleaseYear: 2008,
    Rating: 7.9,
    Summary:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
  },
  {
    MoviePoster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
    MovieTitle: "Iron Man 2",
    Genre: ["Action", "Adventure", "Sci-Fi"],
    Duration: 124,
    ReleaseYear: 2010,
    Rating: 7.0,
    Summary:
      "With the world now aware of his identity as Iron Man, Tony Stark faces pressure from all sides to share his technology, while confronting a powerful new enemy.",
  },
  {
    MoviePoster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
    MovieTitle: "Iron Man 3",
    Genre: ["Action", "Adventure", "Sci-Fi"],
    Duration: 130,
    ReleaseYear: 2013,
    Rating: 7.1,
    Summary:
      "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
  },
  {
    MoviePoster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
    MovieTitle: "Captain America: The First Avenger",
    Genre: ["Action", "Adventure", "Sci-Fi"],
    Duration: 124,
    ReleaseYear: 2011,
    Rating: 6.9,
    Summary:
      "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'.",
  },
  {
    MoviePoster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
    MovieTitle: "Thor",
    Genre: ["Action", "Adventure", "Fantasy"],
    Duration: 115,
    ReleaseYear: 2011,
    Rating: 7.0,
    Summary:
      "The powerful but arrogant god Thor is cast out of Asgard to live among humans on Earth, where he becomes one of their defenders.",
  },
  {
    MoviePoster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
    MovieTitle: "Thor: The Dark World",
    Genre: ["Action", "Adventure", "Fantasy"],
    Duration: 112,
    ReleaseYear: 2013,
    Rating: 6.8,
    Summary:
      "Thor must team up with his mischievous brother Loki to save the Nine Realms from the vengeful Malekith, who seeks to plunge the universe into darkness.",
  },
];
function FeaturedMovies() {
  return (
    <div className="container mx-auto p-4 mt-10 mb-10">
      <div className="flex flex-col items-center space-y-4 mb-6">
        <h1 className="text-3xl font-bold mb-4">Featured Movies</h1>
        <p>Check out our featured movies below:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {movies.map((movie) => (
          <div
            key={movie.MovieTitle}
            className="card bg-base-100 shadow-xl border-2 border-white"
          >
            <figure>
              <img
                src={movie.MoviePoster}
                alt={movie.MovieTitle}
                className=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{movie.MovieTitle}</h2>
              <p>Genre: {movie.Genre.join(", ")}</p>
              <p>Duration: {movie.Duration} minutes</p>
              <p>Release Year: {movie.ReleaseYear}</p>
              <p>Rating: {movie.Rating}</p>
              <p>Summary: {movie.Summary}</p>
              <div className="card-actions justify-end mt-4">
                <Link className="btn btn-primary">See Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedMovies;
