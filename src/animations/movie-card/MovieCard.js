import React from 'react';
import PropTypes from 'prop-types';
import { getFinalData } from '@/utils';
import { FaStar, FaRegStar } from 'react-icons/fa';

import { StyledMovieCard, StyledPoster, StyledDetail } from './styles';

const MovieCard = (props) => {
  const { movieInfo = {}, className } = props;
  const data = getFinalData(movieInfo);
  return (
    <StyledMovieCard className={className}>
      <StyledPoster className="poster">
        <img src={data.poster} alt="poster" loading="lazy" />
      </StyledPoster>
      <StyledDetail>
        <img src={data.avatar} alt="logo" />
        <h3>Directed by {data.directed}</h3>
        <div className="rating">
          {[...Array(5)].map((x, i) => {
            return i > data.rating - 1 ? <FaRegStar /> : <FaStar />;
          })}
          <span>{`${data.rating}/5`}</span>
        </div>
      </StyledDetail>
    </StyledMovieCard>
  );
};

MovieCard.propTypes = {
  /** Movie data */
  movieInfo: PropTypes.shape({
    poster: PropTypes.string,
    avatar: PropTypes.string,
    directed: PropTypes.string,
    rating: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    info: PropTypes.string,
    actor: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,

  /** callback when card is clicked */
  onDetail: PropTypes.func,

  /** support styled-components extend */
  className: PropTypes.string,
};

export default MovieCard;
