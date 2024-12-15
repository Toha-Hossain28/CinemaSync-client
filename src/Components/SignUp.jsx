import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { updateProfile } from "firebase/auth";

function SignUp() {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [dbUser, setDbUser] = useState(null);
  const { createNewUser, setUser, userGoogleSignIn, user, Auth } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const email = user?.email;

  // Reusable function: Add user to the database
  const addUserToDb = (data) => {
    const newUserData = {
      ...data,
      favoriteMovies: [],
    };

    return fetch("https://movie-server-zeta.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    })
      .then((res) => res.json())
      .catch((error) => {
        // console.error("Error adding user to the database:", error);
      });
  };

  // Reusable function: Fetch user from the database
  const fetchUserFromDb = (email) => {
    return fetch(`https://movie-server-zeta.vercel.app/users/${email}`)
      .then((res) => res.json())
      .catch((error) => {
        // console.error("Error fetching user:", error);
        return null;
      });
  };

  // Form Submission: Sign up with email and password
  const onSubmit = (data) => {
    createNewUser(data.email, data.password)
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);

        // Add user to the database
        addUserToDb(data)
          .then(() => {
            // console.log("User added to the database successfully.");
          })
          .catch((error) => {
            // console.error("Error adding user to the database:", error);
          });

        // Update Firebase profile
        updateProfile(newUser, {
          displayName: data.username,
          photoURL: data.photoURL,
        })
          .then(() => {
            // console.log("Profile updated successfully.");
          })
          .catch((error) => {
            // console.error("Error updating profile:", error);
          });

        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        // console.error("Error creating user:", error.message);
      });
  };

  // Google Sign-In
  const handleGoogleSignIn = () => {
    userGoogleSignIn()
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);

        // Check if the user exists in the database
        fetchUserFromDb(newUser.email).then((existingUser) => {
          if (!existingUser) {
            // Add user to the database if not already present
            const data = {
              email: newUser.email,
              name: newUser.displayName,
              username: newUser.displayName,
              photoURL: newUser.photoURL,
            };
            addUserToDb(data)
              .then(() => {
                // console.log("Google user added to the database successfully.");
              })
              .catch((error) => {
                // console.error(
                //   "Error adding Google user to the database:",
                //   error
                // );
              });
          } else {
            // console.log("Google user already exists in the database.");
          }
        });

        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        // console.error("Error during Google Sign-In:", error.message);
      });
  };

  // Update database user on user state change
  useEffect(() => {
    if (email) {
      fetchUserFromDb(email).then((data) => setDbUser(data));
    }
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
