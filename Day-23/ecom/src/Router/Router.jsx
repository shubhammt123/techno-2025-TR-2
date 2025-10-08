import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '../unprotectedRoute/Login';
import Home from '../Home';
import About from '../About';
import Parent from '../Parent';
import OpenRoute from '../OpenRoute';
import Product from '../openRoutes/Product';
import ProductById from '../openRoutes/ProductById';
import Cart from '../openRoutes/Cart';
import Wishlist from '../openRoutes/Wishlist';
import ProtectedRoute from '../ProtectedRoute';
import Order from '../protectedRoutes/Order';
import SellerProduct from '../protectedRoutes/SellerProduct';
import SellerOrder from '../protectedRoutes/SellerOrder';
import AdminUser from '../protectedRoutes/AdminUser';
import AdminProduct from '../protectedRoutes/AdminProduct';
import AdminOrder from '../protectedRoutes/AdminOrder';
import Dashboard from '../protectedRoutes/Dashboard';
import Profile from '../protectedRoutes/Profile';
import UnprotectedRoute from '../UnprotectedRoute';
import Signup from '../unprotectedRoute/Signup';

const Router =createBrowserRouter(
    [
        {
            path : "/",
            element : <OpenRoute />,
            children : [
                {
                    path : "product",
                    element : <Product />
                },
                {
                    path : "productbyid",
                    element : <ProductById />
                },
                {
                    path : "cart",
                    element : <Cart />
                },
                {
                    path : "wishlist",
                    element : <Wishlist />
                },
                {
                    path : "",
                    element : <Home />
                },
            ]
        },
        {
            path : "/user",
            element : <ProtectedRoute allowedRole={["USER"]} />,
            children : [
                {
                    path : "order",
                    element : <Order />
                }
            ]
        },
        {
            path : "/seller",
            element : <ProtectedRoute allowedRole={["SELLER"]} />,
            children : [
                {
                    path : "sellerproduct",
                    element : <SellerProduct />
                },
                {
                    path : "sellerorder",
                    element : <SellerOrder />
                },
            ]
        },
        {
            path : "/admin",
            element : <ProtectedRoute allowedRole={["ADMIN"]} />,
            children : [
                {
                    path : "adminuser",
                    element : <AdminUser />
                },
                {
                    path : "adminproduct",
                    element : <AdminProduct />
                },
                {
                    path : "adminorder",
                    element : <AdminOrder />
                },
            ]
        },
        {
            path : "/selleradmin",
            element : <ProtectedRoute allowedRole={["SELLER","ADMIN"]} />,
            children : [
                {
                    path : "dashboard",
                    element : <Dashboard />
                }
            ]
        },
        {
            path : "/all",
            element : <ProtectedRoute allowedRole={["ADMIN","USER","SELLER"]} />,
            children : [
                {
                    path : "profile",
                    element : <Profile />
                }
            ]
        },
        {
            path : "/auth",
            element : <UnprotectedRoute />,
            children  : [
                {
                    path  : "login",
                    element : <Login />
                },
                {
                    path : "signup",
                    element :  <Signup />
                }
            ]
        },
        {
            path : "*",
            element : <Navigate to="/" />
        }
    ]
);

export default Router


// open routes - /product , /home , /productbyid , /cart , /wishlist

// user route - /order

// seller route - /sellerorder  , /sellerproduct

// admin routes - /adminuser , /adminproduct , /adminorder

// seller and admin - /dashboard

// admin , seller , user - /profile

// without logged in - /login , /signup - unprotected routes


