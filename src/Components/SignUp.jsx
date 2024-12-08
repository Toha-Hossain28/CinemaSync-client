/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";
function SignUp() {
  const navigate = useNavigate();
  const { createNewUser, setUser, userGoogleSignIn, dbUser, setDbUser, user } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  // console.log(user?.email);

  const onSubmit = (data) => {
    // e.preventDefault();
    // console.log(data);
    createNewUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        addUserToDb(data, user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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

  useEffect(() => {
    updateDbUser(email);
  }, [email, updateDbUser]);
  // updateDbUser(email);

  // console.log(dbUser, user);
  // console.log(email);
  return (
    <div className="w-full grid place-items-center py-10">
      <div className="card bg-base-100 lg:w-3/5 w-full shrink-0 shadow-2xl">
        <div className="flex items-center justify-center flex-col space-y-2">
          <h2 className="lg:text-3xl text-lg  font-bold">CinemaSync</h2>
          <p className="lg:text-2xl text-base">Sign up</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name")}
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* UserName */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              {...register("username")}
              name="username"
              type="text"
              placeholder="Username"
              className="input input-bordered"
              required
            />
          </div>
          {/* photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              {...register("photoURL")}
              name="photoURL"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              name="password"
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
            <button
              className="btn btn-primary lg:text-xl lg:font-bold text-base font-medium"
              disabled={isSubmitting}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/auth/signin" className="link link-hover text-accent">
              Sign in
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

export default SignUp;
