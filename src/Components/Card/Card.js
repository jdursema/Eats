import React from 'react';

const Card = ({ info }) => {
  const keys = Object.keys(info.data)
  const mappedData = keys.map((key)=> {
    return <p key={index}>{ key}: {info.data[key]}</p>;
  });

  return (
    <div>
      <p>{info.name}</p>
      {mappedData}
    </div>
  ); 
};

export default Card;