import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { updateProfile } from "firebase/auth";

function SignUp() {
  const navigate = useNavigate();
  const {
    createNewUser,
    setUser,
    userGoogleSignIn,
    dbUser,
    setDbUser,
    user,
    Auth,
  } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    createNewUser(data.email, data.password)
      .then((result) => {
        setUser(result.user);
        addUserToDb(data, user);
        updateProfile(Auth.currentUser, {
          displayName: data.username,
          photoURL: data.photoURL,
        })
          .then(() => {})
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const addUserToDb = (oldData, user) => {
    const newData = {
      ...oldData,
      favoriteMovies: [],
    };

    fetch("https://movie-server-zeta.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    }).then((res) => res.json());
  };

  const handleGoogleSignIn = () => {
    userGoogleSignIn()
      .then((result) => {
        setUser(result.user);
        const data = {
          email: result.user.email,
          name: result.user.displayName,
          username: result.user.displayName,
          photoURL: result.user.photoURL,
        };
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
      fetch(`https://movie-server-zeta.vercel.app/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setDbUser(data);
        });
    }
  };

  useEffect(() => {
    updateDbUser(email);
  }, [email]);

  return (
    <div className="w-full grid place-items-center py-10">
      <div className="card bg-base-100 lg:w-3/5 w-full shrink-0 shadow-2xl">
        <div className="flex items-center justify-center flex-col space-y-2">
          <h2 className="lg:text-3xl text-lg  font-bold">CinemaSync</h2>
          <p className="lg:text-2xl text-base">Sign up</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* Name */}
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
          {/* Username */}
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
          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
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
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long",
                },
              })}
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
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
