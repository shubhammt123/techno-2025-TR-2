import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h1>Logo</h1>
        <ul>
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link>About</Link>
            </li>
            <li>
                <Link>Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar