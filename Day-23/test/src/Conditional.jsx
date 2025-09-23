import React, { useState } from 'react'

const Conditional = () => {
    const [role , setRole] = useState("ghjd");
  return (
    <div>
        <p>
            {role === "ADMIN" ? 
            "Hello ADMIN , You have full control of application" : role === "USER" ? "Hello User ,  You have user control of application" : role ===  "VENDOR" ? 
            "Hello Vendor , You have Vendor control of application" : "Invalid role"
            }
        </p>
    </div>
  )
}

export default Conditional