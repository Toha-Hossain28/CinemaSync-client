import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthProvider from "./Context/AuthProvider";
import SecondLayout from "./Layouts/SecondLayout";
import AddMovie from "./Components/AddMovie";
import PrivateRoute from "./Routes/PrivateRoute";
import MovieDetail from "./Components/MovieDetail";
import AllMovies from "./pages/AllMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/movies",
        element: <div>All Movies</div>,
      },

      {
        path: "/favoriteMovies",
        element: <div>Favorite Movies</div>,
      },
      {
        path: "/coming",
        element: <div>Coming</div>,
      },
    ],
  },
  {
    path: "movies",
    element: <SecondLayout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "",
        element: <AllMovies />,
      },
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <MovieDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "addMovie",
        element: (
          <PrivateRoute>
            <AddMovie />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/auth/signin",
        element: <SignIn />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
