import React, { useState } from 'react';

import { ReactComponent as Track } from '../../../assets/img/track.svg';
import { ReactComponent as Bookmark } from '../../../assets/img/bookmark.svg';
import { ReactComponent as LookFor } from '../../../assets/img/look-for.svg';
import { ReactComponent as ToPhone } from '../../../assets/img/to-phone.svg';
import { ReactComponent as Share } from '../../../assets/img/share.svg';
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
          <li className={`tools-panel__item${active ? ' tools-panel__item--active' : ''}`} key={id}>
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