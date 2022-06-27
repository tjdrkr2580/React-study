import './App.css';
import UserList from './UserList';
import { useRef } from 'react';

function App() {
  const users = [
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
  ]

  const nextId = useRef(4);
  const onCreate = () => {
    //나중에 구현
  nextId.current += 1;
}

  return (
    <>
    <UserList users={users} />
    </>
  );
}

export default App;
