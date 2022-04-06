import React, { useState } from 'react';
import Button from "./Button";
import styles from "./App.module.css";
;
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
