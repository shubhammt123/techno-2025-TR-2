import React from 'react'
import Child2 from './Child2'

const Child1 = () => {
    console.log("Child 1 re-renders")
  return (
    <div className='child1'>
        Child1
        <Child2  />
    </div>
  )
}

export default Child1