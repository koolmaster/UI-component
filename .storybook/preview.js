import React from 'react';
import { Normalize } from 'styled-normalize';
import { GlobalStyle, StyledFont } from './global.style';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'black',
        value: '#000',
      },
      {
        name: 'grey',
        value: '#cad0d6',
      },
    ],
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Overview', 'Base', 'Mobile', 'Desktop'],
    },
  },
  controls: { expanded: true },
};

export const decorators = [
  (Story) => {
    return (
      <>
        <Normalize />
        <StyledFont />
        <GlobalStyle />
        <Story />
      </>
    );
  },
];
