
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { db } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useAuth();
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    if (!user.uid) {
        //router.push('/admin/login')
    }
    else {
        getDoc(doc(db, "users", user.uid)).then((res) => {
            if (!res.exists() || res.data().type !== "admin") router.push('/admin/login')
            localStorage.setItem("name", res.data()!.name)
            setAdmin(true)
        })
    }
  }, [router, user]);

  return <div>{admin ? children : null}</div>;
};

export default ProtectedRoute;