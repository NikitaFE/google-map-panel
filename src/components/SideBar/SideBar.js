import React, { useState } from 'react';
import classNames from 'classnames';

import SearchInput from './elements/SearchInput';
import MainInfo from './elements/MainInfo';
import ToolsPanel from './elements/ToolsPanel';
import Warning from './elements/Warning';
import pointOfInterest from '../../data';

import { LeftArrow, RightArrow } from '../Icons/icons';
import './SideBar.scss';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={classNames('side-bar', {' side-bar--closed': !isOpen})}>
      <div className="side-bar__container">
        <button
          className="button side-bar__button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen 
            ? <LeftArrow className="side-bar__button-icon" />
            : <RightArrow className="side-bar__button-icon" />}
        </button>
        <div
          className="side-bar__header"
          style={{
            backgroundImage: `url(${pointOfInterest.image})`,
          }}
        >
          <SearchInput coords={pointOfInterest.coords} />
        </div>
        <MainInfo pointOfInterest={pointOfInterest} />
        <ToolsPanel />
        <Warning />
      </div>
    </div>
  );
}

export default SideBar;
