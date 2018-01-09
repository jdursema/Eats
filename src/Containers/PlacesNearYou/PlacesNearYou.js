import React from 'react';
import CardContainer from '../../Components/CardContainer/CardContainer';
import { postAddFavorite, postDeleteFavorite } from '../../Actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './PlacesNearYou.css'


const PlacesNearYou = props => {
 
  return (
    <div className='places-near-you'>
      <h1>Find a restuarant right around the corner...</h1>
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


PlacesNearYou.propTypes = {
  cards: PropTypes.array,
  favorites: PropTypes.array,
  handleAddFav: PropTypes.func,
  handleDeleteFav: PropTypes.func,
  user: PropTypes.object,
  history: PropTypes.array
};