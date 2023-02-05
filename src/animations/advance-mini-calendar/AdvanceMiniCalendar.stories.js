import React from 'react';
import styled from 'styled-components';
import AdvanceMiniCalendar from './AdvanceMiniCalendar';

export default {
  title: 'Animations/Advance Mini Calendar',
  component: AdvanceMiniCalendar,
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
      <AdvanceMiniCalendar {...args} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  onSelect: (item) => console.log('item ====>', item)
};
