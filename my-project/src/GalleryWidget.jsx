import React, { useState } from 'react';
const GalleryWidget = () => {
  const [images, setImages] = useState(["https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg","https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg", "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg","https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };
  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="relative bg-gray-800 p-4 rounded-lg ">
    
      <div className="flex items-center justify-between mb-4">
       
        <button className="text-white p-2 ml-2 bg-black rounded-lg">Gallery</button>
        
        
        <span className="flex ml-28">
          <label
            htmlFor="image-upload"
            className="pushable text-white p-2 rounded-full shadow-black transition-all duration-200 cursor-pointer active:shadow-inner"
          >
            <span className="front">+ ADD IMAGE</span>
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="hidden"
          />
        </span>

      
        <div className="flex space-x-2">
         
          <button
            onClick={handlePrev}
            className=" text-white p-2 rounded-full shadow-black transition-all duration-200 cursor-pointer active:shadow-inner"
            disabled={currentIndex === 0}
          >
            <span className="text-gray-500 bg-slate-950 rounded-full p-1 shadow-white">⬅</span>
          </button>

        
          <button
            onClick={handleNext}
            className=" text-white p-2 rounded-full shadow-black transition-all duration-200 cursor-pointer active:shadow-inner"
            disabled={currentIndex >= images.length - 3}
          >
            <span className="text-gray-500 bg-slate-950 rounded-full p-1  shadow-xl ">➡</span>
          </button>
        </div>
      </div>

      
      <div className="flex items-center justify-center">
        
        <div className="flex gap-8 overflow-hidden">
          {images.slice(currentIndex, currentIndex + 3).map((img, index) => (
            <img key={index} src={img} alt="gallery" className="w-30 h-40  object-cover rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;
