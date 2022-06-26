import React from 'react'
import { useState } from 'react';

const InputSample = () => {
    const [text,setText] = useState("");
  return (
    <div>
        <input type="text" onChange={(e)=>{setText(e.target.value);}} />
        <button>초기화</button>
        <div>
            <b>값 : {text}</b>
        </div>
    </div>
  )
}

export default InputSample