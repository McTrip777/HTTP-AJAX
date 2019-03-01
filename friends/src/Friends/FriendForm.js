import React, { Component } from 'react'

class FriendForm extends Component {
constructor(props){
    super(props);
    this.state = {
        friend:{ name:'', age: '', email:'' }}
}
    handleChanges = e => {
        e.persist()
        this.setState(prevState => ({
          friend: {
              ...prevState.friend,
            [e.target.name]: e.target.value
          }
        }));
    };

    submitFriend = e => {
    this.props.inputFriend(e, this.state.friend)
        this.setState({ friend: {name: '', age: '', email:'' }});
  }

  render() {
    const {name, age, email} = this.state.friend;
    return (
      <div className="allForms">
      <h1>Add a Friend Here!</h1>
        <form className='form' 
        onSubmit={this.submitFriend}>
        <div className='formAlign'>
            <h2>Name:</h2>
            <input
                className='input'
                type="text"
                value={name}
                name="name"
                placeholder="Insert Friends Name"
                onChange={this.handleChanges}
            /> 
        </div>
        <div className='formAlign'>
            <h2>Age:</h2>
            <input
                className='input'
                type="number"
                value={age}
                name="age"
                placeholder="Insert Friends Age"
                onChange={this.handleChanges}
            />
        </div> 
        <div className='formAlign'>
            <h2>Email:</h2>
            <input
                className='input'
                type="text"
                value={email}
                name="email"
                placeholder="Insert Friends Email"
                onChange={this.handleChanges}
            />
        </div> 
        </form>
        <button 
        className='buttonAdd' 
        onClick={this.submitFriend} 
        type="submit">+</button>
      </div>
    )
  }
}

export default FriendForm
