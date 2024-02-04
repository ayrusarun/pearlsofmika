import React from 'react';
import './CategoriesList.scss'; // You can add styles for the categories list in this file

function CategoriesList() {
  // Replace this with your actual list of categories
  const categories = [
    { name: 'Braclets', imageSrc: '/categories/braclets.png' },
    { name: 'Pendents', imageSrc: '/categories/pendent.png' },
    { name: 'Braclets', imageSrc: '/categories/braclets.png' },
    { name: 'Pendents', imageSrc: '/categories/pendent.png' }
  ];

  return (
    <div className="categories-list">
      <ul className="scrollable-list">
        {categories.map((category, index) => (
          <li key={index}>
            <div className="category-item">
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
