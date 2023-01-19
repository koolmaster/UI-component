/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ninedotData } from '@/mocks';

import NineDotMenu from './NineDotMenu';

it('Should render NineDotMenu success', () => {
  render(<NineDotMenu data={ninedotData} />);
});
