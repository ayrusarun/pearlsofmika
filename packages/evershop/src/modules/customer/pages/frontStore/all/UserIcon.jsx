import PropTypes from 'prop-types';
import React from 'react';
import Icon from '@heroicons/react/outline/UserIcon';

export default function UserIcon({ customer, accountUrl, loginUrl }) {
const iconStyles = {
    stroke: 'var(--userIconColor)', // Replace with your desired stroke color
    width: 25,
    height: 25
  };


  return (
    <div className="self-center">
      <a href={customer ? accountUrl : loginUrl}>
        <Icon style={iconStyles} />
      </a>
    </div>
  );
}

UserIcon.propTypes = {
  accountUrl: PropTypes.string,
  customer: PropTypes.shape({
    email: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired
  }),
  loginUrl: PropTypes.string.isRequired
};

UserIcon.defaultProps = {
  accountUrl: null,
  customer: null
};

export const layout = {
  areaId: 'icon-wrapper',
  sortOrder: 30
};

export const query = `
  query Query {
    customer: currentCustomer {
      uuid
      fullName
      email
    }
    accountUrl: url(routeId: "account")
    loginUrl: url(routeId: "login")
  }
`;
