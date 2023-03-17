import "./styles.css";
import One from "./components/One";
import Two from "./components/Two";
import { useState } from "react";

function App() {

  const [number, setNumber] = useState(0);

  function onNumberHandler(){
    setNumber( number + 1);
  }

  return (
    <div className="mainLayout">

      {number}
      <button onClick={onNumberHandler}>+</button>

      <One numberToPass = {number} numberUpdate = {onNumberHandler}/>
      <Two numberToPass = {number}/>
    </div>
  );
}

export default App;
