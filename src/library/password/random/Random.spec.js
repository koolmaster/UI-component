/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';

import Random from './Random';

it('Should render Random success', () => {
  render(<Random />);
});
