import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card'
import './CardContainer.css';

const CardContainer = props => {
  const mappedCards = props.cards.map((card)=>{
    if (card) {
      return <Card 
        info= {card}
      />;
    }
  });

  return (
    <div className='card-container'>
      {mappedCards}
    </div>
    
  );
};

const mapStateToProps = state => ({
  cards: state.cards
})

export default connect(mapStateToProps, null)(CardContainer);