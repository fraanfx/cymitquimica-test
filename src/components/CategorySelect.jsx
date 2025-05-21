// components/CategorySelect.jsx
import React from 'react';

const CategorySelect = ({ categories, selected, onChange }) => {
    console.log(categories)
  return (
    <div className="container--select">
      <select
        className="category-select"
        aria-label="Filtrar por categoría"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        >
        <option value="">Todas las categorías</option>
        {categories?.map((cat) => (
          <option key={cat.slug} value={cat.slug}>
            {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
          </option>
        ))}
      </select>
      </div>
  );
};

export default CategorySelect;
