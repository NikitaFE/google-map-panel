import React, { useState } from 'react';
import classNames from 'classnames';

import { Track, Bookmark, LookFor, ToPhone, Share } from '../../Icons/icons';
import './ToolsPanel.scss';

const toolsData = [
  { id: 1, active: true, Icon: Track, title: 'Проложить маршрут' },
  { id: 2, active: false, Icon: Bookmark, title: 'Сохранить' },
  { id: 3, active: false, Icon: LookFor, title: 'Искать поблизости' },
  { id: 4, active: false, Icon: ToPhone, title: 'Отправить на телефон' },
  { id: 5, active: false, Icon: Share, title: 'Поделиться' }
];

const ToolsPanel = () => {
  const [data, setData] = useState(toolsData);

  const handleClick = (e, id) => {
    e.preventDefault();
    const newData = data.map(tool => tool.id === id 
      ? {...tool, active: true}
      : {...tool, active: false});
    setData(newData);
  };

  return (
    <div className="tools-panel underline">
      <ul className="tools-panel__list">
        {data.map(({ id, active, Icon, title }) => (
          <li className={classNames('tools-panel__item', {' tools-panel__item--active': active})} key={id}>
            <a
              href="https://github.com/NikitaFE"
              className="tools-panel__link"
              onClick={(e) => handleClick(e, id)}
            >
              <div className="tools-panel__icon-wrapper">
                <Icon className="tools-panel__icon" />
              </div>
              <div className="tools-panel__title">
                {title}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default ToolsPanel;
