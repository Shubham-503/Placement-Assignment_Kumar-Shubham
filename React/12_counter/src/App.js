import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inpCount, setInpCount] = useState(0)

  const incCount = (value)=>{
    value=+value;
    setCount(pre=>pre+value)
  }
  const decCount = (value)=>{
   value= +value;
    setCount(pre=>pre-value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {count}</h1>
        <div className="btns">
          <span class="btn" onClick={()=>incCount(1)}>+</span>
          <span class="btn" onClick={()=>decCount(1)}>-</span>
        </div>
        <div className="btns">
          <span class="btn" onClick={()=>incCount(inpCount)}>+</span>
          <input type="text" class="countInp" placeholder="enter value to inc or dec" value={inpCount} onChange={(e)=>setInpCount(e.target.value)} />
          <span class="btn" onClick={()=>decCount(inpCount)}>-</span>
        </div>
        <span className="btn" onClick={()=>setCount(0)} >Reset</span>
      </header>
    </div>
  );
}

export default App;
