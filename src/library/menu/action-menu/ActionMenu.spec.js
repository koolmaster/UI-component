/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { actionData } from '@/mocks';

import ActionMenu from './ActionMenu';

it('Should render ActionMenu success', () => {
  render(<ActionMenu data={actionData} />);
});
