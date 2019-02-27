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

  render() {
    return (
      <div className="App">
        <div className="formSection">
          <h2>Add a Friend Here!</h2>
          <FriendForm />
        </div>
        <FriendsList friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
