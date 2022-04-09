import React, {useState} from 'react';

function App() {
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);
    const onChange = (event) => {
        setTodo(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setTodos(currentArray => [
            ...currentArray , toDo
        ]);
        setTodo("");
    };
    return (
        <div>
            <h1>My Todo Count {toDos.length}</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={toDo}
                    onChange={onChange}
                    type="text"
                    placeholder='Write your to do'/>
                <button>Add to do</button>
            </form>
            <hr/>
            <ul>
                {toDos.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

export default App;
