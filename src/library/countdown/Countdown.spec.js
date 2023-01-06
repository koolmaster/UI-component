/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import { countdownInfo } from '@/mocks';

import Countdown from './Countdown';

it('Should render Countdown success', () => {
  render(<Countdown endTime={countdownInfo.endTime} size={countdownInfo.size} />);
});
