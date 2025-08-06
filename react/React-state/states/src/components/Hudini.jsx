import { useState } from "react";
import React from 'react';

function Hudini(){
    const [show, setShow] = useState(true);
    const toggle = () => setShow(prevShow => !prevShow);
    return (
        <>
        <div>
        <h1>----------ex1-----------</h1>
        <p>Click the button to toggle the visibility of the text.</p>
      </div>
        <div className="hudini" style={{ visibility: show ? 'visible' : 'hidden' }}>
            {show ? "Now you see me" : "Now you don't"}
        </div>
        <button onClick={toggle} 
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105">  
            {show ? "Hide Text" : "Show Text"} 
        </button>
        </>
    );
}

export default Hudini;