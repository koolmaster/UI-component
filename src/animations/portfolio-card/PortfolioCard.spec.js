/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';

import PortfolioCard from './PortfolioCard';

it('Should render PortfolioCard success', () => {
  render(<PortfolioCard />);
});
