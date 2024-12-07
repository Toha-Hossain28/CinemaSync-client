import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthProvider from "./Context/AuthProvider";

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
        path: "/addMovie",
        element: <div>Add Movie</div>,
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
