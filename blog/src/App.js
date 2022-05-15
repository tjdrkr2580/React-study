import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
    let [글제목, 글제목변경] = useState(['강자코트 추천', '아천 김치찌개', '나담동 라면']);
    let [logo, chlogo] = useState(['React blog']);
    let [count, changeCount] = useState(0);
    return (
        <div className="App">
            <div className="black-nav">
                <h4>{logo}</h4>
            </div>

            <button
                onClick={() => {
                    let copy = [...글제목];
                    copy.sort();
                    글제목변경(copy);
                }}>가나다순</button>
            <div className="list">
                <h4>{글제목[0]}
                    <span
                        onClick={() => {
                            changeCount(count + 1)
                        }}>
                        👍
                    </span>{count}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{글제목[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{글제목[2]}</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>
    );
}

export default App;
