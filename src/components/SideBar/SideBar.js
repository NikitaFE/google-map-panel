import React, { useState } from 'react';

import SearchInput from './elements/SearchInput';
import MainInfo from './elements/MainInfo';

import { ReactComponent as LeftArrow } from '../../assets/img/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../assets/img/right-arrow.svg';
import './SideBar.scss';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`side-bar${isOpen ? '' : ' side-bar--closed'}`}>
      <div className="side-bar__container">
        <button
          className="button side-bar__button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen 
            ? <LeftArrow className="side-bar__button-icon" />
            : <RightArrow className="side-bar__button-icon" />}
        </button>
        <div className="side-bar__header">
          <SearchInput />
        </div>
        <MainInfo />
      </div>
    </div>
  );
}

export default SideBar;
