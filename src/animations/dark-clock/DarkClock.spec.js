/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';

import DarkClock from './DarkClock';

it('Should render DarkClock success', () => {
  render(<DarkClock />);
});
