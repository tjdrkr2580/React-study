import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
    let post = '강남 우동 맛집';
    let [logo,chlogo] = useState('React blog');
    return (
        <div className="App">
            <div className="black-nav">
                <h4>{logo}</h4>
            </div>
            <div className="list">
                <h4>글제목</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>글제목</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>글제목</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>
    );
}

export default App;
