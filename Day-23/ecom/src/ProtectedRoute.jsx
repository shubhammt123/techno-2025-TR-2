import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({allowedRole}) => {
    const [auth , setAuth] = useState(false);
    const [role , setRole] = useState(null);


    console.log(allowedRole)
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
    <div><Outlet /></div>
  )
}

export default ProtectedRoute