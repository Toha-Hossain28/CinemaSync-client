/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { set } from "react-hook-form";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const Auth = getAuth(app);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const userSignOut = () => {
    // setLoading(true);
    return signOut(Auth);
  };

  const userSignIn = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    createNewUser,
    userSignOut,
    userSignIn,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
