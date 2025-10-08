import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthContext from './context/AuthContext'
import Navbar from './Navbar';

const ProtectedRoute = ({allowedRole}) => {

    const {auth , role} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!auth){
        navigate("/auth/login")
    }
    },[]);

    useEffect(()=>{
        if(!allowedRole.includes(role)){
        navigate("/")
    }
    },[]);
  return (
    <div>
      <Navbar />
      <Outlet />
      </div>
  )
}

export default ProtectedRoute