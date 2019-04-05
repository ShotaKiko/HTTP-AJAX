import React from 'react'
import axios from 'axios'

function Friend(props) {
    const friend = props.list.find(
      thing => `${thing.id}` === props.match.params.id
    );
  
    if (!props.list.length || !friend) {
      return <h2>Loading item data...</h2>;
    }
  
    const removeFriend = event => {
      console.log("Friend is being deleted");
      axios
        .delete(`http://localhost:5000/friends/${friend.id}`)
        .then(response => {
          props.updateFriends(response.data);
          props.history.push("/friend-list");
        })
        .catch(err => console.log(err));
    };
  
    return (
      <div>
        <span onClick={removeFriend}>X</span>
        <h3>Name: {friend.name}</h3> 
        <h4>Age: {friend.age}</h4>
        <p><strong>Email: </strong>{friend.email}</p>
      </div>
    );
  }
  
export default Friend;