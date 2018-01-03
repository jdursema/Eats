import React, {Component} from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../Actions';
import CardConatainer from '../CardContainer/CardContainer';
import { NavLink } from 'react-router-dom';



class Home extends Component {  

  async componentDidMount() {
    //if localstorage.cards then render storage and set it in store else fetch
    try {
      this.props.handleFetchRestaurants();
    } catch (error){
      console.log(error);
    }
  }

  render () {
    return (
      <div className='home'>
        <h1>Welcome to Eats</h1>
        <h3>Find your new favorite restuaurant today!</h3>
        <NavLink to='/login'>Login</NavLink>
      </div>
      
    );
  }
  
}


const mapDispatchToProps = dispatch => ({
  handleFetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(null, mapDispatchToProps)(Home);