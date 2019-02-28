import React, { Component } from 'react'

class FriendForm extends Component {
constructor(props){
    super(props);
    this.state = {
        friend:{
            name:'',
            age: '',
            email:'',
    }}
}
    handleChanges = e =>{
        this.setState({
          friend: {
              ...this.state.friend,
            [e.target.name]: e.target.value
          }
        });
    };
    inputFriend = e => {
        e.preventDefault();
        this.props.inputFriend(this.state.friend)
    }
    submitFriend = e =>{
        this.setState({
            name: '',
            age: '',
            email:'',
        });
        const {name, age, email} = this.state;
        this.props.newFriend(e, name, age, email)
  }

  render() {
    const {name, age, email} = this.state;
    return (
      <div className="allForms">
        <form className='form' onSubmit={this.submitFriend}>
            <input
                className='input'
                type="text"
                value={name}
                name="name"
                placeholder="Insert Friends Name"
                onChange={this.handleChanges}
            /> 
        
            <input
                className='input'
                type="number"
                value={age}
                name="age"
                placeholder="Insert Friends Age"
                onChange={this.handleChanges}
            /> 
        
            <input
                className='input'
                type="text"
                value={email}
                name="email"
                placeholder="Insert Friends Email"
                onChange={this.handleChanges}
            /> 
        </form>
        <button className='buttonAdd' onClick={this.submitFriend} type="submit">+</button>
      </div>
    )
  }
}

export default FriendForm
