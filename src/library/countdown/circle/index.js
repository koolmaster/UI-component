import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import { StyledCircle } from './style';

const Circle = forwardRef(({ color, size, type, name, dotType }, ref) => {
  return (
    <StyledCircle color={color} size={size}>
      <div className={`dots ${dotType}`}></div>
      <svg>
        <circle cx={size} cy={size} r={size}></circle>
        <circle cx={size} cy={size} r={size} id={name}></circle>
      </svg>
      <div className="title">
        <span ref={ref}>00</span>
        <span>{type}</span>
      </div>
    </StyledCircle>
  );
});

Circle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
};

Circle.displayName = 'Circle';

export default Circle;
