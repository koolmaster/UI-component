import React from 'react';
import styled from 'styled-components';
import { countdownInfo } from '@/mocks';

import Countdown from './Countdown';

export default {
  title: 'Library/Countdown',
  component: Countdown,
  argTypes: { endTime: countdownInfo.endTime, size: countdownInfo.size },
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #2f363e;
  margin: -1em;
  padding: 1.5em;
  min-height: 300px;
  align-items: center;
  justify-content: center;
`;

const Template = (args) => {
  return (
    <Wrapper>
      <Countdown {...args} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = { endTime: countdownInfo.endTime, size: countdownInfo.size };
