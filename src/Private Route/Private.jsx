import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const Private = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    //Loader
    if(loading){
        <span className="loading loading-dots loading-lg"></span>
    }

    if(user){
        return children;
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default Private;

Private.propTypes = {
    children: PropTypes.node
  }