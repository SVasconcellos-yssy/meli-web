import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();



  const handleSearch = () => {
    if (query) {
      navigate(`/items?search=${query}`);
    }
  };

  return (
    <header className="header">
      <div className="header__search-container">
        <img src="/logo.png" alt="Logo" className="header__logo" />
        <input
          type="text"
          placeholder="Buscar..."
          className="header__search-input"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search_button" onClick={handleSearch}>
          <img src="/searchIcon.png" alt="Buscar" className="search__icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
