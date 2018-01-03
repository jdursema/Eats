import React from 'react';
import './Card.css';

const Card = ({ info }) => {
  let keys
  let mappedData

  if (info.data){
    keys = Object.keys(info.data);
    console.log(keys)
    mappedData = keys.map((key, index)=> {
      return <p key={index}>{key}: {info.data[key]}</p>;
    });
  }
  

  return (
    <div className = 'card'>
      <p>{info.name}</p>
      {mappedData}
    </div>
  ); 
};

export default Card;