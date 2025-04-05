import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  //Loader
  if (loading) {
    return (
      <span className="loading loading-bars flex justify-center items-center h-[100vh] w-[5%] mx-auto"></span>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default Private;

Private.propTypes = {
  children: PropTypes.node,
};
