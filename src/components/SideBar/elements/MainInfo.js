import React from 'react';

import { ReactComponent as Star } from '../../../assets/img/star.svg';
import { ReactComponent as HalfStar } from '../../../assets/img/half-star.svg';
import './MainInfo.scss';


const MainInfo = () => {
  return (
    <div className="main-info underline">
      <h1 className="main-info__title">Воронежский областной краеведческий музей</h1>
      <div className="main-info__rating rating">
        <span className="rating__value">4,6</span>
        <span className="rating__stars">
          <Star className="rating__icon" />
          <Star className="rating__icon" />
          <Star className="rating__icon" />
          <Star className="rating__icon" />
          <HalfStar className="rating__icon" />
        </span>
        <span className="rating__total">(<a href="https://github.com/NikitaFE">397</a>)</span>
      </div>
      <a href="https://github.com/NikitaFE" className="main-info__subtitle">Краеведческий музей</a>
    </div>
  )
};

export default MainInfo;
