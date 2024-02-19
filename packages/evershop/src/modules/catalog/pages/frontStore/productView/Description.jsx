import React, { useState } from 'react';
import { CKEditor } from '@components/common/CKEditor';
import PropTypes from 'prop-types';

export default function Description({ product: { description } }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Function to truncate the description to only 10 lines
  const truncateDescription = (content) => {
    const lines = content.split('\n');
    if (lines.length <= 10) {
      return content;
    }
    return lines.slice(0, 10).join('\n');
  };

  return (
    <div className="mt-20 md:mt-3">
      <div className="product-description">
        {/* <h4 className="flex justify-center">Description</h4> */}
        <CKEditor content={expanded ? description : truncateDescription(description)} readOnly />
        {description.split('\n').length > 1 && ( // Show expand button only if description is longer than 10 lines
          <button type="button" onClick={toggleExpanded} className="mt-2 text-blue-500">
            {expanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    
    </div>
  );
}

Description.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string
  }).isRequired
};



export const layout = {
  areaId: 'productPageMiddle',
  sortOrder: 50
};

export const query = `
  query Query {
    product (id: getContextValue('productId')) {
      description
    }
  }`;
