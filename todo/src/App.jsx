import './App.css';
import { useState } from 'react';

function App() {
  const [newItem,setNewItem] = useState("");
  const onChange = (e) => {
    setNewItem(e.target.value);
  }
  const onSubmit = () => {
    
  }
    return (
        <div className='App'>
            <h1>Todo List App</h1>
            <input type="text" placeholder='Add an Item..' value={newItem}
              onChange={onChange}
            />
            <button onClick={onSubmit}>Add</button>
        </div>

    );
}

export default App;
