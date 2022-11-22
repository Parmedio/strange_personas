import React from 'react';

const SearchBox = ({ filterFor }) => {
  return (
    <div>
      <input 
        className='bg-light-blue b--green bw2 br4 pa2 ma3'
        type='search'
        placeholder='🔎 search someone'
        onChange={filterFor}
        />
    </div>
  );
}

export default SearchBox;