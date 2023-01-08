import React from 'react';
import { render, screen } from '@testing-library/react';

import Skeleton from './Skeleton';

it('Should render Skeleton success', () => {
  render(<Skeleton />);
});
