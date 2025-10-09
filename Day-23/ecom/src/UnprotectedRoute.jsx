import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthContext from './context/AuthContext';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const UnprotectedRoute = () => {

    const {auth , role} = useSelector((state)=>state.auth);

    const navigate = useNavigate();

    useEffect(()=>{
        if(auth){
        navigate("/")
    }
    },[auth]);

  return (
    <div >
      <Navbar />
      <div className='container'>
         <Outlet />
      </div>
     
      </div>
  )
}

export default UnprotectedRoute