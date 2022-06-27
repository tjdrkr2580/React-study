import React from 'react'


const User = ({ user }) => {
  return (
    <div>
      <b>{user.id} {user.username} </b><span>({user.email})</span>
    </div>
  )
}

const UserList = () => {
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
  return (
    <>
      {users.map(users => (
        <User user={users} key={users.id}/>
      ))}
    </>
  )
}

export default UserList