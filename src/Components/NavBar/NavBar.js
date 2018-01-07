import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css';
import { fetchLocation } from '../../Actions';
import PropTypes from 'prop-types';

class NavBar extends Component {
  constructor () {
    super();
    this.state = {
    };
  }

  

  async componentDidMount(){
 
    try { 
      this.props.handleLocation();
    } catch (error){
      console.log(error);
    }
  }

  render(){
    return (
      <header>
        <div className='title'>
          <div className='left-nav'>
            <p>Hello, Guest!</p>
            <p>Your Location:</p>
          </div>
          <h1>Eats</h1>
          <div className='right-nav'>
            <NavLink to='/signup' className='nav'>SignUp</NavLink>
            <NavLink to='/login' className='nav'>Login</NavLink>
          </div>
        </div>
        <div className='nav-bar'>
          <NavLink to='/' className='nav'>Home</NavLink>
          <NavLink to='/suggestions' className='nav'>Places Near You</NavLink>
          <NavLink to='/favorites' className='nav'>Favorites</NavLink>
          <NavLink to='/recommendations' className='nav'>Recommendations</NavLink>
          <NavLink to='/location' className='nav'>Change Location</NavLink>
        </div>
      </header>
      
    );
  }
}

const mapStateToProps = state => ({
  location: state.location
});

const mapDispatchToProps = dispatch => ({
  handleLocation: () =>
    dispatch(fetchLocation())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);


NavBar.propTypes = {
  handleLocation: PropTypes.func,
  location: PropTypes.object
};