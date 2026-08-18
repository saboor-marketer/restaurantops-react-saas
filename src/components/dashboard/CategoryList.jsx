import React from 'react';
import Avatar from '../common/Avatar';

const CategoryList = ({ categories }) => {
  return (
    <div className="card category-card">
      <h2 className="category-card-title">Top Categories</h2>
      
      {categories.map((category) => (
        <div key={category.id} className="category-item">
          <Avatar
            src={category.image}
            alt={category.name}
            size={44}
          />
          <div className="category-item-info">
            <div className="category-item-name">{category.name}</div>
          </div>
          <div className="category-item-value">{category.percentage}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
