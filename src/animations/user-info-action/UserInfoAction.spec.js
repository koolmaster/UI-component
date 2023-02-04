/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';

import UserInfoAction from './UserInfoAction';

it('Should render UserInfoAction success', () => {
  render(<UserInfoAction />);
});
