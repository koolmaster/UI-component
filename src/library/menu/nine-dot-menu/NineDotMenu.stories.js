import React from 'react';
import styled from 'styled-components';
import { ninedotData } from '@/mocks';

import NineDotMenu from './NineDotMenu';

export default {
  title: 'Library/Menu/NineDotMenu',
  component: NineDotMenu,
  argTypes: {},
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #161a23;
  padding: 1.5em;
  min-height: 600px;
  align-items: center;
  justify-content: center;
`;

const Template = (args) => {
  return (
    <Wrapper>
      <NineDotMenu {...args} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = { data: ninedotData };
