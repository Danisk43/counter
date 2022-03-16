import React,{useState} from 'react'
import './App.css';
import Button from './Button.js';

function App() {
  const [count,setCount]= useState(0);
  
  let increment=()=>{
    setCount(count+1)
  }
  let decrement=()=>{
    setCount(count-1)
  }
  let multiply=()=>{
    setCount(count*2)
  }
  return (
    <>
    <h1>Counter</h1>
    <h2>{count}</h2>
    <div>
    <Button action={decrement} title="-"/>
    <Button action={increment} title="+"/>
    <Button action={multiply} title="*"/>

    </div>
    </>
  );
}

export default App;
