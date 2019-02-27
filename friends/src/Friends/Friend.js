import React from 'react'

const Friend = props => {
const { name, age, email, id } = props.friend;
  return (
    <div className="friend">
      <p>Friend #{id}</p>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default Friend;
