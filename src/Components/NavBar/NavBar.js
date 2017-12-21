import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return(
    <header>
      <h1>Eats!</h1>
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