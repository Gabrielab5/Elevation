import { useState } from "react";

function Gallery() {
  const [galleryState, setGalleryState] = useState({
    images: [
      "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
    currentImg: 0,
  });

  const shiftImageBack = () => {
    setGalleryState((prevState) => {
      const newIndex = prevState.currentImg - 1;
      const lastIndex = prevState.images.length - 1;
      return {
        ...prevState,
        currentImg: newIndex < 0 ? lastIndex : newIndex,
      };
    });
  };

  const shiftImageForward = () => {
    setGalleryState((prevState) => {
      const newIndex = prevState.currentImg + 1;
      const lastIndex = prevState.images.length - 1;
      return {
        ...prevState,
        currentImg: newIndex > lastIndex ? 0 : newIndex,
      };
    });
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-2xl flex flex-col items-center max-w-sm w-full">
      <div className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
        <img
          src={galleryState.images[galleryState.currentImg]}
          alt="Gallery item"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={shiftImageBack}
            className="back p-3 bg-white/70 hover:bg-white rounded-full shadow-lg transition-all duration-200"
          > 
          prev
          </button>
          <button
            onClick={shiftImageForward}
            className="forward p-3 bg-white/70 hover:bg-white rounded-full shadow-lg transition-all duration-200"
          >
            next
          </button>
        </div>
      </div>

      <div className="mt-4 text-gray-600 font-medium">
        {galleryState.currentImg + 1} of {galleryState.images.length}
      </div>
    </div>
  );
}

export default Gallery
