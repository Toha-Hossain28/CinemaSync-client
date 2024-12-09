import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-700">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <p className="text-2xl lg:text-3xl font-medium mt-4">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-lg">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn btn-primary btn-wide">
            Go Back Home
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg"
          alt="Not Found Illustration"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Error;
