import React, { Component } from 'react';
import { checkUser } from '../../Actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Login.css';


export class Login extends Component {
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
      <form className = 'login-form' >
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
          if (this.props.user.email){
            this.props.history.push('/suggestions'); 
}
        }}>
            Login
        </button>
        <p className='error'>{this.props.error}</p>
      </form>

    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (email, password) => dispatch(checkUser(email, password))
});
    

export default connect(mapStateToProps, mapDispatchToProps)(Login);


Login.propTypes = {
  handleLogin: PropTypes.func,
  error: PropTypes.string
};