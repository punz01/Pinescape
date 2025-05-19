import React, { useState } from 'react';

const images = [
  {
    src: "https://images.pexels.com/photos/20478144/pexels-photo-20478144/free-photo-of-presidential-summer-palace-in-baguio-philippines.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Tropical resort with palm trees"
  },
  {
    src: "https://images.pexels.com/photos/21847812/pexels-photo-21847812/free-photo-of-landscape-of-baguio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Beachfront lounge chairs"
  },
  {
    src: "https://images.pexels.com/photos/16482325/pexels-photo-16482325/free-photo-of-shirtless-men-dancing-in-traditional-ceremony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Sunset on the water"
  },
  {
    src: "https://images.unsplash.com/photo-1695518932523-f71ce2d27647?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Tropical island landscape"
  },
  {
    src: "https://images.pexels.com/photos/31900116/pexels-photo-31900116/free-photo-of-colorful-hillside-houses-in-baguio-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Beachside cabin"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <section id='gallery' className='max-w-[1140px] mx-auto px-4 py-16'>
      <h2 className='text-center text-gray-700 text-3xl font-semibold mb-8'>Gallery</h2>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? 'col-span-1 sm:col-span-2 lg:col-span-3 row-span-2' : ''
            } cursor-pointer`}
            onClick={() => openModal(img)}
          >
            <img
              className='w-full h-full object-cover rounded-md shadow-sm hover:scale-105 transition-transform duration-300'
              src={img.src}
              alt={img.alt}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-2'
          onClick={closeModal}
        >
          <div
            className='relative bg-white rounded-md shadow-lg max-w-[95vw] max-h-[80vh] w-full sm:w-auto p-2 sm:p-4 flex items-center justify-center'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='absolute top-2 right-3 text-black text-2xl font-bold hover:text-red-600'
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className='max-w-[90vw] max-h-[65vh] object-contain rounded-md'
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
