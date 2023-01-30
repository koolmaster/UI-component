import React from 'react';
import styled from 'styled-components';
import { actionData } from '@/mocks';
import ActionMenu from './ActionMenu';

export default {
  title: 'Library/Menu/ActionMenu',
  component: ActionMenu,
  argTypes: {},
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: linear-gradient(45deg,#ff216d,#2196f3);
  padding: 1.5em;
  min-height: 600px;
  align-items: center;
  justify-content: center;
`;

const Template = (args) => {
  return (
    <Wrapper>
      <ActionMenu {...args} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = {data: actionData};
