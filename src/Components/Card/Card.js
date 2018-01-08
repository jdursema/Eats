import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = props => {
  let keys;
  let mappedData;

  if (props.info.data){
    keys = Object.keys(props.info.data);
    mappedData = keys.map((key, index)=> {
      return <p key={index}>{key}: {props.info.data[key]}</p>;
    });
  }


  const handleFavClick = (info, user) => {
    if (props.user.uid && !props.favorited){
      props.handleAddFav(props.info, props.user);
    } else if (props.user.uid && props.favorited){
      const favoritedData = props.favorites.filter(favorite=> 
        favorite.name === info.name);
      props.handleDeleteFav(favoritedData[0], user);
    } else {
      props.history.push('/login');
    }
  };
  
  if(props.favorited){
    return (
      <div className = 'card favorite'>
        <p className='restaurant-name'>
          {props.info.name}
        </p>
        {mappedData}
        <button 
          onClick={()=> { 
            handleFavClick(props.info, props.user);
          }}>
          Unfavorite
        </button>
      </div>
    );
  } else {
    return (
      <div className = 'card'>
        <p className='restaurant-name'>
          {props.info.name}
        </p>
        {mappedData}
        <button 
          onClick={()=> { 
            handleFavClick(props.info, props.user);
          }}>
          Favorite
        </button>
      </div>
    ); 
  }
  
};

export default Card;

Card.propTypes = {
  info: PropTypes.object,
  handleAddFav: PropTypes.func,
  user: PropTypes.object,
  history: PropTypes.object,
  favorited: PropTypes.bool,
  handleDeleteFav: PropTypes.func,
  favorites: PropTypes.array
};

