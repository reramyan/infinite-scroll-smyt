import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import debounce from 'lodash.debounce';

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #4b5563;
  &:focus-within {
    color: #9ca3af;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 10px;
  color: inherit;
`;

const StyledInput = styled.input`
  padding-left: 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: #f9fafb;
  transition: border-color 0.2s, background-color 0.2s;

  &:focus {
    border-color: #9ca3af;
    background-color: #fff;
    outline: none;
  }
`;

interface SearchProps {
  debounceTime?: number;
  onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ debounceTime = 0, onChange }) => {
  const debouncedResults = useMemo(() => debounce(onChange, debounceTime), []);

  useEffect(
    () => () => {
      onChange('');
      debouncedResults.cancel();
    },
    []
  );

  return (
    <SearchContainer>
      <SearchIcon />
      <StyledInput type='search' placeholder='Search...' onChange={e => debouncedResults(e.target.value)} />
    </SearchContainer>
  );
};

export default Search;
