import { useContext } from "react";
import { authContext } from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const { userLoggedIn } = useContext(authContext);

  if (!userLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
