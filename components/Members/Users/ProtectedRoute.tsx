import Error from 'next/error'
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/authContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { authUser } = useAuth();
  
  return <div>{authUser ? children : <Error statusCode={404} />}</div>;
};

export default ProtectedRoute;