import React from 'react';

const Activities = () => {
  const activities = [
    {
      title: 'Strawberry Picking',
      img: 'https://images.unsplash.com/photo-1564622598577-74a9aeff6b37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Person picking strawberries in a farm'
    },
    {
      title: 'Burnham Boating',
      img: 'https://images.unsplash.com/photo-1742578769074-5629a2622664?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Boats floating on Burnham Lake in Baguio'
    },
    {
      title: 'Horseback Riding',
      img: 'https://images.pexels.com/photos/4388028/pexels-photo-4388028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Kids riding a horse'
    }
  ];

  return (
    <section
      id="deals"
      aria-label="Activity Highlights"
      className="max-w-[1140px] mx-auto w-full flex flex-col md:flex-row gap-6 px-4 md:px-0 mt-[-75px] z-10 relative"
    >
      {activities.map((activity, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-lg border-4 border-white flex-1"
        >
          <img
            className="w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-500 ease-in-out"
            src={activity.img}
            alt={activity.alt}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center px-2 drop-shadow-lg">
              {activity.title}
            </h3>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Activities;
