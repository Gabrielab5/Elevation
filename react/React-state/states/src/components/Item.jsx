import React from 'react';

function Item({ item, price }) {
  return (
    <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100 text-center transform transition-transform duration-200 hover:scale-105">
      <p className="text-xl font-semibold text-gray-800 mb-2">{item}</p>
      <p className="text-lg text-green-700 font-bold">${price}</p>
    </div>
  );
}

export default Item;
