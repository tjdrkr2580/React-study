import React, {useState} from 'react';

import './App.css';

function MinutesToHours() {
    const [amount, setAmount] = useState("");
    const [flipped, setFlipped] = useState(false);
    const onChange = (event) => {
        setAmount(event.target.value);
    }
    const reset = () => setAmount(0);
    const onFilp = () => {
        reset();
        setFlipped((current) => !current)
    };
    return (
        <div className="App">
            <div>
                <label htmlFor='amount'>Second</label>
                <input
                    value={flipped
                        ? amount * 60
                        : amount}
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
                    value={flipped
                        ? amount
                        : amount / 60}
                    placeholder='Hours'
                    type="number"
                    disabled={!flipped}/>
                <button onClick={reset}>Reset</button>
                <button onClick={onFilp}>{
                        flipped
                            ? "turn back"
                            : "flip"
                    }</button>
            </div>
        </div>
    );
}

function KmToMiles() {
    const [amount,setAmount] = useState(0);
    const [flip,setFlip] = useState(false);
    const onFilp = () => {
        console.log(flip);
        setFlip((current) => !current);
    }
    const reset = () => setAmount(0);

    return (
        <div className="app">
            <h3>KM 2 Mile</h3>
            <p>
                <label htmlFor='km'>Km :
                </label><input id='km' type="number" disabled={flip}/></p>
            <h4>You want to convert</h4>
            <p>
                <label htmlFor='km'>Mile:
                </label><input id='mile' type="number" disabled={!flip}/>
                <button>reset</button>
                <button onClick={onFilp}>flip</button>
            </p>
        </div>
    )
}

function App() {
    const [index, setIndex] = useState("xx");
    const onSelect = (event) => {
        setIndex(event.target.value);
    }
    return (
        <div className="App">
            <h1 className="hi">Super Converter</h1>
            <select value={index} onChange={onSelect}>
                <option value="xx">Select your units</option>
                <option value="0">MinutesToHours</option>
                <option value="1">Km & Miles</option>
            </select>
            {
                index === "xx"
                    ? "Please Select you units"
                    : null
            }
            {
                index === "0"
                    ? <MinutesToHours/>
                    : null
            }
            {
                index === "1"
                    ? <KmToMiles/>
                    : null
            }
        </div>
    );
}

export default App;
