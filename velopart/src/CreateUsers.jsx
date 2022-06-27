import React from 'react'

const CreateUsers = ({username,email,onChange,onCreate}) => {
  return (
    <>
    <input type="text" name='username' placeholder='계정명' onChange={onChange} value={username} />
    <input type="text" name='email' placeholder='이메일' onChange={onChange} value={email} />
    <button onClick={onCreate}>등록</button>
    </>
  )
}

export default CreateUsers