import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
import Navbar from './Navbar'

function App() {

  return (
    <>
    
    <RouterProvider router={Router} />
    </>
  )
}

export default App
