import PropTypes from 'prop-types';
import { FilterSearch, SearchBox } from './SearchFilter.styled';

export const SearchFilter = ({ value, onChange }) => {
  return (
    <SearchBox>
      <label name="filter"></label>
      <FilterSearch
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Search Contact"
      ></FilterSearch>
    </SearchBox>
  );
};

SearchFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
