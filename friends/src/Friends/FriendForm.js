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
    handleChanges = e => {
        e.persist()
        // const ageValue = e.target.value;
        // if (e.target.name === 'age'){
        //     ageValue = Number('age')
        // }

        let value = e.target.value;
        if (e.target.name === 'age') {
          value = Number(value);
        }
        this.setState(prevState => ({
          friend: {
              ...prevState.friend,
            [e.target.name]: e.target.value
          }
        }));
    };

    submitFriend = e =>{
        this.setState({
            name: '',
            age: '',
            email:'',
        });
        this.props.inputFriend(e, this.state.friend)
  }

  render() {
    const {name, age, email} = this.state.friend;
    return (
      <div className="allForms">
        <form className='form' 
        onSubmit={this.submitFriend}>
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
        <button 
        className='buttonAdd' 
        onClick={this.submitFriend} 
        type="submit">+</button>
      </div>
    )
  }
}

export default FriendForm
