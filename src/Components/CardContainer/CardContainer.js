import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';



const CardContainer = props => {

  const mappedCards = props.cards.map((card)=>{
    return <Card 
      info= {card}
    />
  })

  return (
    <div>
      {mappedCards}
    </div>
    
  )
}

const mapStateToProps = state => ({
  cards: state.cards
})

export default connect(mapStateToProps, null)(CardContainer);