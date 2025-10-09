import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {
    const [formData , setFormData] =  useState({
      email : "",
      password : ""
    });

    const {auth ,setAuth,role , setRole} = useContext(AuthContext);

    console.log(auth)
    console.log(role)
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        const role = prompt("Enter role");
        setAuth(true);
        setRole(role);
        localStorage.setItem("auth",true);
        localStorage.setItem("role",role);
    }

    const handleChange = (e)=>{
       setFormData({...formData , [e.target.name] : e.target.value});
    }


  return (
    <div style={{width : "50%" , height : "60%" , backgroundColor : "white" ,  boxShadow : "#a9a9a9 1px 1px 6px" , borderRadius : "10px" , display : "flex" , flexDirection : "column" , justifyContent : "center", gap :  "40px"}}>

        <h1 style={{textAlign : "center" , color : "grey"}}>Welcome Back ! Login</h1>

        <form style={{display : "flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center" ,gap : "20px"}} onSubmit={handleSubmit}>


            <input type="email" placeholder='Email' name='email' onChange={handleChange} value={formData.email} />

            <input type="password" placeholder='Password' name='password' onChange={handleChange} value={formData.password} />

            <button>Login</button>

        </form>

        <div style={{textAlign : "center" ,   color : "grey"}}>
            Don't have an account?
            <span style={{color : "#3e6ed7de" , cursor : "pointer"}} onClick={()=>{navigate("/auth/signup")}}>Signup
            </span>
            </div>
    </div>
  )
}

export default Login