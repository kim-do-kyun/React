import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
    const plus = () => {
        // count = count + 1
        setCount(count + 1); 
        console.log(count);
    }
    const minus = () => {
        // count = count - 1
        setCount(count - 1);
        console.log(count);
    }
  return (
    <div className='container'style={{margin:15}}>
        <h2 className='int'>{count}</h2>
        <button className='plus' onClick={plus}>+</button>
        <button className='minus' onClick={minus}>-</button>
    </div>
  )
}

