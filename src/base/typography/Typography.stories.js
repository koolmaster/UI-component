import Box from '@/base/box';
import React from 'react';

import Typography from './index';

export default {
  title: 'Base/Typography',
  component: Typography,
  argTypes: {
    children: 'aaa',
  },
};

const Template = (args) => {
  return (
    <Box mb={4}>
      <Typography {...args}>the brown fox jumps over the lazy dog</Typography>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: 'base',
  variant: 'regular',
};

export const SmallRegular = Template.bind({});
Default.args = {
  size: 'small',
  variant: 'regular',
};

export const SmallMedium = Template.bind({});
Default.args = {
  size: 'small',
  variant: 'medium',
};

export const SmallSemiBold = Template.bind({});
Default.args = {
  size: 'small',
  variant: 'semibold',
};
