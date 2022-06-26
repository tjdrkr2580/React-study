import {React, useState , useRef} from 'react';

const InputSample = () => {

    const [inputs, setInputs] = useState({name: '', nickname: ''});

    const {name, nickname} = inputs;
    const nameInput = useRef();

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }
    const onReset = (e) => {
        setInputs({name: '', nickname: ''});
        nameInput.current.focus();

    }
    return (
        <div>
            <input
                name="name"
                type="text"
                placeholder='이름'
                onChange={onChange}
                ref={nameInput}
                value={name}/>
            <input
                name="nickname"
                type="text"
                placeholder='닉네임'
                onChange={onChange}
                value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :</b>
                {name}
                ({nickname})
            </div>
        </div>
    )
}

export default InputSample