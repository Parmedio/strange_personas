import React from 'react';
import Card from './Card'; 

const CardList = ({personas}) => {
  return (
    <div>
      {
        personas.map((element, i) => {
          return (
            <Card
              key={personas[i].id}
              username={personas[i].username}
              name={personas[i].name}
              email={personas[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;