import React from 'react';

import './Warning.scss';

const Warning = () => (
  <div className="warning underline">
    <a href="https://github.com/NikitaFE" className="warning__container">
      <h2 className="warning__title">Уточните информацию в организации</h2>
      <p className="warning__text">
        Из-за пандемии COVID-19 данные о часах работы и услугах могут быть неточными.
      </p>
    </a>
  </div>
);

export default Warning;
