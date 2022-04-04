import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="h-auto flex justify-center mb-6">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg w-full h-64 object-cover"
          src={review.image}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {review.review}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Rating: {review.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
