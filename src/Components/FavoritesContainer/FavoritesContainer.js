import React from 'react';
import { connect } from 'react-redux';
import { postAddFavorite, postDeleteFavorite } from '../../Actions';
import PropTypes from 'prop-types';
import CardContainer from '../CardContainer/CardContainer';
import './FavoritesContainer.css'


const FavoritesContainer = props => {
  return (
    <div className='favorites'>
      <h1>Places you already love...</h1>
      <CardContainer
        cards = {props.favorites}
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
  favorites: state.favorites,
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);

FavoritesContainer.propTypes = {
  cards: PropTypes.array,
  favorites: PropTypes.array,
  handleAddFav: PropTypes.func,
  handleDeleteFav: PropTypes.func,
  user: PropTypes.object,
  history: PropTypes.array
};