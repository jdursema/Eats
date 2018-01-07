import React, { Component } from 'react';
import { checkUser } from '../../Actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Login extends Component {
  constructor(){
    super();
    this.state ={
      email: '',
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
          Password: 
        </label>
        <input 
          type='password' 
          className='password-input' 
          onChange={this.handleStateChange}
          name='password' 
          value={this.state.password}/>
        <button onClick={ (event)=>{
          event.preventDefault();
          this.props.handleLogin(this.state.email, this.state.password);
        }}>
            Login
        </button>
      </form>

    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLogin: (email, password) => dispatch(checkUser(email, password))
});
    

export default connect(null, mapDispatchToProps)(Login);


Login.propTypes = {
  handleLogin: PropTypes.func
};