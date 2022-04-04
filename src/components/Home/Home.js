import React from 'react';

const Home = () => {
  const img =
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
  return (
    <div className="px-20 flex flex-col lg:flex-row my-8">
      <div className="details-container flex-1">
        <div className="flex justify-center items-center h-full">
          <div>
            <h1 className="text-6xl font-bold text-blue-500 border-l-2 border-blue-200 pl-4">
              Taste Our Food
            </h1>
            <p className="px-4 mt-4 text-gray-500">
              Come at our place and taste our food with 30% off. Wanna know more
              about our food quality? Have a look at our customer reviews.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img className="w-50 mt-4 lg:mt-0" src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
