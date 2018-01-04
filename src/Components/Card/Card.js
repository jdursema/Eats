import React from 'react';
import './Card.css';

const Card = ({ info, handleAddFav, user, history, favorited }) => {
  let keys
  let mappedData

  if (info.data){
    keys = Object.keys(info.data);
    console.log(keys)
    mappedData = keys.map((key, index)=> {
      return <p key={index}>{key}: {info.data[key]}</p>;
    });
  }

  const handleFavClick = (info, user) => {
    if (user.uid){
      handleAddFav(info, user)
    } else {
      history.push('/login')
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