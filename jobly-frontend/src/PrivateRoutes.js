import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { currentUser } = useContext(UserContext);

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
