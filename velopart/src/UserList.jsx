import { React } from 'react'


const User = ({ user }) => {
  return (
    <div>
      <b>{user.id} {user.username} </b><span>({user.email})</span>
    </div>
  )
}


const UserList = ({users}) => {
  return (
    <>
      {users.map(users => (
        <User user={users} key={users.id}/>
      ))}
    </>
  )
}

export default UserList