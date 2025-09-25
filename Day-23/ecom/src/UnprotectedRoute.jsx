import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const UnprotectedRoute = () => {

    const [auth , setAuth] = useState(true);
    const [role , setRole] = useState("SELLER");

    const navigate = useNavigate();

    useEffect(()=>{
        if(auth){
        navigate("/")
    }
    },[]);

  return (
    <div><Outlet /></div>
  )
}

export default UnprotectedRoute