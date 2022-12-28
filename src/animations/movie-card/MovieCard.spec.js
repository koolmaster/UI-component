/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import { movieCardInfo } from '@/mocks';

import MovieCard from './MovieCard';

it('Should render MovieCard success', () => {
  render(<MovieCard movieInfo={movieCardInfo} />);
});
