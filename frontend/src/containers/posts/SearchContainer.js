import { useState } from 'react';

const SearchContainer = (title) => {
  const [searchTerm, setSearchTerm] = useState('');
  <input
    type={'text'}
    placeholder="Search"
    onChange={(e) => {
      setSearchTerm(e.target.value);
    }}
  ></input>;
};
