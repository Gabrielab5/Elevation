import React from 'react';

export default function Contact({ name, onSelect }) {
  return (
    <button
      onClick={() => onSelect(name)}
      className="px-4 py-3 w-full bg-white text-gray-800 font-medium rounded-xl shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
    >
      {name}
    </button>
  );
}
