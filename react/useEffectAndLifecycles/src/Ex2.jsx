import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ show, onClose, title, body }) => {
  if (!show) {
    return null;
  }
  return createPortal(
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-lg w-full transform transition-all duration-300 scale-95 hover:scale-100">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-gray-700 leading-relaxed">{body}</p>
      </div>
    </div>,
    document.body
  );
};

export default function Ex2() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState({ show: false, title: '', body: '' });
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 


  const openModal = (title, body) => {
    setModalData({ show: true, title, body });
  };

  const closeModal = () => {
    setModalData({ show: false, title: '', body: '' });
  };

  // Render different states based on data fetching
  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl text-white bg-gray-900">Loading posts...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-xl text-red-500 bg-gray-900">Error: {error}</div>;
  }
      
  const breakpoint = 768;
  const gridClass = screenWidth > breakpoint ? 'grid-cols-4' : 'grid-cols-1';

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-10 font-sans">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-blue-400">
        API Posts
      </h1>
      <div className={`grid ${gridClass} gap-6`}>
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col justify-between transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => openModal(post.title, post.body)}
          >
            <h2 className="text-xl font-bold mb-3 text-blue-300 capitalize">
              {post.title}
            </h2>
            <p className="text-gray-400 line-clamp-4">
              {post.body}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
      <Modal 
        show={modalData.show} 
        onClose={closeModal} 
        title={modalData.title} 
        body={modalData.body} 
      />
    </div>
  );
}
