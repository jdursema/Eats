import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

import PropTypes from 'prop-types';



const CardContainer = props => {
  const mappedCards = props.cards.map((card)=>{
    if (card) {
      const favRestaurant = props.favorites.find(favRestaurant => 
        favRestaurant.name === card.name);

      const favorited = favRestaurant ? true : false;
      
      if (props.cards[0]){
        return <Card 
          info= {card}
          handleAddFav = {props.handleAddFav}
          handleDeleteFav = {props.handleDeleteFav}
          user = {props.user}
          history = {props.history}
          favorited = {favorited}
          favorites = {props.favorites}
        />;
      } else {
        return (
          <div className='loading'>
          </div>
        );
      }
      
    }
  });


  return (
    <div className='card-container'>
      {mappedCards}
    </div>
    
  );
};



export default CardContainer;

CardContainer.propTypes = {
  cards: PropTypes.array,
  favorites: PropTypes.array
};