import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Hook/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //1. Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   2. Update Name

  const updateName = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // 3. Google Signin

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // 4. Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //5. Login with Password
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //6. Facebook Sign in
  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  //7. Github Sign in
  const gitHunSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signInWithGoogle,
    logout,
    signin,
    loading,
    setLoading,
    facebookSignIn,
    gitHunSignIn,
    updateName,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
