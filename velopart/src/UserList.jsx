import { React } from 'react'


const User = ({ user , onRemove }) => {
  return (
    <div>
      <b>{user.id} {user.username} </b><span>({user.email})</span>
      <button onClick={()=> {onRemove(user.id)}}>삭제</button>
    </div>
  )
}


const UserList = ({users , onRemove}) => {
  return (
    <>
      {users.map(users => (
        <User user={users} key={users.id} onRemove={onRemove}/>
      ))}
    </>
  )
}

export default UserList