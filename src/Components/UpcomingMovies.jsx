const upcomingMovies = [
  {
    id: 1,
    title: "Captain America: Brave New World",
    genre: "Superhero, Action, Adventure",
    release_date: "May 3, 2025",
    description: "A new Captain America emerges in a brave new world.",
    poster:
      "https://lumiere-a.akamaihd.net/v1/images/captain_america_brave_new_world_logo_r_52abe51a.jpeg?region=0,0,4000,1952&width=768",
  },
  {
    id: 2,
    title: "Fast X: Part 2",
    genre: "Action, Adventure, Thriller",
    release_date: "April 10, 2025",
    description:
      "The Fast Saga continues with high-octane action and family drama.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDQxZmM0MDYtYTM1Zi00YmRhLWJkMGEtNjk1MWY3MDUzZDlmXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 3,
    title: "Avatar: Fire & Ash",
    genre: "Science Fiction, Adventure",
    release_date: "December 19, 2025",
    description: "The epic saga of Pandora continues.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjE0OWZmYWMtZjBhMi00YzM5LTkzOTctOTZhMTIwNDcxY2U0XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 4,
    title: "The Fantastic Four",
    genre: "Superhero, Action, Adventure",
    release_date: "July 25, 2025",
    description: "The First Family of Marvel returns to the big screen.",
    poster:
      "https://preview.redd.it/fantastic-4-first-steps-poster-v0-h277ehpdfjfd1.jpeg?auto=webp&s=3fc62cbe96881389bd43810bffa54b3007987d5a",
  },
  {
    id: 5,
    title: "Mission: Impossible - The Final Reckoning",
    genre: "Action, Adventure, Thriller",
    release_date: "June 28, 2025",
    description: "Ethan Hunt's ultimate mission.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDJhNDUwOTYtOTYyZi00NzQwLWFiYjMtNzM1MTYxNTQ0YjI5XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 6,
    title: "Jurassic World: Rebirth",
    genre: "Science Fiction, Adventure, Thriller",
    release_date: "July 11, 2025",
    description: "Dinosaurs return to terrorize the world.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYWQzYWJlZjYtYzA5Zi00MDEzLWFlYTQtYTEzNDYxYTJmMjc2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 7,
    title: "John Wick: Chapter 5",
    genre: "Action, Thriller",
    release_date: "March 24, 2025",
    description: "John Wick's relentless pursuit of vengeance continues.",
    poster:
      "https://m.media-amazon.com/images/I/61yrQgnlzML._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 8,
    title: "Dune: Part Three",
    genre: "Science Fiction, Adventure, Drama",
    release_date: "December 18, 2025",
    description: "The epic saga of Dune continues.",
    poster:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/dh1jx9b-3452f423-cac1-47b4-8b46-5ac04219fd5c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGgxang5Yi0zNDUyZjQyMy1jYWMxLTQ3YjQtOGI0Ni01YWMwNDIxOWZkNWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.x8s4tkpbkC5ygxTHjfTD-NvW3DAZgMh0OhgmA4tXdcM",
  },
  {
    id: 9,
    title: "The Matrix Resurrections 2",
    genre: "Science Fiction, Action, Thriller",
    release_date: "December 25, 2025",
    description: "The Matrix saga continues.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDMyNDIzYzMtZTMyMy00NjUyLWI3Y2MtYzYzOGE1NzQ1MTBiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 10,
    title: "Halloween Ends 2",
    genre: "Horror, Thriller",
    release_date: "October 31, 2025",
    description: "The final chapter of the Halloween saga.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzllZDYwNWMtYTU5Mi00NDVmLWE2YWQtMDZiZWFmOTcxZmJmXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 11,
    title: "The Hunger Games: The Ballad of Songbirds and Snakes",
    genre: "Science Fiction, Adventure, Drama",
    release_date: "November 17, 2023",
    description: "A prequel to The Hunger Games.",
    poster:
      "https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/09/05164616/HUNGER_GAMES_Rachel_Full.jpg",
  },
  {
    id: 12,
    title: "Aquaman and the Lost Kingdom",
    genre: "Superhero, Action, Adventure",
    release_date: "December 20, 2023",
    description: "Aquaman's next adventure.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjQ1ZTUzMWMtY2VkNS00ZDRjLWEwODYtYmFkMWJiNTQxMDUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 13,
    title: "Indiana Jones and the Dial of Destiny",
    genre: "Action, Adventure",
    release_date: "June 30, 2023",
    description: "Indiana Jones' final adventure.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZTUyYzAzOTktYThlNi00MDE5LWJlMDUtYWQxZWI5OTEyZGU1XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 14,
    title: "Spider-Man: Across the Spider-Verse",
    genre: "Animation, Action, Adventure",
    release_date: "June 2, 2023",
    description: "Miles Morales' next adventure.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 15,
    title: "Transformers: Rise of the Beasts",
    genre: "Science Fiction, Action, Adventure",
    release_date: "June 9, 2023",
    description: "The Transformers return.",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGlThHzpT-EPqKKTeGE1pTbHTKtGl2wLciA&s",
  },
  {
    id: 16,
    title: "The Little Mermaid",
    genre: "Fantasy, Musical, Adventure",
    release_date: "May 26, 2023",
    description: "A live-action remake of the classic Disney film.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNmQ3ODcyZGMtMjNlOS00YzhlLTg0YzAtZGVjNmQ0OTYyNDg0XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 17,
    title: "Dungeons & Dragons: Honor Among Thieves",
    genre: "Fantasy, Adventure, Comedy",
    release_date: "March 31, 2023",
    description: "A group of adventurers embark on an epic quest.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOGRjMjQ0ZDAtODc0OS00MGY1LTkxMTMtODhhNjY5NTM4N2IwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpgs",
  },
];
function UpcomingMovies() {
  return (
    <div className="w-full bg-base-200 py-10 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {upcomingMovies.map((movie) => (
            <div
              key={movie.id}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="h-64 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg font-semibold">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-600">{movie.genre}</p>
                <p className="text-sm">
                  <span className="font-medium">Release Date:</span>{" "}
                  {movie.release_date}
                </p>
                <p className="text-sm text-gray-700">{movie.description}</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary btn-sm">Learn More</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpcomingMovies;
