import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './Friends/FriendsList';
import FriendForm from './Friends/FriendForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(err => {
        console.error('Server Error', err);
      });
  }

  newFriend = (ev,name,age,email) => {
    ev.preventDefault();
    // console.log(tasking.target);
    const newFriend = {
      name: name,
      age: age,
      email:email,
      };
    this.setState({
      friends: [...this.state.friends, newFriend],
    });
  };

  render() {
    const {name, age, email} = this.state
    return (
      <div className="App">
        <div className="formSection">
          <h2>Add a Friend Here!</h2>
          <FriendForm 
          newFriend={this.newFriend}
          name={name}
          age={age}
          email={email}
          />
        </div>
        <FriendsList friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
