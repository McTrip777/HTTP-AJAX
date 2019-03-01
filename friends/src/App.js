import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './Friends/FriendsList';
import FriendForm from './Friends/FriendForm';
import NavBar from './Friends/NavBar';
import {  Route } from 'react-router-dom';

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
      .then(res => {
        this.setState(() => ({ friends: res.data }));
      })
      .catch(err => {
        console.error('Server Error', err);
      });
  }

  inputFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState ({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteFriend = (e, friendId) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${friendId}`)
      .then(res => {
        this.setState ({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
          <NavBar />
        <div className="formSection">
          <Route exact path='/' render={props => 
          <FriendForm 
          inputFriend={this.inputFriend} 
          {...props}/>}
          />
        </div>
          <Route path='/friends' render={props => 
          <FriendsList 
          deleteFriend ={this.deleteFriend} 
          friends={this.state.friends} 
          {...props}/>}
          />
      </div>
    );
  }
}

export default App;
