import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{
      overflowY: 'scroll',
      height: 'calc(100vh - 196px)'
      }}>
      {props.children}
    </div>
  );
};
  
export default Scroll;