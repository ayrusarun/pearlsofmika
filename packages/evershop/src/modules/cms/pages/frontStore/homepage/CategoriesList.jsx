import React from 'react';
import './CategoriesList.scss'; // You can add styles for the categories list in this file

function CategoriesList() {
  // Replace this with your actual list of categories
  const categories = [
    { name: 'Hot Deals', imageSrc: '/categories/offerzone.gif' },
    { name: 'Premium Collections', imageSrc: '/categories/premium.gif' },
    { name: 'Best Seller', imageSrc: '/categories/mostloved.gif' },
    { name: 'Buy1 Get1', imageSrc: '/categories/buy1free.gif' }
  ];

  return (
    <div className="categories-list">
      <ul className="scrollable-list">
        {categories.map((category, index) => (
          <li key={index}>
            <div className="category-item ml-3">
              <img src={category.imageSrc} alt={category.name} className="category-image" />
              <a href="/krystals"> 
              <p className="category-name">{category.name}</p>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesList;
