import React from 'react';
import styled from 'styled-components';
import { portfolioCardInfo } from '@/mocks';

import PortfolioCard from './PortfolioCard';

export default {
  title: 'Animations/Portfolio Card',
  component: PortfolioCard,
  argTypes: {},
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #333;
  padding: 1.5em;
  min-height: 600px;
  align-items: center;
  justify-content: center;
`;

const Template = (args) => {
  return (
    <Wrapper>
      <PortfolioCard {...args} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = { data: portfolioCardInfo };
