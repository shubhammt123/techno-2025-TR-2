import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [formData , setFormData] =  useState({
      email : "",
      userName : "",
      password : "",
      confirmPassword : "",
      contactNo : ""
    });



    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(formData.password !== formData.confirmPassword){
            alert("Password and  confirm password should be same");
            return;
        }
        console.log(formData)
    }

    const handleChange = (e)=>{
       setFormData({...formData , [e.target.name] : e.target.value});
    }


  return (
    <div style={{width : "50%" , height : "85%" , backgroundColor : "white" ,  boxShadow : "#a9a9a9 1px 1px 6px" , borderRadius : "10px" , display : "flex" , flexDirection : "column" , justifyContent : "center", gap :  "40px"}}>

        <h1 style={{textAlign : "center" , color : "grey"}}>Welcome ! Signup</h1>

        <form style={{display : "flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center" ,gap : "20px"}} onSubmit={handleSubmit}>

           <input type="text" placeholder='User Name' name='userName' onChange={handleChange} value={formData.userName} />

            <input type="email" placeholder='Email' name='email' onChange={handleChange} value={formData.email} />

            <input type="password" placeholder='Password' name='password' onChange={handleChange} value={formData.password} />

            <input type="password" placeholder='Confirm Password' name='confirmPassword' onChange={handleChange} value={formData.confirmPassword} />

            <input type="text" placeholder='Contact No' name='contactNo' onChange={handleChange} value={formData.contactNo} />

            <button> Signup </button>

        </form>

        <div style={{textAlign : "center" ,   color : "grey"}}>
            Already have an account?
            <span style={{color : "#3e6ed7de" , cursor : "pointer"}} onClick={()=>{navigate("/auth/login")}}>Login
            </span>
            </div>
    </div>
  )
}

export default Signup