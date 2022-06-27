import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';
import { useState } from 'react';
import Todoslist from './Components/Todoslist';

function App() {
  const [input,setInput] = useState("")
  const [todos,setTodos] = useState([]);
  return (
    <div className='container'>
      <Header/>
      <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
      <Todoslist/>
    </div>
  );
}

export default App;
