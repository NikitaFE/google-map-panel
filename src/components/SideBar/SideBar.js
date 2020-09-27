import React, { useState } from 'react';

import SearchInput from './elements/SearchInput';
import MainInfo from './elements/MainInfo';
import ToolsPanel from './elements/ToolsPanel';

import { LeftArrow, RightArrow } from '../Icons/icons';
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
        <ToolsPanel />
      </div>
    </div>
  );
}

export default SideBar;
