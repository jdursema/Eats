import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../Actions';
import PropTypes from 'prop-types';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: ''
    };
  }

  handleStateChange = event => {
    this.setState({[event.target.name] : event.target.value});
  }


  render() {
    return (
      <form>
        <label htmlFor='email-input'>
          Email: 
        </label>
        <input 
          type='text' 
          className='email-input' 
          onChange={this.handleStateChange}
          name='email'/>
        <label htmlFor='password-input'>
          Username: 
        </label>
        <input 
          type='text' 
          className='username-input' 
          onChange={this.handleStateChange}
          name='username' 
          value={this.state.username}/>
        <label htmlFor='password-input'>
          Password: 
        </label>
        <input 
          type='password' 
          className='password-input' 
          onChange={this.handleStateChange}
          name='password' 
          value={this.state.password}/>
        <button
          onClick={(event)=>{
            this.props.handleSignUp(this.state.email,
              this.state.username,
              this.state.password);
          }}>
            Register
        </button>
        <p>{this.props.error}</p>
      </form>

    );
  }
}

const mapStateToProps = state => ({
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  handleSignUp: (email, username, password) => 
    dispatch(addUser(email, username, password))
});

export default  connect(mapStateToProps, mapDispatchToProps)(SignUp);

SignUp.propTypes = {
  handleSignUp: PropTypes.func,
  error: PropTypes.string
};