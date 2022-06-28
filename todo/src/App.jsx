import './App.css';
import { useState } from 'react';

function App() {
  const [newItem,setNewItem] = useState("");
  const [items,setItems] = useState([]);

  const onChange = (e) => {
    setNewItem(e.target.value);
  }
  const onCreate = () => {
    if(newItem === ""){
      alert("Enter your Item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems(oldlist => [...oldlist,item]);
    setNewItem("");
  }
    return (
        <div className='App'>
            <h1>Todo List App</h1>
            <input type="text" placeholder='Add an Item..' value={newItem}
              onChange={onChange}
            />
            <button onClick={onCreate}>Add</button>
            <ul>
              {items.map(item => {
                return (
                  <li key={item.id}>{item.id} {item.value}</li>
                )
              })
              }
            </ul>
        </div>

    );
}

export default App;
