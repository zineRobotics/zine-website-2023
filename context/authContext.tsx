import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth, db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

interface UserType {
  email: string | null;
  uid: string | null;
}

interface IAuthUser {
  name: string;
  email: string;
  type: "user" | "admin";
}

const AuthContext = createContext({});
export const useAuth = () => useContext<any>(AuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>({ email: null, uid: null });
  const [authUser, setAuthUser] = useState<IAuthUser>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser({ email: u.email, uid: u.uid });
        
        const snapshot = await getDoc(doc(db, "users", u.uid))
        setAuthUser(snapshot.data() as IAuthUser)
        console.log('Authenticated')
      } else {
        setUser({ email: null, uid: null });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
  const signUp = (name: string, email: string, password: string) => createUserWithEmailAndPassword(auth, email, password)

  const logOut = async () => {
    setUser({ email: null, uid: null});
    setAuthUser(undefined);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, authUser, logIn, logOut, signUp }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};