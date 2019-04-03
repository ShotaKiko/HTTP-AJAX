import React, { Component } from 'react';


import axios from 'axios'
import './App.css';
import List from './List';
import Home from './Home';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friendList: []
    }
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
        {/* {console.log(this.state.friendList)} */}
      </div>
    );
  }
}

export default App;
