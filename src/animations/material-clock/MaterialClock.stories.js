import React from 'react';
import styled from 'styled-components';
import MaterialClock from './MaterialClock';

export default {
  title: 'Animations/Material Clock',
  component: MaterialClock,
  argTypes: {},
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #acbaca;
  padding: 1.5em;
  min-height: 600px;
  align-items: center;
  justify-content: center;
`;

const Template = (args) => {
  return (
    <Wrapper>
      <MaterialClock {...args} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
