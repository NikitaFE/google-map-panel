import React, { useState } from 'react';

import SearchInput from './elements/SearchInput';

import './SideBar.scss';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`side-bar${isOpen ? '' : ' side-bar--closed'}`}>
      <button
        className="button side-bar__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'ᐊ' : 'ᐅ'}
      </button>
      <SearchInput />
    </div>
  );
}

export default SideBar;
