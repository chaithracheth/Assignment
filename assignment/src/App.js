import React,{useState,useRef,useEffect} from 'react';
import './App.css';


function App()
{

const[counter,setCounter]=useState(0);
const myRef=useRef(false);

useEffect(()=>
  {
    document.addEventListener('click',incrementCounter);
    return ()=> document.removeEventListener('click',incrementCounter);
  });

const incrementCounter=(e)=>
{
  if(myRef.current.contains(e.target))
  {
    setCounter(counter + 1);
  }
  else
  {
    setCounter(counter - 1);
  }
  
}

  return(
    <div className="innerDiv" onClick={incrementCounter} ref={myRef}>{counter}</div>
  )
}

export default App;