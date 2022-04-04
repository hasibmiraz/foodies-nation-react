import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import HomePageReview from '../HomePageReview/HomePageReview';

const HomePageReviews = () => {
  const [reviews] = useReviews();
  const homePageReviews = reviews.slice(2, 5);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 m-5">
        {homePageReviews.map((review) => (
          <HomePageReview key={review._id} review={review} />
        ))}
      </div>
      <div className="flex justify-center mb-6">
        <Link to="/reviews">
          <button
            type="button"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            See All Reviews
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomePageReviews;
