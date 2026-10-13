import React, {useEffect,useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)

    const btn = {
        padding:"10px",
        borderRadius:"10px",
        backgroundColor:" #169130",
        color:"white",
    }
    useEffect(()=>{
        document.title="Counter";
    },[])
    //useEffect(()=>{
        //setCount(42)
    //})
    function timeout(){
        setTimeout(()=>{
            console.log("test")
        },1000);
    }
    function interval(){
        setInterval(()=>{
            console.log("interval test")
        },2000)
    }
  return (
    <div>
        <h1>Count: {count }</h1>
        <button style={btn} onClick={() => setCount(count + 1)}>INCREMENT</button>
        <button style={btn} onClick={() => setCount(count - 1)}>DECREMENT</button>
        <button style={btn} onClick={() => setCount(0)}>RESET</button>
 <button style={btn} onClick={() => setCount(count-1)}>OTHER</button>
<button style={btn} onClick={timeout}>TIMEOUT</button>
<button style={btn} onClick={timeout}>INTERVAL</button>
      
    </div>
  )
}


export default Counter