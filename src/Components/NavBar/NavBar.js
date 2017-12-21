import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = props => {
  return(
    <header>
      <h1>Eats!</h1>
        <p>Hello, Guest!</p>
        <p>Your Location: <span>{props.location}</span></p>
        <NavLink to='/login' className='nav'>Login/SignUp</NavLink>
      <div className='nav-bar'>
        <NavLink to='/' className='nav'>Home</NavLink>
        <NavLink to='/favorites' className='nav'>Favorites</NavLink>
        <NavLink to='/recomendations' className='nav'>Recomendations</NavLink>
        <NavLink to='/location' className='nav'>Change Location</NavLink>
      </div>
    </header>
    
  )
}

const mapStateToProps = state => ({
  location: state.location
})

export default connect(mapStateToProps, null)(NavBar);