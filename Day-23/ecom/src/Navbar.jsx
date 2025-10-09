import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from './context/AuthContext'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './redux/slices/authSlice'

const Navbar = () => {

   const {auth , role} = useSelector((state)=>state.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = ()=>{
        dispatch(logout());
        localStorage.removeItem("auth",false);
        localStorage.removeItem("role",null);
        navigate("/auth/login");
    }
  return (
    <div className='navbar'>
        <h1>Logo</h1>
        <input type="text" placeholder='Search...' id='search' />
        {
            auth ? 
            (
                role === "ADMIN"
                 ? 
                 <ul>
            <li>
                <Link to="/selleradmin/dashboard" className='link'>Dashboard</Link>
            </li>
            <li>
                <Link to="/admin/adminuser" className='link'>Admin-User</Link>
            </li>
            <li>
                <Link to="/admin/adminproduct" className='link'>Admin-Product</Link>
            </li>
            <li>
                <Link to="/admin/adminorder" className='link'>Admin-Order</Link>
            </li>
            <li>
                <Link to="/all/profile" className='link'>Profile</Link>
            </li>
            <li>
                <button id='logout'  onClick={handleLogout}>Logout</button>
            </li>
        </ul>
                 : role === "SELLER" 
                 ? 
                 <ul>
            <li>
                <Link to="/selleradmin/dashboard" className='link'>Dashboard</Link>
            </li>
            
            <li>
                <Link to="/seller/sellerproduct" className='link'>Seller-Product</Link>
            </li>
            <li>
                <Link to="/seller/sellerorder" className='link'>Seller-Order</Link>
            </li>
            <li>
                <Link to="/all/profile" className='link'>Profile</Link>
            </li>
            <li>
                <button id='logout'  onClick={handleLogout}>Logout</button>
            </li>
        </ul>
                 :
                 <ul>
            <li>
                <Link to="/home" className='link'>Home</Link>
            </li>
            <li>
                <Link to="/product" className='link'>Product</Link>
            </li>
            <li>
                <Link to="/cart" className='link'>Cart</Link>
            </li>
            <li>
                <Link to="/wishlist" className='link'>Wishlist</Link>
            </li>
            <li>
                <Link to="/all/profile" className='link'>Profile</Link>
            </li>
           <li>
                <button id='logout' onClick={handleLogout}>Logout</button>
            </li>
        </ul>
            )
         : 
        <ul>
            <li>
                <Link to="/home" className='link'>Home</Link>
            </li>
            <li>
                <Link to="/product" className='link'>Product</Link>
            </li>
            <li>
                <Link to="/cart" className='link'>Cart</Link>
            </li>
            <li>
                <Link to="/wishlist" className='link'>Wishlist</Link>
            </li>
            <li>
                <Link to="/auth/login" className='link'>Login</Link>
            </li>
            <li>
                <Link to="/auth/signup" className='link'>Signup</Link>
            </li>
        </ul>
        }
    </div>
  )
}

export default Navbar