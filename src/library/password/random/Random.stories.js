import React from 'react';
import styled from 'styled-components';
import Random from './Random';

export default {
  title: 'Library/Form/Password/Random',
  component: Random,
  argTypes: {},
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #f8f8f8;
  padding: 1.5em;
  min-height: 600px;
  align-items: center;
  justify-content: center;
`;

const Template = args => {
  return (
    <Wrapper>
      <Random {...args} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = {};
