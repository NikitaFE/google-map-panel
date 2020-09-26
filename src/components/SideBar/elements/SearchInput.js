import React, { useState } from 'react';

import { ReactComponent as Geo } from '../../../assets/img/geo.svg';
import './SearchInput.scss';

const SearchInput = () => {
  const [isSelectVisible, setSelectVisible] = useState(false);

  return (
    <div className="side-bar__search search">
      <div className="search__container">
        <div className="search__input">
          <button className="button search__button">
            ☰
            <div className="search__label">Меню</div>
          </button>
          <input onFocus={() => setSelectVisible(true)} onBlur={() => setSelectVisible(false)} className="search__input-field" type="text"/>
          <button className="button search__button">
            ⌕
            <div className="search__label">Поиск</div>
          </button>
          <button className="button search__button">
            ⨉
            <div className="search__label">Удалить результаты поиска</div>
          </button>
        </div>
        <div className={`search__select${isSelectVisible ? '' : ' search__select--hidden'}`}>
          <a className="search__select-link" href="https://github.com/NikitaFE">
            <span className="search__select-icon">
              <Geo className="icon" alt="geo" />
            </span>
            <span className="search__select-text">
              54321
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
