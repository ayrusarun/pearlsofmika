import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Reviews.scss';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import Rating from '../../../components/Rating';

export default function Reviews({ product: { reviews = [] } }) {
  const [expanded, setExpanded] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(reviews.slice(0, 2));

  const toggleExpand = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setVisibleReviews(reviews);
    } else {
      setVisibleReviews(reviews.slice(0, 2));
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(parseInt(timestamp, 10)); // Convert timestamp to integer
    if (Number.isNaN(date.getTime())) {
      // Invalid timestamp, return a placeholder or handle as needed
      return ' ';
    }
    // Use toLocaleDateString() to format the date in DD/MM/YYYY format
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };
  
  

  const totalReviews = reviews.length;

  return (
    <div id="product__reviews" className="product__reviews">
      <div className="rating-container">
        <span style={{ marginRight: '5px', fontWeight: 'bold' }}>
            Customer reviews: 
        </span>   
      </div>

      <ul className={`review__list ${expanded ? 'expanded' : ''}`}>
        {visibleReviews.map((review, index) => (
          <li key={`${review.uuid}-${index}`} className="flex flex-col gap-1">
            <div className="rating">
              <span className="customer-name">
                {_('${customer_name}', {
                  customer_name: review.customerName
                })}
              </span>
              <img src="/verified-icon.svg" alt="" style={{ marginLeft: '5px', height: '15px', width: '15px', marginTop: '3px'}} />
              <span className="rating-stars">
                <Rating rating={review.rating} />
              </span>
            </div>
            <p className="commentDate" style={{ fontStyle: 'italic', fontSize: '12px' , color: 'grey' }}>
              {formatDate(review.createdAt)}
            </p>
            <p className="comment">{review.comment}</p>
          </li>
        ))}
      </ul>
      {totalReviews > 2 && (
        <button type="button" className="expand-button styled-button" onClick={toggleExpand}>
          {expanded ? _('Collapse') : _('View More Reviews')}
        </button>
      )}
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
  areaId: 'productPageMBLeft',
  sortOrder: 55
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
