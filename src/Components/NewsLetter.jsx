function NewsLetter() {
  return (
    <div className="px-5 pt-10 pb-10 grid lg:grid-cols-2 grid-cols-1 gap-5 bg-black rounded-box text-white">
      <div className="flex justify-center">
        <img
          className="rounded-box"
          src="https://img.freepik.com/free-photo/3d-rendering-person-watching-movie-with-popcorn_23-2151169440.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center mb-6 md:text-center">
        <h1 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h1>
        <p className="mb-4">
          Stay up-to-date with the latest news and updates:
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-3/4 md:mx-auto mx-0"
        />
      </div>
    </div>
  );
}

export default NewsLetter;
