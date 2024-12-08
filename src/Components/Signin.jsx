import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

function SignIn() {
  const { setUser, userSignIn, userGoogleSignIn, setDbUser, dbUser, user } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    userSignIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });

    // dbUser loading
    fetch(`http://localhost:3000/users/${data.email}`)
      .then((res) => res.json())
      .then((data) => {
        setDbUser(data);
      });
  };
  // console.log("debuser", dbUser);
  const addUserToDb = (oldData, user) => {
    // user with favorite movie array
    const newData = {
      ...oldData,
      favoriteMovies: [],
    };

    console.log(newData);

    // add user to database
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  const handleGoogleSignIn = () => {
    userGoogleSignIn()
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);
        const data = {
          email: result.user.email,
          name: result.user.displayName,
          username: result.user.displayName,
          photoURL: result.user.photoURL,
        };
        // console.log(data);
        updateDbUser(data.email);
        if (!dbUser) {
          addUserToDb(data, user);
        }
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const email = user?.email;
  const updateDbUser = (email) => {
    if (email) {
      fetch(`http://localhost:3000/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDbUser(data);
        });
    }
  };

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
            <Link to="/auth/signup" className="link link-hover text-accent">
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
