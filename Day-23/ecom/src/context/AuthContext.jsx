import React, { createContext, useState } from 'react'

const AuthContext = createContext();


export const AuthProvider = ({children})=>{
    const [auth , setAuth ]= useState(false);
    const [role , setRole] = useState(null);
    return (
        <AuthContext.Provider value={{auth , setAuth , role , setRole}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext