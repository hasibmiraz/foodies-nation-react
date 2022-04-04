import React from 'react';
import HomePageReviews from '../HomePageReviews/HomePageReviews';

const Home = () => {
  const img =
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
  return (
    <div>
      <div className="px-4 lg:px-20 flex flex-col lg:flex-row my-8">
        <div className="details-container flex-1">
          <div className="flex justify-center items-center h-full">
            <div className="px-2 lg:px-8">
              <h1 className="text-3xl lg:text-6xl font-bold text-blue-500 border-l-2 border-blue-200 pl-4">
                Taste Our Food
              </h1>
              <p className="px-4 mt-4 text-gray-500 text-lg">
                Come at our place and taste our food with 30% off. Wanna know
                more about our food quality? Have a look at our customer
                reviews.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img className="w-50 mt-4 lg:mt-0" src={img} alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl font-bold text-gray-500">
          Customer Review
        </h1>
        <HomePageReviews />
      </div>
    </div>
  );
};

export default Home;
