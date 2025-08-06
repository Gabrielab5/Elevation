import React from 'react';
import Item from './Item';

function Home({ store}){
    return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {store.map(product => (
          <Item key={product.id} item={product.item} price={product.price} />
        ))}
      </div>
      {store.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No items in the store.</p>
      )}
    </div>
    );
}

export default Home;