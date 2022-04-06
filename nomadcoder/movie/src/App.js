import React, { useState , useEffect } from 'react';
import Button from "./Button";
import styles from "./App.module.css";
;
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  const iRunOnlyOne = () => {
    console.log("i run only one");
  }
    useEffect(iRunOnlyOne,[]);
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
