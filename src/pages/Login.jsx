import React, { useState, useContext } from 'react';
import { AuthContext } from '../authContext';
import {useLocation, useNavigate} from 'react-router';
import { useDispatch } from 'react-redux/es/exports';
import { login } from '../actions/authActions';
const Login = () => {

const dispatch = useDispatch();
const  {token, setToken} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();
  return (
    <div className='login-container'>
        <h1>Login page</h1>
        <button onClick={() => {dispatch(login()); if(location.state?.from){
            navigate(location.state.from)
        } }}>Log in</button>
    </div>
    
  )
}

export default Login