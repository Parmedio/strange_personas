import React from 'react';

const Card = ({name, email, username}) => {
  return (
    <div className='tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5'>
      <img alt='ritratto' src={`https://robohash.org/${username}?set=set5`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
  
export default Card;