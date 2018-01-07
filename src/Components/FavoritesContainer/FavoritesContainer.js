import React from 'react';
import { connect } from 'react-redux';
import { postAddFavorite, postDeleteFavorite } from '../../Actions';
import Card from '../Card/Card';

const FavoritesContainer = props => {
  const mappedFavorites = props.favorites.map((card)=>{
    if (card) {      

      return <Card 
        info= {card}
        handleAddFav = {props.handleAddFav}
        user = {props.user}
        history = {props.history}
        favorited = {true}
        handleDeleteFav = {props.handleDeleteFav}
        favorites = {props.favorites}
      />;
    }
  });
  
  return (
    <div>
      {mappedFavorites}
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
  favorites: state.favorites,
  user: state.user
})

export default connect (mapStateToProps, mapDispatchToProps)(FavoritesContainer);



