import React from 'react';
import PropTypes from 'prop-types';

import { StyledAdvanceMiniCalendar, Item } from './styles';

const AdvanceMiniCalendar = ({ className }) => {
  const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date();
  const dayNum = date.getDay();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return (
    <StyledAdvanceMiniCalendar className={className}>
      {week.map((item, index) => {
        const num = dayNum === 0 ? 7 : dayNum;
        return (
          <Item className={num === index + 1 ? 'current' : ''} key={index} isSun={num === 7}>
            {item}
            {num === index + 1 && (
              <>
                <p>{day}</p>
                <p>{month}</p>
                <p>{year}</p>
              </>
            )}
          </Item>
        );
      })}
    </StyledAdvanceMiniCalendar>
  );
};

AdvanceMiniCalendar.propTypes = {
  /** support styled-components extend */
  className: PropTypes.string,
};

export default AdvanceMiniCalendar;
