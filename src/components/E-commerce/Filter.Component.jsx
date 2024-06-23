import React from 'react';

function FilterComponent({ searchTerm, selectedCategories, onSearchChange, onCategoryChange }) {
  const categories = ['Electronics', 'Clothing', 'Books'];

  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.name);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search "
      />
      {categories.map((category) => (
        <div key={category}>
          <input
            type="checkbox"
            name={category}
            checked={selectedCategories.includes(category)}
            onChange={handleCategoryChange}
          />
          {category}
        </div>
      ))}
    </div>
  );
}

export default FilterComponent;
