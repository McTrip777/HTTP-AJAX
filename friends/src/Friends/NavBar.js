import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/" className="formLink">Add Friend</Link>
      <Link to="/friends" className="formLink">Friend List</Link>
    </div>
  )
}

export default NavBar
