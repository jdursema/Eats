import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super()
    this.state ={
      username: '',
      password: ''
    }
  }

  handleStateChange = event => {
    this.setState({[event.target.name] : event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const userRef = firebase.database().ref('user');
    const user = {
      favorites: [],
      userName: this.state.userName,
    }
  }


  render() {
    return (
      <form>
        <label for='username-input'>Username: </label>
        <input type='text' className='username-input' onChange={this.handleStateChange} name='username'/>
        <label for='password-input'>Password: </label>
        <input type='password' className='password-input' onChange={this.handleStateChange} name='password' value={this.state.password}/>
        <button>Create Users</button>
      </form>
    )
  }
}

export default  Login;