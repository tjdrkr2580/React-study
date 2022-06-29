import './App.css';
import { useState } from 'react';

function App() {
  const [newItem,setNewItem] = useState("");
  const [items,setItems] = useState([]);
  const [edit,setEdit] = useState(true);
  const [mode,setMode] = useState(true);
  let editArray;

  const btnToggle = (item) => {
    setMode(!mode);
    const text = item.value;
    setNewItem(text);
    console.log(item);
    return item;
  }

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

  const onRemove = (id) => {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  const onEdit = () => {
      console.log(newItem);
  }
    return (
        <div className='App'>
            <h1>Todo List App</h1>
            <input type="text" placeholder='Add an Item..' value={newItem}
              onChange={onChange}
            />
            <button onClick={onCreate} disabled={!mode}>add</button>
            <button onClick={()=> {onEdit()}}>Edit!</button>
            <ul>
              {items.map(item => {
                return (
                  <li key={item.id}>{item.id} {item.value}
                  <button onClick={()=>{onRemove(item.id)}}>Remove</button>
                  <button onClick={()=>{btnToggle(item)}}>Edit</button>
                  </li>
                )
              })
              }
            </ul>
        </div>

    );
}

export default App;
