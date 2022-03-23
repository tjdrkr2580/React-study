import React, {useState} from 'react';
import './App.css';

function App() {
    let [title, chtitle] = useState(['강남 우동 맛집', '남자 코트 추천', '우리집 변기 과연 괜찮을까?']);
    let [number, chnumber] = useState(0);
    let changeCss = {
        color: `aqua`,
        fontSize: `35px`
    }

    function changeTitle() { 
        let newArray = [...title];
        newArray[1] = '여자'
      }
    return (
        <div className="App">
            <div className="black-nav">
                <div style={changeCss}>개발 Blog</div>
            </div>
            <button onClick={changeTitle}>버튼</button>
            <div className="list">
                <h3>{title[0]}
                    <span
                        onClick={() => {
                            chnumber(number + 1)
                        }}>❤</span>
                    {number}</h3>
                <p>2월 17일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{title[1]}</h3>
                <p>2월 18일 발행</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{title[2]}</h3>
                <p>2월 19일 발행</p>
                <hr/>
            </div>
        </div>
    );
}

export default App;
