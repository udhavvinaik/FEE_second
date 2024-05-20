import React, { useState } from 'react';
import './SearchBar.css';
function SearchBar({ products, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    onSearch(searchTerm); 
  };

  return (
    <div className='bg-fresh SearchBar'>
        <div className='heading'>Your Search Ends Here</div>
        <form onSubmit={handleSubmit} className="search-bar">
        <input
            type="text"
            placeholder='🔎 Search Products'
            value={searchTerm}
            onChange={handleInputChange}
        />
        <button type="submit" className='search'>Search</button>
        </form>
    </div>
  );
}

export default SearchBar;
