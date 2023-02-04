/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import { accordionData } from '@/mocks';

import Accordion from './Accordion';

it('Should render Accordion success', () => {
  render(<Accordion title="Frequently asked questions?" data={accordionData} />);
});
