import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return(
    <header>
      <h1>Eats!</h1>
        <p>Hello, Guest!</p>
        <p>Your Location: <span>Denver, CO</span></p>
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

export default NavBar;