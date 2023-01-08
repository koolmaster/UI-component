import React from 'react';
import PropTypes from 'prop-types';
import { get, isEmpty } from 'lodash';
import { getFinalData } from '@/utils';
import Skeleton from '@/base/skeleton';

import { StyledPortfolioCard, ImgBx, Content } from './styles';

const PortfolioCard = (props) => {
  const { data = {}, className, onClickLeft, onClickRight } = props;
  const portfolioInfo = getFinalData(data);
  if (isEmpty(portfolioInfo)) return null;

  const info = get(portfolioInfo, 'info', []);
  return (
    <StyledPortfolioCard className={className}>
      <div className="lines" />
      <ImgBx>{isEmpty(portfolioInfo.avatar) ? <Skeleton /> : <img src={portfolioInfo.avatar} alt="avatar" />}</ImgBx>
      <Content>
        <div className="details">
          <h2>
            {portfolioInfo.name}
            <span>{portfolioInfo.job}</span>
          </h2>
          <div className="data">
            {info.map((item, index) => {
              return (
                <h3 key={index}>
                  {item.count}
                  <span> {item.title}</span>
                </h3>
              );
            })}
          </div>
          <div className="actionBtn">
            {portfolioInfo.buttonsLeftText && <button onClick={() => onClickLeft()}>{portfolioInfo.buttonsLeftText}</button>}
            {portfolioInfo.buttonsRightText && <button onClick={() => onClickRight()}>{portfolioInfo.buttonsRightText}</button>}
          </div>
        </div>
      </Content>
    </StyledPortfolioCard>
  );
};

PortfolioCard.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    job: PropTypes.string,
    info: PropTypes.arrayOf(PropTypes.object),
    buttonsLeftText: PropTypes.string,
    buttonsRightText: PropTypes.string,
  }).isRequired,

  /** callback when button left is clicked */
  onClickLeft: PropTypes.func,

  /** callback when button right is clicked */
  onClickRight: PropTypes.func,

  /** support styled-components extend */
  className: PropTypes.string,
};

export default PortfolioCard;
