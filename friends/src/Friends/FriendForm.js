import React, { Component } from 'react'

class FriendForm extends Component {
constructor(props){
    super(props);
    this.state = {
        name:'',
        age: '',
        email:'',
    }
}

    submitItem = e =>{
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
            /> 
        </form> 
        <form className='form' onSubmit={this.submitFriend}>
            <input
                className='input'
                type="text"
                value={age}
                name="age"
                placeholder="Insert Friends Age"
            /> 
        </form>
        <form className='form' onSubmit={this.submitFriend}>
            <input
                className='input'
                type="text"
                value={email}
                name="email"
                placeholder="Insert Friends Email"
            /> 
        </form>
        <button className='buttonAdd' type="submit">+</button>
      </div>
    )
  }
}

export default FriendForm
