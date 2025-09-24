import React, { useEffect, useState } from 'react'
import Card from './Card';

const Effect = () => {
  // const [counter,setCounter] = useState(0);
  // const [number , setNumber] = useState(0);


  const [data , setData] = useState([]);
  const [open , setOpen] = useState(false);
  const [selectProductId , setSelectedProductId] =  useState(null);
  const [selectProduct , setSelectedProduct] = useState({});

  console.log(selectProductId)

  const fetchData = async ()=>{
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchDataById = async (id)=>{
    try {
      const  response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setSelectedProduct(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchDataById(selectProductId)
  },[selectProductId]);

  console.log(selectProduct)
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
          <Card title={item.title} description={item.description} image={item.image} setOpen={setOpen} id={item.id} setSelectedProductId={setSelectedProductId} />
        )
      })}
      {/* <button onClick={()=>{setProductId(productId-1)}}>Dec Product Id</button>
      <p>Product Id : {productId}</p>
      <button onClick={()=>{setProductId(productId+1)}}>Inc Product Id</button> */}
      {open && (
        <div className="modal">
        <div className="modal-container">
          <div className="header">
            <h1>Product</h1>
            <button onClick={()=>{
              setOpen(false);
              setSelectedProduct({});
              setSelectedProductId(null)
          }}>X</button>
          </div>
        <div>
          <img src={selectProduct.image} alt="" />
        </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Effect