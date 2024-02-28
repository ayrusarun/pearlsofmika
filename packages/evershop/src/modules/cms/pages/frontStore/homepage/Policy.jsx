import React from 'react';
import './Policy.scss'; // You can add styles for the categories list in this file

export default function Policy() {

  // Replace this with your actual list of categories
  const policies = [
    { name: 'Free Gifts', imageSrc: '/policy/gift.gif' },
    { name: 'Fast Delivery', imageSrc: '/policy/delivery.gif' },
    
  ];

  return (
    <div className="policies-list">
      <h3 className="h5 mt-1 text-center ">WHY CHOOSE US?</h3>
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
  areaId: 'content',
  sortOrder: 11
};
