import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const Form = ({input, todos, setInput, setTodos}) => {
    const onInputChange = (e) => {
        setInput(e.target.value);
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos,{
            id : uuidv4(),
            title: input,
            completed: false,
        }]);
        setInput("");
    }
    return (
        <form className='form-wrapper' onSubmit={onFormSubmit}>
            <input type="text" placeholder='오늘 당신은..' className='todo_input' value={input} required onChange={onInputChange}/>
            <button className="todo_btn" type='submit'>추가</button>
        </form>
    )
}

export default Form