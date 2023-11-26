import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth, db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import { Router, useRouter } from "next/router";

interface UserType {
  email: string | null;
  uid: string | null;
}

interface IAuthUser {
  name: string;
  email: string;
  type: "user" | "admin" | "alumni";
  uid: string
}

interface IAuthContext {
  user: UserType,
  authUser: IAuthUser | undefined,
  logOut: () => Promise<void>
}

const AuthContext = createContext<IAuthContext>({ user: { email: null, uid: null }, authUser: undefined, logOut: async () => {} });
export const useAuth = () => useContext<IAuthContext>(AuthContext);

export const logIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
export const signUp = (name: string, email: string, password: string) => createUserWithEmailAndPassword(auth, email, password)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>({ email: null, uid: null });
  const [authUser, setAuthUser] = useState<IAuthUser | undefined>();
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser({ email: u.email, uid: u.uid });

        if (!authUser) {
          const snapshot = await getDoc(doc(db, "users", u.uid));
          const userData = snapshot.data() as IAuthUser;
          setAuthUser(userData);
          console.log('Authenticated');
        }
      } else {
        setUser({ email: null, uid: null });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logOut = async () => {
    setUser({ email: null, uid: null });
    setAuthUser(undefined);
    await router.push("/login")
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, authUser, logOut }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};