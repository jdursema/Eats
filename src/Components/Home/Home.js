import React, {Component} from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../Actions';


class Home extends Component {  
  constructor(){
    super();
    this.state = {
    };
  }

  async componentDidMount() {
    try {
      this.props.handleFetchRestaurants();
    } catch (error){
      console.log(error);
    }
  }

  render () {
    return(
      <div className='home'>
        <p>Search for a restaurants by name or cusine near you!</p>
        <input type='text'/>
        <p>Restaurants</p>
      </div>
      
    )
  }
  
}

const mapDispatchToProps = dispatch => ({
  handleFetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(null, mapDispatchToProps)(Home);