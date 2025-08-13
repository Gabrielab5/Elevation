
import React from 'react';
import './Item.css';

const Item = ({ name, price }) => {
  return (
    <div className="item-card">
      <div className="item-details">
        <h3 className="item-name">{name}</h3>
        <p className="item-price">${price}</p>
      </div>
    </div>
  );
};

export default Item;