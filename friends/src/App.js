import React, { Component } from 'react';


import axios from 'axios'
import './App.css';

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
      here:
        
       
      </div>
    );
  }
}

export default App;
