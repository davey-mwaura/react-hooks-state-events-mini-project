import React, { useState, useEffect } from "react";


function CategoryFilter({ categories, TASKS, onFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    onFilter(selectedCategory);
  }, [selectedCategory, onFilter]);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category-filter ${
            category === selectedCategory ? "selected" : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;


