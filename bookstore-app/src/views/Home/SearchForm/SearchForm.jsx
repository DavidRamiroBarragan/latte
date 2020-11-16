import React from 'react';

function SearchForm({options, onChangeCategory, currentCategoryId}) {
  return (
    <form>
      <select onChange={onChangeCategory} value={currentCategoryId}>
        <option value="todas">Todas</option>
        {options.map((category) => (
          <option
            value={category.id}
            key={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default SearchForm;
