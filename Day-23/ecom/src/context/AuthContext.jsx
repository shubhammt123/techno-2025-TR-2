import React, { createContext, useState } from 'react'

const AuthContext = createContext();


export const AuthProvider = ({children})=>{
    const [auth , setAuth ]= useState(()=>{
        let auth = localStorage.getItem("auth");
        if(auth){
            return auth
        }else{
            return false;
        }
    });
    const [role , setRole] = useState(()=>{
        let role = localStorage.getItem("role");
        if(role){
            return role
        }else{
            return null;
        }
    });
    return (
        <AuthContext.Provider value={{auth , setAuth , role , setRole}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext