import React, {useState} from 'react';

import './App.css';

function App() {
    const [minutes, setMiniutes] = useState("");
    const onChange = (event) => {
        setMiniutes(event.target.value);
    }
    const reset = () => setMiniutes(0);
    return (
        <div className="App">
            <h1 className="hi">Super Converter</h1>
            <div>
                <label htmlFor='minutes'>Second</label>
                <input
                    value={minutes}
                    id="minutes"
                    placeholder='Minutes'
                    type="number"
                    onChange={onChange} />
                <h4>You want to convert {minutes}</h4>
            </div>
            <div>
                <label htmlFor='hours'>Minutes</label>
                <input id="hours" value={minutes/60} placeholder='Hours' type="number" disabled/>
                <button onClick={ reset }>Reset</button>
            </div>
        </div>
    );
}

export default App;
