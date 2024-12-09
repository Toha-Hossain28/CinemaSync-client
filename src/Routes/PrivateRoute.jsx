/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-spinner loading-lg mx-auto"></span>;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/signin"></Navigate>;
}

export default PrivateRoute;
