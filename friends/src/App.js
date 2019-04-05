import React, { Component } from 'react';


import axios from 'axios'
import './App.css';
import List from './List';
import Home from './Home';
import InputForm from './Components/InputForm'

class App extends Component {
  constructor(){
    super();
    this.state = {
      friendList: []
    }
  }
  
  updateFriends = newFriend => {
    this.setState({friendList: newFriend})
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(response =>{
      this.setState({friendList: response.data})
    })
    .catch(err =>console.log('error', err))
  }

  
  render() {
    return (
      <div className="App">
      <Home/>
      <h1>Friend List</h1>
        <List
          list ={this.state.friendList}
        />

        <InputForm updateFriends={this.updateFriends}/>
      </div>
    );
  }
}

export default App;
