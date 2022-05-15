import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
    let post = '강남 우동 맛집';
    let [store,chstore] = useState(['남자코트 추천','인천 김치찌개','청담동 라면']);
    let [logo,chlogo] = useState(['React blog']);
    let [count,changeCount] = useState(0);
    return (
        <div className="App">
            <div className="black-nav">
                <h4>{logo}</h4>
            </div>
            <div className="list">
                <h4>{store[0]} <span onClick={()=>{changeCount(count+1)}}> 👍 </span>{count}</h4>
                <button onClick={()=>{chstore(['여자코트 추천','인천 김치찌개','청담동 라면'])}}>버튼</button>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{store[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{store[2]}</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>
    );
}

export default App;
