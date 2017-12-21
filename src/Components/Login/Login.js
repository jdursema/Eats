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


  render() {
    return (
      <form>
        <label htmlFor='username-input'>
          Username: 
        </label>
        <input 
          type='text' 
          className='username-input' 
          onChange={this.handleStateChange}
          name='username'/>
        <label htmlFor='password-input'>
          Password: 
        </label>
        <input 
          type='password' 
          className='password-input' 
          onChange={this.handleStateChange}
          name='password' 
          value={this.state.password}/>
        <button>Create Users</button>
      </form>

    )
  }
}

export default  Login;