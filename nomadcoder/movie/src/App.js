import React, { useEffect, useState } from 'react';

function Hello(){
  function byfc(){
    console.log("bye!");
  }
  function hifc(){
    console.log('Hello!');
    return byfc;
  }
  useEffect(hifc,[]);
  return <h1>Hello</h1>
}
function App() {
  const [showing, setshowing] = useState(false);
  const onClick = () => setshowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
