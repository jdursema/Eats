import React, { Component } from 'react';
import { fetchRecommendations } from '../../Actions';
import { connect } from 'react-redux';

class Recommendations extends Component {

  async componentDidMount(){
    this.props.handleRecommendations(this.props.favorites, this.props.location, this.props.cuisine)
  }

  render() {
    return (
      <h1>RECOMMENDATIONS</h1>
    );
  }
  
}

const mapStateToProps = state => ({
  favorites: state.favorites,
  location: state.location,
  cuisine: state.cuisine
});

const mapDipatchToProps = dispatch => ({
  handleRecommendations: (favsArray, locationObj, cuisineArray) =>
    dispatch(fetchRecommendations(favsArray, locationObj, cuisineArray))
});

export default connect (mapStateToProps, mapDipatchToProps)(Recommendations)