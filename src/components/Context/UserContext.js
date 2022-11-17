import React, { createContext, useEffect, useState } from 'react';
import app from "../../Firebase/Firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";


const auth = getAuth(app);
export const AuthContext = createContext();
const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    };
    const provider = new GoogleAuthProvider();
    const signIn = (email, password) => {
        setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
    };
    const userSignOut = () => {
      return signOut(auth);
    };
    const signByGoogle = () => {
      return signInWithPopup(auth, provider);
    };
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        
      });
      return () => {
        unsubscribe();
      };
    }, []);
   
    const authInfo = {
      loading,
      user,
      createUser,
      signIn,
      userSignOut,
      signByGoogle,
    };
    return (
       <AuthContext.Provider value={authInfo}>
{children}
       </AuthContext.Provider>
    );
};

export default UserContext;