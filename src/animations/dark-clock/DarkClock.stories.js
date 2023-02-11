import React from 'react';
import styled from 'styled-components';
import DarkClock from './DarkClock';

export default {
  title: 'Animations/Dark Clock',
  component: DarkClock,
  argTypes: {},
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #2f363e;
  padding: 1.5em;
  min-height: 600px;
  align-items: center;
  justify-content: center;
`;

const Template = (args) => {
  return (
    <Wrapper>
      <DarkClock {...args} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
