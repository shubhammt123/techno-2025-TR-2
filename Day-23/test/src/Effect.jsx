import React, { useEffect, useState } from 'react'
import Card from './Card';

const Effect = () => {
  // const [counter,setCounter] = useState(0);
  // const [number , setNumber] = useState(0);


  const [data , setData] = useState([]);

  const fetchData = async ()=>{
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

// useEffect(()=>{
//   console.log(counter);
//   console.log("Hello world");
//   fetchData();
// },[number]);

useEffect(()=>{
  fetchData();
},[]);

  return (
    <>
      {/* <button onClick={()=>{
        setCounter(counter-1)
      }}>Dec Count</button>
      <p>Count : {counter}</p>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>Inc Count</button>
      <br />
      <button onClick={()=>{
        setNumber(number-1)
      }}>Dec Number</button>
      <p>Number : {number}</p>
      <button onClick={()=>{
        setNumber(number+1)
      }}>Inc Number</button> */}
      {data.map((item)=>{
        return (
          <Card title={item.title} description={item.description} image={item.image} />
        )
      })}
      {/* <button onClick={()=>{setProductId(productId-1)}}>Dec Product Id</button>
      <p>Product Id : {productId}</p>
      <button onClick={()=>{setProductId(productId+1)}}>Inc Product Id</button> */}
    </>
  )
}

export default Effect