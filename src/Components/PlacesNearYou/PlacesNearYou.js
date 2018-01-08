import React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import { postAddFavorite, postDeleteFavorite } from '../../Actions';
import { connect } from 'react-redux';


const PlacesNearYou = props => {
 
  return (
    <div>
      <h1>Restaurants near you based on your current location</h1>
      <CardContainer
        cards = {props.cards}
        handleAddFav= {props.handleAddFav}
        handleDeleteFav = {props.handleDeleteFav}
        user = {props.user}
        history = {props.history} 
        favorites = {props.favorites}
      />
    </div>
  );
};



const mapDispatchToProps = dispatch => ({
  handleAddFav: (cardData, user) => 
    dispatch(postAddFavorite(cardData, user)),
  handleDeleteFav: (cardData, user) => 
    dispatch(postDeleteFavorite(cardData, user))
});

const mapStateToProps = state => ({
  cards: state.cards,
  user: state.user,
  favorites: state.favorites
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesNearYou);
