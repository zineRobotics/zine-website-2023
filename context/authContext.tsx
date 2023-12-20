import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth, db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { IUser } from "../apis/users";

interface UserType {
  email: string | null;
  uid: string | null;
}

interface IAuthContext {
  user: UserType,
  authUser: IUser | undefined,
  logOut: () => Promise<void>
}

const AuthContext = createContext<IAuthContext>({ user: { email: null, uid: null }, authUser: undefined, logOut: async () => {} });
export const useAuth = () => useContext<IAuthContext>(AuthContext);

export const logIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
export const signUp = (name: string, email: string, password: string) => createUserWithEmailAndPassword(auth, email, password)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>({ email: null, uid: null });
  const [authUser, setAuthUser] = useState<IUser | undefined>();
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser({ email: u.email, uid: u.uid });

        if (!authUser) {
          const snapshot = await getDoc(doc(db, "users", u.uid));
          const userData = snapshot.data() as IUser;
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
    await signOut(auth);
    await router.push("/login")
    setUser({ email: null, uid: null });
    setAuthUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ user, authUser, logOut }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};