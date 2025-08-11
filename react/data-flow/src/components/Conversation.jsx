import React from 'react';

function Conversation({ convo, senderName, onBack }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="back p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-xl font-bold text-gray-700">{senderName}</h2>
        <div className="w-5"></div> 
      </div>

      <div className="flex flex-col space-y-4 flex-grow overflow-y-auto pr-2">
        {convo.map((message, index) => {
          const displayName = message.sender === "self" ? "Me" : senderName;
          
          return (
            <div key={index} className="flex flex-col">
              <span className="sender text-xs font-semibold text-gray-400">{displayName}:</span>
              <div className={`p-3 rounded-lg shadow-sm max-w-[85%] ${message.sender === "self" ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-800 self-start'}`}>
                {message.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Conversation