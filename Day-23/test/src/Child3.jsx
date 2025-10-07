import React from 'react'
import { useContext } from 'react'
import CountContext from './context/CountContext'

const Child3 = () => {
    console.log("Child 3 re-renders")

    const {count , setCount} = useContext(CountContext);

  return (
    <div className='child3'>
        Child3
        <button onClick={()=>{setCount(count+1)}}>Inc Count</button>
        <p>Count : {count}</p>
        <button onClick={()=>{setCount(count-1)}}>Dec Count</button>

    </div>
  )
}

export default Child3