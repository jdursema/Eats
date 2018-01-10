/*eslint-disable max-len*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardContainer from '../../Components/CardContainer/CardContainer';
import { postAddFavorite, postDeleteFavorite, fetchRecommendations } from '../../Actions';
import PropTypes from 'prop-types';
import './Recommendations.css'

class Recommendations extends Component {

  async componentDidMount(){
    this.props.handleRecommendations(this.props.favorites, this.props.location, this.props.cuisine);
  }
  render(){
    return (
      <div className='recommendations'>
        <h1>Places you just MIGHT love...</h1>
        <CardContainer
          cards = {this.props.recommendations}
          handleAddFav= {this.props.handleAddFav}
          handleDeleteFav = {this.props.handleDeleteFav}
          user = {this.props.user}
          history = {this.props.history} 
          favorites = {this.props.favorites}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
  location: state.location,
  cuisine: state.cuisine,
  recommendations: state.recommendations,
  user: state.user
});

const mapDipatchToProps = dispatch => ({
  handleRecommendations: (favsArray, locationObj, cuisineArray) =>
    dispatch(fetchRecommendations(favsArray, locationObj, cuisineArray)),
  handleAddFav: (cardData, user) => 
    dispatch(postAddFavorite(cardData, user)),
  handleDeleteFav: (cardData, user) => 
    dispatch(postDeleteFavorite(cardData, user))
});

export default connect(mapStateToProps, mapDipatchToProps)(Recommendations);

Recommendations.propTypes = {
  recommendations: PropTypes.array,
  favorites: PropTypes.array,
  handleAddFav: PropTypes.func,
  handleDeleteFav: PropTypes.func,
  user: PropTypes.object,
  history: PropTypes.array,
  handleRecommendations: PropTypes.func,
  cuisine: PropTypes.array,
  location: PropTypes.object
};