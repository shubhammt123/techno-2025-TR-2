import React, { useState } from 'react'

const Navbar = () => {
    const  [auth , setAuth] = useState(true);
    const [role , setRole] = useState("VENDOR");
    const style = {
        display : "flex" , 
        justifyContent : "space-between" , alignItems : "center" , 
        padding : "10px" ,  
        backgroundColor : "lightcyan"
    }
  return (
    <div style={style}>
        <h1>Logo</h1>
        <input type="text" placeholder='Search...' />
        {
            auth ? 
            (role === "ADMIN" ? 
                <ul style={{listStyleType : "none" , display  : "flex" , gap: "10px"}}>
            <li>Dashboard</li>
            <li>All Users</li>
            <li>All Posts</li>
            <li>Profile</li>
            <li>Logout</li>
        </ul> : role === "USER" ? 
        <ul style={{listStyleType : "none" , display  : "flex" , gap: "10px"}}>
            <li>Home</li>
            <li>My Posts</li>
            <li>Profile</li>
            <li>Logout</li>
        </ul>
        : role === "VENDOR" 
         ?
         <ul style={{listStyleType : "none" , display  : "flex" , gap: "10px"}}>
            <li>Dashboard</li>
            <li>My Users</li>
            <li>My Posts</li>
            <li>Profile</li>
            <li>Logout</li>
        </ul> : ""
            )
            : 
        <ul style={{listStyleType : "none" , display  : "flex" , gap: "10px"}}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login/Signup</li>
        </ul>
        }
    </div>
  )
}

export default Navbar