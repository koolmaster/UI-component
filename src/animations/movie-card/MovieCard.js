import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { getFinalData } from '@/utils';
import { FaStar, FaRegStar } from 'react-icons/fa';

import { StyledMovieCard, StyledPoster, StyledDetail } from './styles';

const MovieCard = (props) => {
  const { movieInfo = {}, className, onDetail } = props;
  const data = getFinalData(movieInfo);
  if (isEmpty(data)) return null;
  const goDetail = () => {
    if (onDetail) onDetail();
    if (data.url) {
      window.location.href = data.url;
    }
  };
  return (
    <StyledMovieCard className={className} onClick={() => goDetail()}>
      <StyledPoster className="poster">
        <img src={data.poster} alt="poster" loading="lazy" />
      </StyledPoster>
      <StyledDetail checkData={data}>
        <img src={data.avatar} alt="logo" />
        <h3>Directed by {data.directed}</h3>
        <div className="rating">
          {[...Array(5)].map((x, i) => {
            return i > data.rating - 1 ? <FaRegStar key={i} /> : <FaStar key={i} />;
          })}
          <span>{`${data.rating}/5`}</span>
        </div>
        {data.tags && (
          <div className="tags">
            {data.tags.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        )}
        <div className="info">{data.info}</div>
        {data.actor && (
          <div className="cast">
            <h4>Cast</h4>
            <ul>
              {data.actor.map((item, index) => (
                <li key={index}>
                  <img src={item.image} title={item.name} alt={item.name} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </StyledDetail>
    </StyledMovieCard>
  );
};

MovieCard.propTypes = {
  /** Movie data */
  movieInfo: PropTypes.shape({
    poster: PropTypes.string,
    url: PropTypes.string,
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
