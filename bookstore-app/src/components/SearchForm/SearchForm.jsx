import React from 'react';
import {useHistory, useParams} from 'react-router-dom';

function SearchForm({options}) {
  const history = useHistory();
  const {keyword} = useParams();

  const onChange = (evt) => {
    history.push(`/search/${evt.target.value}`);
  };
  return (
    <form>
      <select onChange={onChange} value={keyword}>
        <option value="todas">Todas</option>
        {options.map((category) => (
          <option value={category.name} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default SearchForm;
