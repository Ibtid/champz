import React from 'react';

const GalleryCard = () => {
  const bgString = ['bg-gray', 'bg-red', 'bg-blue'];
  return (
    <div
      className={`md:h-[13rem] md:w-[13rem] h-[10rem] w-[10rem] ${
        bgString[Math.floor(Math.random() * 3)]
      } rounded-lg shadow-md`}></div>
  );
};

export default GalleryCard;
