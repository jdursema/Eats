import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card'
import './CardContainer.css';
import { postAddFavorite, postDeleteFavorite } from '../../Actions';


const CardContainer = props => {
  const mappedCards = props.cards.map((card)=>{
    if (card) {
      console.log(props.favorites)
      
      const favRestaurant = props.favorites.find(favRestaurant => favRestaurant.name === card.name)

      const favorited = favRestaurant ? true : false
      
      return <Card 
        info= {card}
        handleAddFav = {props.handleAddFav}
        handleDeleteFav = {props.handleDeleteFav}
        user = {props.user}
        history = {props.history}
        favorited = {favorited}
        favorites = {props.favorites}
      />;
    }
  });


  return (
    <div className='card-container'>
      {mappedCards}
    </div>
    
  );
};

const mapDispatchToProps = dispatch => ({
  handleAddFav: (cardData, user) => 
    dispatch(postAddFavorite(cardData, user)),
  handleDeleteFav: (cardData, user) => dispatch(postDeleteFavorite(cardData, user))
});

const mapStateToProps = state => ({
  cards: state.cards,
  user: state.user,
  favorites: state.favorites
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);