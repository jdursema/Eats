import React, {Component} from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../Actions';
import CardConatainer from '../CardContainer/CardContainer';
import { NavLink } from 'react-router-dom';



class Home extends Component {  
  render () {
    return (
      <div className='home'>
        <h1>Welcome to Eats</h1>
        <h3>Look up resaurants and get recommendations based on places you already love. Your next favorite eatery is waiting to be discovered!</h3>
        <NavLink to='/login'>Login</NavLink>
      </div>
      
    );
  }
  
}


const mapDispatchToProps = dispatch => ({
  handleFetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(null, mapDispatchToProps)(Home);