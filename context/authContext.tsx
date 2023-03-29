import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

interface UserType {
  email: string | null;
  uid: string | null;
}

const AuthContext = createContext({});

export const useAuth = () => useContext<any>(AuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>({ email: null, uid: null });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        console.log(u)
        setUser({ email: u.email, uid: u.uid });
      } else {
        setUser({ email: null, uid: null });
      }
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);

  const logIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

  const logOut = async () => {
    setUser({ email: null, uid: null});
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};