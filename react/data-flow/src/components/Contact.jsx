import React from 'react';

export default function Contact({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-3 bg-white text-gray-800 font-medium rounded-xl shadow-md hover:bg-gray-200 transition-colors duration-200"
    >
      {name}
    </button>
  );
}
