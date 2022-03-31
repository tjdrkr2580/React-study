import React, {useState} from 'react';

import './App.css';

function App() {
    const [amount, setAmount] = useState("");
    const [flipped, setFlipped] = useState(false);
    const onChange = (event) => {
        setAmount(event.target.value);
    }
    const reset = () => setAmount(0);
    const onFilp = () => {reset(); setFlipped((current) => !current)};
    return (
        <div className="App">
            <h1 className="hi">Super Converter</h1>
            <div>
                <label htmlFor='amount'>Second</label>
                <input
                    value={flipped ? amount*60 : amount }
                    id="amount"
                    placeholder='amount'
                    type="number"
                    onChange={onChange}
                    disabled={flipped}/>
                <h4>You want to convert {amount}</h4>
            </div>
            <div>
                <label htmlFor='hours'>hour</label>
                <input
                    id="hours"
                    value={flipped ? amount : amount / 60}
                    placeholder='Hours'
                    type="number"
                    disabled={!flipped}/>
                <button onClick={reset}>Reset</button>
                <button onClick={onFilp}>flip</button>
            </div>
        </div>
    );
}

export default App;
