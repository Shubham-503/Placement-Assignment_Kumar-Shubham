import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState("");
  const onClick = (value) => {
    setTotal((prev) => prev + value);
  };
  const deleteLast=()=>{
    // let str= total.slice(0,-1)
    setTotal(prev=>prev.slice(0,-1))
  }
  const calculate= ()=>{
    const val = eval(total)
    console.log(total)

    setTotal(val.toString())
    
  }
  return (
    <div className="App">
      <main className="calculator">
        <input
          className="inputBox"
          type="text"
          value={total}
          onChange={(e) => {
            setTotal((prev) => prev + e.target.value);
          }}
        />
        <div className="row">
          <Button onClick={()=>setTotal("")} setTotal={setTotal} value={"AC"} />
          <Button onClick={onClick} setTotal={setTotal} value={"^"} />
          <Button onClick={onClick} setTotal={setTotal} value={"%"} />
          <Button onClick={onClick} setTotal={setTotal} value={"/"} />
        </div>
        <div className="row">
          <Button onClick={onClick} setTotal={setTotal} value={7} />
          <Button onClick={onClick} setTotal={setTotal} value={8} />
          <Button onClick={onClick} setTotal={setTotal} value={9} />
          <Button onClick={onClick} setTotal={setTotal} value={"*"} />
        </div>
        <div className="row">
          <Button onClick={onClick} setTotal={setTotal} value={4} />
          <Button onClick={onClick} setTotal={setTotal} value={5} />
          <Button onClick={onClick} setTotal={setTotal} value={6} />
          <Button onClick={onClick} setTotal={setTotal} value={"-"} />
        </div>
        <div className="row">
          <Button onClick={onClick} setTotal={setTotal} value={1} />
          <Button onClick={onClick} setTotal={setTotal} value={2} />
          <Button onClick={onClick} setTotal={setTotal} value={3} />
          <Button onClick={onClick} setTotal={setTotal} value={"+"} />
        </div>
        <div className="row">
          <Button onClick={onClick} setTotal={setTotal} value={0} />
          <Button onClick={onClick} setTotal={setTotal} value={"."} />
          <Button onClick={deleteLast} setTotal={setTotal} value={"<-"} />
          <Button onClick={calculate} setTotal={setTotal} value={"="} />
        </div>
      </main>
    </div>
  );
}

export default App;
