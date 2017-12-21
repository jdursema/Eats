import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <form>
        <label for='username-input'>Username: </label>
        <input type='text' className='username-input'/>
        <label for='password-input'>Password: </label>
        <input type='password' className='password-input'/>
      </form>
    )
  }
}

export default  Login;