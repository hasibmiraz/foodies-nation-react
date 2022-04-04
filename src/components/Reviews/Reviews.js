import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div className="py-4">
      <h1 className="text-center text-4xl mb-5 text-gray-600">
        Customer Reviews
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
