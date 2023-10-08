import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()


    if (loading) {
        return <p className="text-center mt-20"><span className="loading loading-spinner  loading-lg"></span></p>
  }

  if (user) {
    return children;
    }
  else {
      return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
