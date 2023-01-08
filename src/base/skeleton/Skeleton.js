import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { StyledSkeleton } from './styles';

const Skeleton = ({ className, ...props }) => {
  return <StyledSkeleton {...props} className={classNames('skeleton', className)} />;
};

Skeleton.propTypes = {
  animating: PropTypes.bool,
  className: PropTypes.string,
};

Skeleton.defaultProps = {
  animating: true,
};

export default Skeleton;
