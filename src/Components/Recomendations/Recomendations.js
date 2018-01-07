import React, { Component } from 'react';
import { fetchRecommendations } from '../../Actions';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { postAddFavorite, postDeleteFavorite } from '../../Actions';

class Recommendations extends Component {

  async componentDidMount(){
    this.props.handleRecommendations(this.props.favorites, this.props.location, this.props.cuisine)
  }

  mappedCards (){
    const cards = this.props.recommendations.map((card)=> {
      const favRestaurant = this.props.favorites.find(favRestaurant => 
        favRestaurant.name === card.name);
  
      const favorited = favRestaurant ? true : false;

      return <Card 
        info= {card}
        handleAddFav = {this.props.handleAddFav}
        handleDeleteFav = {this.props.handleDeleteFav}
        user = {this.props.user}
        history = {this.props.history}
        favorited = {favorited}
        favorites = {this.props.favorites}/>;
    });

    return cards;
  }

  render() {
    return (
      <div>
        {this.mappedCards()}
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

export default connect (mapStateToProps, mapDipatchToProps)(Recommendations)