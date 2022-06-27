import './App.css';
import UserList from './UserList';
import { useRef } from 'react';
import CreateUsers from './CreateUsers';
import { useState } from 'react';

function App() {
  const [inputs,setInputs] = useState({
    username: '',
    email: '',
  });
  const {username , email} = inputs;
  const onChange = e => {
    const {name , value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  };
  const [users,setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {

    const user = {
      id: nextId.current,
      username,
      email
    }

    setUsers(users.concat(user));
    
    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;

    console.log(users,user);
}

  return (
    <>
    <CreateUsers username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList users={users} />
    </>
  );
}

export default App;
