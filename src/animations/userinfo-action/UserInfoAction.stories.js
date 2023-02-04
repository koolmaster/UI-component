import React from 'react';
import styled from 'styled-components';
import UserInfoAction from './UserInfoAction';

export default {
  title: 'Animations/UserInfo Action',
  component: UserInfoAction,
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
      <UserInfoAction {...args} />
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  avatar: 'https://i.ibb.co/k8R7jfr/img.jpg',
  name: 'Maureen Robinson',
  career: 'Aerospace Engineer',
  onEdit: () => console.log('onEdit'),
  onWishlist: () => console.log('onWishlist'),
  onDelete: () => console.log('onDelete'),
};
