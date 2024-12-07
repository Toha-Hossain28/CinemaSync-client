import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const AddMovie = () => {
  const [formData, setFormData] = useState({
    moviePoster: "",
    movieTitle: "",
    genre: "",
    duration: "",
    releaseYear: "",
    rating: 0,
    summary: "",
  });

  const [errors, setErrors] = useState({});
  const genres = ["Comedy", "Drama", "Horror", "Action", "Sci-Fi", "Fantasy"];
  const years = [2024, 2023, 2022, 2021, 2020, 2019];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (rate) => {
    setRatingValue(rate);
  };
  const handleReset = () => {
    // Set the initial value
    setRatingValue(0);
  };

  const validateForm = () => {
    const newErrors = {};

    if (
      !formData.moviePoster ||
      !/^https?:\/\/.+\..+/.test(formData.moviePoster)
    ) {
      newErrors.moviePoster = "Movie Poster must be a valid URL.";
    }
    if (!formData.movieTitle || formData.movieTitle.length < 2) {
      newErrors.movieTitle = "Movie Title must have at least 2 characters.";
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
      console.log("Movie added successfully:", formData);
      alert("Movie added successfully!");
      setFormData({
        moviePoster: "",
        movieTitle: "",
        genre: "",
        duration: "",
        releaseYear: "",
        rating: 0,
        summary: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Movie</h1>
      <form onSubmit={handleSubmit} className="">
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
          <Rating onClick={handleRating} initialValue={ratingValue} />
          <button onClick={handleReset}>reset</button>
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
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
