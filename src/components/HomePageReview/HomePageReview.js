import React from 'react';

const HomePageReview = (props) => {
  const { name, image, review, rating } = props.review;
  return (
    <div className="h-auto flex justify-center mb-6">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg w-full h-64 object-cover"
          src={image}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Name: {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Review: "{review}"
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Rating: {rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageReview;
