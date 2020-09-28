import React from 'react';

import { Star, HalfStar } from '../../Icons/icons';
import './MainInfo.scss';

const MainInfo = ({ pointOfInterest }) => {
  return (
    <div className="main-info underline">
      <h1 className="main-info__title">{pointOfInterest.title}</h1>
      <div className="main-info__rating rating">
        <span className="rating__value">{pointOfInterest.averageRating}</span>
        <span className="rating__stars">
          <Star className="rating__icon" />
          <Star className="rating__icon" />
          <Star className="rating__icon" />
          <Star className="rating__icon" />
          <HalfStar className="rating__icon" />
        </span>
        <span className="rating__total">(<a href="https://github.com/NikitaFE">{pointOfInterest.totalVotes}</a>)</span>
      </div>
      <a href="https://github.com/NikitaFE" className="main-info__subtitle">{pointOfInterest.type}</a>
    </div>
  )
};

export default MainInfo;
