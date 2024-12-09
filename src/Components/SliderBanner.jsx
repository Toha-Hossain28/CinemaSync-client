import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { Pagination } from "swiper/modules";

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

function SliderBanner() {
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => {
        setNewMovies(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {newMovies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <img src={movie.moviePoster} alt="" />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default SliderBanner;
