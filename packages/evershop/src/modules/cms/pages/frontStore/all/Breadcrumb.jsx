import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrumb.scss';

function Breadcrumb({ pageInfo: { breadcrumbs } }) {
  return breadcrumbs.length ? (
    <div className="page-width my-2">
      {breadcrumbs.map((breadcrumb, index) =>
        index === breadcrumbs.length - 1 ? (
          <span key={index} className="breadcrumb-text" >{breadcrumb.title}</span>
        ) : (
          <span key={index}>
            <a href={breadcrumb.url} className="breadcrumb-link">
              {breadcrumb.title}
            </a>
            <span className="breadcrumb-divider">{' / '}</span>
          </span>
        )
      )}
    </div>
  ) : null;
}

Breadcrumb.propTypes = {
  pageInfo: PropTypes.shape({
    breadcrumbs: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string
      })
    )
  }).isRequired
};

export const query = `
  query query {
    pageInfo {
      breadcrumbs {
        title
        url
      }
    }
  }
`;

export const layout = {
  areaId: 'content',
  sortOrder: 0
};

export default Breadcrumb;
