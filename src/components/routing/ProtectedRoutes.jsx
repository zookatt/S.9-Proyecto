import PropTypes from "prop-types";
import { useContext } from "react";
import { authContext } from "../../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const { userLoggedIn } = useContext(authContext);

  if (!userLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

ProtectedRoute.propTypes = {
  redirectPath: PropTypes.string,
};

export default ProtectedRoute;
