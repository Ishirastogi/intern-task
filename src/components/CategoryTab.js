import React from 'react';

const CategoryTab = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`py-2 px-4 rounded-full ${
            selectedCategory === category ? 'bg-black text-white' : 'bg-gray-100'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTab;
