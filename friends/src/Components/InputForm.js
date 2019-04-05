import React from 'react'

import axios from 'axios'


class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            newFriend :{
                name: '',
                age: "",
                email: ''
            }
        };
    }

    changeHandler = ev =>{
        ev.persist()
        let value = ev.target.value;
        this.setState(prevState => ({
            newFriend: {...prevState.newFriend, [ev.target.name]:value}
        }));
    };

    submitHandler = e =>{
        e.preventDefault();
        axios
            .post('http://localhost:5000/friends', this.state.newFriend)
            .then(response =>{
                this.props.updateFriends(response.data)
            })
            .catch(error => console.log(error))
    }

    render(){
        return(
          <form onSubmit={this.submitHandler}>
            <input
            type="text"
            name="name"
            placeholder="Friend's Name"
            value={this.state.newFriend.name}
            onChange={this.changeHandler}
            />

            <input
            type="text"
            name="age"
            placeholder="Friend's Age"
            value={this.state.newFriend.age}
            onChange={this.changeHandler}
            />

            <input
            type="text"
            name="email"
            placeholder="Friend's Email"
            value={this.state.newFriend.email}
            onChange={this.changeHandler}
            />
          </form>
        )
    }


}



export default InputForm;