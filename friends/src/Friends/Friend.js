import React from 'react'

const Friend = props => {
const { name, age, email, id } = props.friend;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Friend;
