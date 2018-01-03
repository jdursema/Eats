import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card'
import './CardContainer.css';
import { postAddFavorite } from '../../Actions';

const CardContainer = props => {
  const mappedCards = props.cards.map((card)=>{
    if (card) {
      return <Card 
        info= {card}
        handleAddFav = {props.handleAddFav}
        user = {props.user}
        history = {props.history}
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
    dispatch(postAddFavorite(cardData, user))
});

const mapStateToProps = state => ({
  cards: state.cards,
  user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);