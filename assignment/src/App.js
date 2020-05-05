import React,{useState} from "react";
import "./App.css";

 function App() {

  const[count,setCount]=useState(0);

const IncrementCounter=()=>
{
  setCount(count +1);
  console.log("clicking");

}

const DecrementCounter=()=>
{
  setCount(count - 1);
}


  return (
    <div className="outerWrapper" >
      <h1>{count}</h1>
      <div className="App">
        <div className="innerDiv" onClick={IncrementCounter}>click</div>
        <div className="outerDiv" onClick={DecrementCounter}></div>
      </div>
    </div>
  );
}

export default App;
