/*eslint-disable max-len*/

import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';



const Home  = () => {

  return (
    <div className='home'>
      <h1>Welcome to Eats</h1>
      <h3>
        Look up resaurants and get recommendations based on places you already love. Your next favorite eatery is waiting to be discovered!
      </h3>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to= '/signup'>SignUp</NavLink>
    </div>
    
  );
}; 


export default Home;