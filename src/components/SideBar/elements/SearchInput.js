import React, { useState } from 'react';
import classNames from 'classnames';

import { Geo, Menu, Search, Cancel } from '../../Icons/icons';
import './SearchInput.scss';

const SearchInput = ({ coords }) => {
  const [isSelectVisible, setSelectVisible] = useState(false);
  const [searchValue, setSearchValue] = useState(coords);

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
          <button
            className="button search__button"
            onClick={() => setSearchValue('')}
          >
            <Cancel className="search__button-icon" />
            <div className="search__label">Удалить результаты поиска</div>
          </button>
        </div>
        <div className={classNames('search__select', {' search__select--hidden': !isSelectVisible})}>
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
