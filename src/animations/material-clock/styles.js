import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% 
	{
		transform: rotate(360deg);
	}
  100% 
	{
		transform: rotate(0deg);
	}
`;

export const StyledMaterialClock = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background: #c9d5e0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: 30px 30px 30px -10px rgba(0, 0, 0, 0.15), inset 15px 15px 10px rgba(255, 255, 255, 0.75),
    -15px -15px 35px rgba(255, 255, 255, 0.55), inset -1px -1px 10px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: #e91e63;
    border-radius: 50%;
    z-index: 1000;
    box-shadow: 0 0 0 1px #e91e63, 0 0 0 3px #fff, 0 0 5px 5px rgba(0, 0, 0, 0.15);
  }
`;

export const Clock = styled.div`
  position: absolute;
  inset: 35px;
  background: #152b4a;
  border-radius: 50%;
  box-shadow: 5px 5px 15px #152b4a66, inset 5px 5px 5px rgba(255, 255, 255, 0.55), -6px -6px 10px rgba(255, 255, 255, 1);
  &::before {
    content: '';
    position: absolute;
    inset: 35px;
    background: linear-gradient(#2196f3, #e91e63);
    border-radius: 50%;
    animation: ${animate} 2s linear infinite;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 38px;
    background: #152b4a;
    border-radius: 50%;
  }
  .circle {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    z-index: 10;
    i {
      position: absolute;
      width: 3px;
      height: 50%;
      background: #fff;
      transform-origin: bottom;
    }
    &.hr i {
      transform: scaleY(0.3);
      width: 4px;
    }
    &.mn i {
      transform: scaleY(0.45);
    }
    &.sc i {
      width: 2px;
      transform: scaleY(0.55);
      background: #e91e63;
      box-shadow: 0 30px 0 #e91e63;
    }
  }
`;

export const Number = styled.span`
  position: absolute;
  inset: 6px;
  text-align: center;
  color: #fff;
  font-size: 1.55em;
  transform: rotate(calc(90deg * ${({ i }) => i}));
  b {
    font-weight: 600;
    display: inline-block;
    transform: rotate(calc(-90deg * ${({ i }) => i}));
  }
`;
