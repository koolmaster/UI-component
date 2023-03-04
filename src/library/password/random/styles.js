import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Create password',
})`
  position: relative;
  padding: 0 20px;
  user-select: none;
  height: 60px;
  width: 400px;
  border-radius: 8px;
  border: none;
  outline: none;
  margin: 15px 0 20px;
  background: transparent;
  font-size: 20px;
  letter-spacing: 4px;
  box-sizing: border-box;
  color: #333;
  box-shadow: -4px -4px 0 rgba(255, 255, 255, 1),
              inset 4px 4px 10px rgba(0, 0, 0, 0.05),
              inset -4px -4px 10px rgba(255, 255, 255, 1),
              4px 4px 10px rgba(0, 0, 0, 0.05);

  &::placeholder {
    letter-spacing: 0;
  }
`;

export const Button = styled.button`
  postion: relative;
  cursor: pointer;
  color: #fff;
  background: #333;
  font-size: 20px;
  display: flex;
  padding: 10px 15px;
  border-radius: 8px;
  border: none;
  &:hover {
    background: #9c27b0;
  }
`;