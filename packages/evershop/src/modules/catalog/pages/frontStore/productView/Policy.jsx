import React from 'react';
import './Policy.scss'; // You can add styles for the categories list in this file

export default function Policy() {

  // Replace this with your actual list of categories
  const policies = [
    { name: 'Fast Delivery', imageSrc: '/policy/delivery.gif' },
    { name: 'Anti-Tarnish', imageSrc: '/policy/tarnish.gif' },
    { name: 'Waterproof', imageSrc: '/policy/drop.gif' },
    { name: 'Free Gifts', imageSrc: '/policy/gift.gif' },
    { name: 'Mindfulness consultation', imageSrc: '/policy/affirmation.gif' }
  ];

  return (
    <div className="policies-list">
      <h6 className="h6 mt-1 text-center ">WHAT WE OFFER</h6>
      <ul className="policy-list">
        {policies.map((policy, index) => (
          <li key={index}>
            <div className="policy-item">
              <img src={policy.imageSrc} alt={policy.name} className="policy-image" />
              <a href="/policy"> 
              <p className="policy-name">{policy.name}</p>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const layout = {
  areaId: 'productPageMiddleRight',
  sortOrder: 40
};

