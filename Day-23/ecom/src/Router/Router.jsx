import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../Login';
import Home from '../Home';
import About from '../About';
import Parent from '../Parent';

const Router =createBrowserRouter(
    [
        {
            path : "/",
            element : <Parent />,
            children : [
                {
            path : "/login",
            element : <Login />
        },
        {
            path : "/home",
            element : <Home />
        },
        {
            path : "/about",
            element : <About />
        }
            ]
        }
    ]
);

export default Router