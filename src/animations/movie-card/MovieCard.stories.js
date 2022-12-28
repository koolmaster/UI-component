import React from 'react';
import { movieCardInfo } from '@/mocks';

import MovieCard from './MovieCard';

export default {
  title: 'Animations/Movie Card',
  component: MovieCard,
  argTypes: { movieInfo: movieCardInfo },
};

const Template = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = { movieInfo: movieCardInfo };
