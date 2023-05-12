import React, {useState,useEffect} from 'react'

function Counter() {
    useEffect(()=>{
        console.log('Mounting....');
    })
    const [count,setCount]=useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
      <h1>Hello I'am a Componen:{count}</h1>
    </div>
  )
}

export default Counter

