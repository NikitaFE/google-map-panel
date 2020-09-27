import React, { useState } from 'react';

import { ReactComponent as Geo } from '../../../assets/img/geo.svg';
import { ReactComponent as Menu } from '../../../assets/img/menu.svg';
import { ReactComponent as Search } from '../../../assets/img/search.svg';
import { ReactComponent as Cancel } from '../../../assets/img/cancel.svg';
import './SearchInput.scss';

const SearchInput = () => {
  const [isSelectVisible, setSelectVisible] = useState(false);
  const [searchValue, setSearchValue] = useState(`51°52'47.7"N 48°18'29.3"E`);

  return (
    <div className="side-bar__search search">
      <div className="search__container">
        <div className="search__input">
          <button className="button search__button">
            <Menu className="search__button-icon" />
            <div className="search__label">Меню</div>
          </button>
          <input
            onFocus={() => setSelectVisible(true)}
            onBlur={() => setSelectVisible(false)}
            onChange={({ target }) => setSearchValue(target.value)}
            className="search__input-field"
            type="text"
            value={searchValue}
          />
          <button className="button search__button">
            <Search className="search__button-icon" />
            <div className="search__label">Поиск</div>
          </button>
          <button className="button search__button">
            <Cancel className="search__button-icon" />
            <div className="search__label">Удалить результаты поиска</div>
          </button>
        </div>
        <div className={`search__select${isSelectVisible ? '' : ' search__select--hidden'}`}>
          <a className="search__select-link" href="https://github.com/NikitaFE">
            <span className="search__select-icon">
              <Geo className="icon" alt="geo" />
            </span>
            <span className="search__select-text">
              {searchValue}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
