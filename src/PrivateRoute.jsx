import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { AuthContext } from './authContext';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const PrivateRoute = () => {

  const authToken = useSelector(state => state.authToken);
    const location = useLocation();
    const  {token, setToken} = useContext(AuthContext);
  return (
    authToken ? <Outlet/> : <Navigate to="/login" replace state={{from: location}}/>
  )
}

export default PrivateRoute