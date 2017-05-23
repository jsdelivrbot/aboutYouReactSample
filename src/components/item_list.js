import React from 'react';

const ItemList = ({ items }) => {
  console.log(items);
  const shoppableItems = items.map(item => {
    return(
      <li>{ item }</li>
    );
})
  return (
    <div />
  )
}

export default ItemList;
