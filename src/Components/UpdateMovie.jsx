import { useContext, useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { AuthContext } from "../Context/AuthProvider";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMovie = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams(); // Assuming you're passing the movie ID in the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    moviePoster: "",
    movieTitle: "",
    genre: "",
    duration: "",
    releaseYear: "",
    rating: 0,
    summary: "",
    userEmail: user.email,
  });

  const [errors, setErrors] = useState({});
  const genres = [
    "Comedy",
    "Drama",
    "Horror",
    "Action",
    "Sci-Fi",
    "Thriller",
    "Romance",
    "Documentary",
    "Animation",
    "Crime",
    "Fantasy",
    "Adventure",
    "Family",
    "Mystery",
    "Music",
    "History",
    "War",
    "Western",
    "Biography",
    "Musical",
    "Sport",
    "Talk-Show",
  ];
  const years = [
    2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
    2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004,
  ];

  // Fetch movie details by ID
  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error("Error fetching movie data:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRating = (rate) => {
    setFormData({ ...formData, rating: rate / 20 });
  };

  const validateForm = () => {
    const newErrors = {};
    if (
      !formData.moviePoster ||
      !/^https?:\/\/.+\..+/.test(formData.moviePoster)
    ) {
      newErrors.moviePoster = "Please enter a valid URL.";
    }
    if (!formData.movieTitle || formData.movieTitle.length < 2) {
      newErrors.movieTitle = "Title must have at least 2 characters.";
    }
    if (!formData.genre) {
      newErrors.genre = "Please select a genre.";
    }
    if (!formData.duration || formData.duration <= 60) {
      newErrors.duration = "Duration must be greater than 60 minutes.";
    }
    if (!formData.releaseYear) {
      newErrors.releaseYear = "Please select a release year.";
    }
    if (formData.rating === 0) {
      newErrors.rating = "Please select a rating.";
    }
    if (!formData.summary || formData.summary.length < 10) {
      newErrors.summary = "Summary must have at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Updated Movie:", formData);

      // Update movie details in the database
      fetch(`http://localhost:3000/movies/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then(() => {
          // alert("Movie updated successfully!");
          navigate("/movies"); // Navigate to the movie list page
        })
        .catch((error) => console.error("Error updating movie:", error));
    }
    Swal.fire({
      title: "Update Movie Details",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Confirm",
    });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Update Movie</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Movie Poster */}
        <div>
          <label className="block mb-1 font-medium">Movie Poster (URL)</label>
          <input
            type="url"
            name="moviePoster"
            value={formData.moviePoster}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.moviePoster && (
            <p className="text-red-500 text-sm">{errors.moviePoster}</p>
          )}
        </div>

        {/* Movie Title */}
        <div>
          <label className="block mb-1 font-medium">Movie Title</label>
          <input
            type="text"
            name="movieTitle"
            value={formData.movieTitle}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.movieTitle && (
            <p className="text-red-500 text-sm">{errors.movieTitle}</p>
          )}
        </div>

        {/* Genre */}
        <div>
          <label className="block mb-1 font-medium">Genre</label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          {errors.genre && (
            <p className="text-red-500 text-sm">{errors.genre}</p>
          )}
        </div>

        {/* Duration */}
        <div>
          <label className="block mb-1 font-medium">Duration (minutes)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.duration && (
            <p className="text-red-500 text-sm">{errors.duration}</p>
          )}
        </div>

        {/* Release Year */}
        <div>
          <label className="block mb-1 font-medium">Release Year</label>
          <select
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.releaseYear && (
            <p className="text-red-500 text-sm">{errors.releaseYear}</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <label className="block mb-1 font-medium">Rating</label>
          <Rating
            onClick={handleRating}
            ratingValue={formData.rating * 20} // Convert back to 100 scale for display
            fillColor="orange"
            emptyColor="gray"
            className="inline-flex"
          />
          {errors.rating && (
            <p className="text-red-500 text-sm">{errors.rating}</p>
          )}
        </div>

        {/* Summary */}
        <div>
          <label className="block mb-1 font-medium">Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
          {errors.summary && (
            <p className="text-red-500 text-sm">{errors.summary}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default UpdateMovie;
