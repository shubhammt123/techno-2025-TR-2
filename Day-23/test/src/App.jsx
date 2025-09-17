import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Home"
import Card from './Card'
import Counter from './Counter'
import Effect from './Effect'

function App() {
  
  // let data = [
  //   {
  //     title : "Iphone 15 Pro",
  //     description : "This is 15 series of Iphone",
  //     image : "https://tse4.mm.bing.net/th/id/OIP.5OjWGpUbcLWp3___TQX4TQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  //   },
  //   {
  //     title : "Samsung S24 Ultra",
  //     description : "This is S  series of samsung",
  //     image : "https://image-us.samsung.com/us/smartphones/galaxy-s24/all-gallery/01_E3_TitaniumBlack_Lockup_1600x1200.jpg?$product-details-jpg$?$product-details-thumbnail-jpg$"
  //   },
  //   {
  //     title : "Google Pixel 9",
  //     description : "This is pixel series of google",
  //     image : "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/08/google-pixel-9.png"
  //   },
  //   {
  //     title : "Nothing Phone",
  //     description : "This is Nothing phone",
  //     image : "https://tse3.mm.bing.net/th/id/OIP.nilhGHhrznoDHbHQ2pRfSwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  //   },
  // ]

  return (
    <div className='container'>
      {/* {
        data.map((item , index)=>{
          return (
            <div key={index}>
              <Card title={item.title}  description={item.description} image={item.image} />
            </div>
            
          )
        })
      } */}
      {/* <Counter /> */}
      <Effect />
    </div>
  )
}

export default App
