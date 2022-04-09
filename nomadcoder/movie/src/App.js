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
        setTodo("");
        setTodos(currentArray => [
            toDo, ...currentArray
        ]);
    };
    console.log(toDos);
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
        </div>
    );
}

export default App;
