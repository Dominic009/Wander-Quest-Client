import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

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
  };

  return (
    <div>
      <AuthContext.Provider value={userInfos}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
