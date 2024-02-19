import React from 'react';
import PropTypes from 'prop-types';
import './AverageReview.scss';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import Rating from '../../../components/Rating';

export default function Reviews({ product: { reviews = [] } }) {

  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? reviews.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews
      : 0;

  return (
   
      <div className="avg-rating-container">  
        <Rating rating={averageRating} />
        <span className="rating-text">
          {`${averageRating.toFixed(1)} (${totalReviews} ${_('reviews')})`}
        </span>
      </div>
  
  );
}

Reviews.propTypes = {
  product: PropTypes.shape({
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        customerName: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired
      })
    )
  }).isRequired
};


export const layout = {
  areaId: 'productViewGeneralInfo',
  sortOrder: 15
};

export const query = `
  query {
    product(id: getContextValue("productId")) {
      reviews {
        reviewId
        uuid
        rating
        customerName
        comment
        createdAt
      }
    }
  }
`;
