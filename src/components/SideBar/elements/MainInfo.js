import React from 'react';
import StarRatings from 'react-star-ratings';

// import { Star, HalfStar } from '../../Icons/icons';
import './MainInfo.scss';

const MainInfo = ({ pointOfInterest }) => {
  return (
    <div className="main-info underline">
      <h1 className="main-info__title">{pointOfInterest.title}</h1>
      <div className="main-info__rating rating">
        <span className="rating__value">{pointOfInterest.averageRating}</span>
        <span className="rating__stars">
          <StarRatings 
            rating={pointOfInterest.averageRating}
            starRatedColor="#ffc107"
            numberOfStars={5}
            starDimension="14px"
            starSpacing="2px"
          />
        </span>
        <span className="rating__total">(<a href="https://github.com/NikitaFE">{pointOfInterest.totalVotes}</a>)</span>
      </div>
      <a href="https://github.com/NikitaFE" className="main-info__subtitle">{pointOfInterest.type}</a>
    </div>
  )
};

export default MainInfo;
