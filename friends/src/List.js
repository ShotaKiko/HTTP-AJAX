import React from 'react'
import './List.css'


function List (props){
    function routeToFriend(ev, friend) {
        ev.preventDefault();
        props.history.push(`/friend-list/${friend.id}`);
      }
    
    // removeFriend = event =>{
    //     console.log('friend to be removed')
    //     axios
    //         .delete(`http://localhost:5000/friends/${props.friend.id}`)
    //         .then(response =>{
    //             props.updateFriends(response.data);
    //         })
    //         .catch(err => console.log(err));
    // }
    
    return(
        props.list.map(friend =>(
            <div key= {friend.id} className='friendList' 
            onClick={ev => routeToFriend(ev, friend)}>
                {/* <h2 onClick={this.removeFriend}>X</h2> */}
                <h3>Name: {friend.name}</h3> 
                <h4>Age: {friend.age}</h4>
                <p><strong>Email: </strong>{friend.email}</p>
            </div>
        ))
    )
}

export default List;