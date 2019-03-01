import React from 'react'
import Friend from './Friend'

const FriendsList = props => { 
  return (
    <div className="friendsList">
       {props.friends.map(friend => (
          <Friend 
          key={friend.id} 
          deleteFriend={props.deleteFriend} 
          friend={friend} 
          /> 
        ))}
    </div>
  )
}

export default FriendsList;
