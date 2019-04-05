import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";

import axios from 'axios'
import './App.css';
import List from './List';
import Home from './Home';
import InputForm from './Components/InputForm'
import Friend from './Components/Friend'

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
        <nav>
          <div className="nav-links">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/friend-list">Come see you actually have friends</NavLink>
            <NavLink to="/input-form">Add Some More Buds</NavLink>
          </div>
        </nav>

        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/friend-list"
          render={props => (
            <List
              {...props} // this is the same as below
              //               match={props.match}
              //               history={props.history}
              //               location={props.location}
              list={this.state.friendList}
            />
          )}
        />
        <Route
          path="/friend-list/:id"
          render={props => (
            <Friend
              {...props}
              list={this.state.friendList}
              updateItems={this.updateFriends}
            />
          )}
        />
        <Route
          path="/input-form"
          render={props => (
            <InputForm {...props} updateFriends={this.updateFriends}/>
          )}
        />
      </div>
    );
    
    
    
    
      // <div className="App">
      // <Home/>
      // <h1>Friend List</h1>
      //   <List
      //     list ={this.state.friendList}
      //   />

      //   <InputForm updateFriends={this.updateFriends}/>
      // </div>
    
  }
}

export default App;
