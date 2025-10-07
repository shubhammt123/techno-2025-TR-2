import React from 'react'
import Child3 from './Child3'

const Child2 = () => {
    console.log("Child 2 re-renders")
  return (
    <div className='child2'>
        Child2
        <Child3 />
        </div>
  )
}

export default Child2