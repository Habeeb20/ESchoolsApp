import React from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery().get('query');

  return (
    <div>
      <h1>Search Results for: {query}</h1>
    </div>
  );
};

export default SearchResults;
