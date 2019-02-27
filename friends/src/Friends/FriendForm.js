import React, { Component } from 'react'

class FriendForm extends Component {
constructor(props){
    super(props);
    this.state = {
        
    }
}

  render() {
    return (
      <div className="allForms">
        <form className='form'>
            <input
                className='input'
                type="text"
                // value={}
                name=""
                placeholder="Insert Friends Name"
            /> 
        </form> 
        <form className='form'>
            <input
                className='input'
                type="text"
                // value={}
                name=""
                placeholder="Insert Friends Age"
            /> 
        </form>
        <form className='form'>
            <input
                className='input'
                type="text"
                // value={}
                name=""
                placeholder="Insert Friends Email"
            /> 
        </form>
        <button className='buttonAdd' type="submit">+</button>
      </div>
    )
  }
}

export default FriendForm
