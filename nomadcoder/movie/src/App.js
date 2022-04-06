import React, { useEffect, useState } from 'react';
import Button from "./Button";
import styles from "./App.module.css";
;
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (e) => {setKeyword(e.target.value);}
  const onClick = () => setValue((prev) => prev + 1);
  useEffect(() => {
    if(keyword !== '' && keyword.length > 5)
    console.log("search for " , keyword);
  },[keyword]);
  useEffect(() => {
    if(counter !== '0' && counter > 5)
    console.log("my counter is " , counter);
  },[counter]);
  return (
    <div>
        <input type="text" value={keyword} onChange={onChange} placeholder='Search here...'/>
        <h1>{counter}</h1>
        <button  onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
