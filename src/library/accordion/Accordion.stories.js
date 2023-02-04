import React from 'react';
import styled from 'styled-components';
import { accordionData, accordionHTMLData } from '@/mocks';

import Accordion from './Accordion';

export default {
  title: 'Library/Accordion',
  component: Accordion,
  argTypes: {},
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #f5f8ff;
  margin: -1em;
  padding: 1.5em;
  min-height: 300px;
  align-items: center;
  justify-content: center;
`;

const Template = (args) => {
  return (
    <Wrapper>
      <Accordion {...args} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Frequently asked questions?',
  data: accordionData,
};

export const TypeHTML = Template.bind({});
TypeHTML.args = {
  title: 'Type Content HTML',
  data: accordionHTMLData,
};
