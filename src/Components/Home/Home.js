import React, {Component} from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../Actions';
import CardConatainer from '../CardContainer/CardContainer';


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
        <p>Search for a restaurants by name or cusine near you!</p>
        <input type='text'/>
        <p>Restaurants</p>
        <CardConatainer/>
      </div>
      
    );
  }
  
}


const mapDispatchToProps = dispatch => ({
  handleFetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(null, mapDispatchToProps)(Home);