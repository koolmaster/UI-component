/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';

import AdvanceMiniCalendar from './AdvanceMiniCalendar';

it('Should render AdvanceMiniCalendar success', () => {
  render(<AdvanceMiniCalendar />);
});
