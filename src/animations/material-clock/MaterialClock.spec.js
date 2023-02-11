/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';

import MaterialClock from './MaterialClock';

it('Should render MaterialClock success', () => {
  render(<MaterialClock />);
});
