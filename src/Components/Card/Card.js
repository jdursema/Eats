import React from 'react';
import './Card.css';

const Card = ({ info, handleAddFav, user, history, favorited, handleDeleteFav, favorites }) => {
  let keys;
  let mappedData;

  if (info.data){
    keys = Object.keys(info.data);
    console.log(keys)
    mappedData = keys.map((key, index)=> {
      return <p key={index}>{key}: {info.data[key]}</p>;
    });
  }

  console.log(favorited)

  const handleFavClick = (info, user) => {
    if (user.uid && !favorited){
      handleAddFav(info, user);
    } else if (user.uid && favorited){
      const favoritedData = favorites.filter(favorite=> favorite.name === info.name)
      handleDeleteFav(favoritedData[0], user);
    } else {
      history.push('/login');
    }
  }
  

  return (
    <div className = 'card'>
      <p className='restaurant-name'>{info.name}</p>
      {mappedData}
      <button onClick={()=> { handleFavClick(info, user)}}>
        Fav
      </button>
    </div>
  ); 
};

export default Card;