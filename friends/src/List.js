import React from 'react'
import './List.css'

function List (props){
    return(
        props.list.map(friend =>(
            <div key= {friend.id} className='friendList'>
                <h3>Name: {friend.name}</h3>
                <h4>Age: {friend.age}</h4>
                <p><strong>Email: </strong>{friend.email}</p>
            </div>
        ))
    )
}

export default List;