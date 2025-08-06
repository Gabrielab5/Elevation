import React from 'react';

function Landing({ user, hottestItem }) {
  return (
    <div className="text-center p-4">
      <h2 className="text-3xl font-bold text-gray-700 mb-4">
        Welcome, {user}! 
      </h2>
      {hottestItem && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg shadow-sm">
          <p className="text-lg text-yellow-800 font-semibold mb-2">
             Hottest Item in Store:
          </p>
          <p className="text-xl font-bold text-yellow-900">
            {hottestItem.item} - ${hottestItem.price}
          </p>
        </div>
      )}
      {!hottestItem && (
        <p className="text-md text-gray-500">No hottest item found.</p>
      )}
    </div>
  );
}

export default Landing;
