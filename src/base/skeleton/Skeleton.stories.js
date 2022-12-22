import React from 'react';

import Skeleton from './Skeleton';

export default {
  title: 'Base/Skeleton',
  component: Skeleton,
  argTypes: {},
};

const Template = (args) => <Skeleton {...args} width={150} height={20} />;

export const Default = Template.bind({});
Default.args = {};
