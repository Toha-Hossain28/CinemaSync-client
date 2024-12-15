import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const { setUser, userSignIn, userGoogleSignIn, setDbUser, dbUser, user } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const email = user?.email;

  // Function to add user to the database
  const addUserToDb = (data) => {
    const newData = {
      ...data,
      favoriteMovies: [],
    };

    return fetch("https://movie-server-zeta.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    }).then((res) => res.json());
  };

  // Function to fetch a user from the database
  const fetchUserFromDb = async (email) => {
    try {
      const res = await fetch(
        `https://movie-server-zeta.vercel.app/users/${email}`
      );
      if (!res.ok) throw new Error("Failed to fetch user");
      return await res.json();
    } catch (error) {
      // console.error("Error fetching user from DB:", error.message);
      return null;
    }
  };

  // Email and password sign-in
  const onSubmit = (data) => {
    userSignIn(data.email, data.password)
      .then((result) => {
        setUser(result.user);

        // Fetch and set database user
        fetchUserFromDb(data.email).then((dbUserData) => {
          if (dbUserData) {
            setDbUser(dbUserData);
          } else {
            Swal.fire("Error", "User not found in database.", "error");
          }
        });

        // Redirect to the target location
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        // console.error("Error signing in:", error.message);
        Swal.fire("Error", error.message, "error");
      });
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await userGoogleSignIn();
      const googleUser = result.user;

      setUser(googleUser);

      const userData = {
        email: googleUser.email,
        name: googleUser.displayName,
        username: googleUser.displayName,
        photoURL: googleUser.photoURL,
      };

      // Check if the user already exists in the database
      const existingUser = await fetchUserFromDb(googleUser.email);

      if (!existingUser) {
        // Add user to the database if not found
        await addUserToDb(userData);
        // console.log("Google user added to the database.");
      } else {
        // console.log("Google user already exists in the database.");
        setDbUser(existingUser);
      }

      navigate(location.state ? location.state : "/");
    } catch (error) {
      // console.error("Error during Google Sign-In:", error.message);
      Swal.fire("Error", error.message, "error");
    }
  };

  // Update database user whenever `email` changes
  useEffect(() => {
    if (email) {
      fetchUserFromDb(email).then((data) => setDbUser(data));
    }
  }, [email]);

  return (
    <div className="w-full grid place-items-center py-10">
      <div className="card bg-base-100 lg:w-3/5 w-full shrink-0 shadow-2xl">
        <div className="flex items-center justify-center flex-col space-y-2">
          <h2 className="lg:text-3xl font-bold text-lg">CinemaSync</h2>
          <p className="lg:text-2xl text-base">Sign in</p>
        </div>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" disabled={isSubmitting}>
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link
              to="/auth/signup"
              state={location.state}
              className="link link-hover text-accent"
            >
              Sign up
            </Link>
          </p>
        </div>
        <div className="divider px-8">OR</div>
        <div className="px-8 mb-8">
          <button
            className="btn btn-primary w-full"
            onClick={handleGoogleSignIn}
          >
            Sign in with <FaGoogle className="text-xl" />
          </button>
          <button className="btn btn-primary w-full mt-2">
            Sign in with <FaFacebookF className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
