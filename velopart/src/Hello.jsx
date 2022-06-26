import React from 'react'

const Hello = ({name , isSpecial}) => {
  return (
    <div>{isSpecial ? <b>*</b> : null} 안농 {name}</div>
  )
}

Hello.defaultProps = {
    name : '이름없음'
}

export default Hello