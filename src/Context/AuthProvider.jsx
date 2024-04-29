import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();



const AuthProvider = ({ children }) => {
  const auth = getAuth(app);



  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Creating user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //User log in
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

    //Google login
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
  
    //Github login
    const githubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, gitProvider);
    };

  //User log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);


  // Passing data
  const userInfos = {
    createUser,
    loading,
    userLogIn,
    user,
    logOut,
    googleLogin,
    githubLogin,
    setLoading
  };

  return (
    <div>
      <AuthContext.Provider value={userInfos}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
