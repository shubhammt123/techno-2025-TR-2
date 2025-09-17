import React, { useState } from 'react'

const Counter = () => {
    // let counter = 0;

    const [counter , setCounter] = useState(0);

    const handleIncCount = ()=>{
        setCounter(counter+1);
        // counter += 1;
    }
    const handleDecCount = ()=>{
        setCounter(counter-1);
        // counter -= 1;
    }

    console.log(counter);

  return (
    <div>
        <div>
            <button onClick={handleIncCount}>Inc Count(+)</button>
            <p>Counter : {counter}</p>
            <button onClick={handleDecCount} disabled={counter<=0}>Dec Count(-)</button>
        </div>
    </div>
  )
}

export default Counter