import React, { useContext } from 'react'
import {AuthContext} from '../Authcontext'
import { Route, Routes, Navigate } from 'react-router-dom';


const PrivateRoutes = ({children}) => {
    const { loggedIn , user } = useContext(AuthContext);
 
    if (user=='') {
      alert("Login first");
      return <Navigate to="/login" />;
    }
      return children;
}

export default PrivateRoutes
