import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css';

const NavBar = props => {
  return(
    <header>
      <div className='title'>
        <div className='left-nav'>
          <p>Hello, Guest!</p>
          <p>Your Location: <span>{props.location}</span></p>
        </div>
        <h1>Eats</h1>
        <div className='right-nav'>
          <NavLink to='/signup' className='nav'>SignUp</NavLink>
          <NavLink to='/login' className='nav'>Login</NavLink>
        </div>
      </div>
      <div className='nav-bar'>
        <NavLink to='/' className='nav'>Home</NavLink>
        <NavLink to='/suggestions' className='nav'>Suggestions</NavLink>
        <NavLink to='/favorites' className='nav'>Favorites</NavLink>
        <NavLink to='/recomendations' className='nav'>Recomendations</NavLink>
        <NavLink to='/location' className='nav'>Change Location</NavLink>
      </div>
    </header>
    
  );
};

const mapStateToProps = state => ({
  location: state.location
});

export default connect(mapStateToProps, null)(NavBar);