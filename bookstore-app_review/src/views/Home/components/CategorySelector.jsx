import React from 'react';
import PropTypes from 'prop-types';
import categoryPropTypes from 'propTypes/category';

function CategorySelector({categories, onChangeCategory, currentCategoryId}) {
  return (
    <form>
      <select onChange={onChangeCategory} value={currentCategoryId}>
        <option value="todas">Todas</option>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </form>
  );
}

CategorySelector.propTypes = {
  categories: PropTypes.arrayOf(categoryPropTypes).isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  currentCategoryId: PropTypes.number.isRequired
};

export default CategorySelector;
