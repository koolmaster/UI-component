import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% 
	{
		opacity: 1;
	}
	50% 
	{
		opacity: 0;
	}
`;

export const StyledDarkClock = styled.div`
  border-radius: 20px;
  border-top-left-radius: 225px;
  border-top-right-radius: 225px;
  background: #2f363e;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25), 10px 10px 70px rgba(0, 0, 0, 0.25),
    inset 5px 5px 10px rgba(0, 0, 0, 0.5), inset 5px 5px 20px rgba(255, 255, 255, 0.2),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Clock = styled.div`
  position: relative;
  width: 450px;
  border-radius: 50%;
  height: 450px;
  background: #2f363e;
  box-shadow: 10px 50px 70px rgba(0, 0, 0, 0.25), inset 5px 5px 10px rgba(0, 0, 0, 0.5),
    inset 5px 5px 20px rgba(255, 255, 255, 0.2), inset -5px -5px 15px rgba(0, 0, 0, 0.75);

  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: #2f363e;
    border: 3px solid #fff;
    border-radius: 50%;
    z-index: 1000;
  }
`;

export const Time = styled.div`
  margin-bottom: 40px;
  display: flex;
  padding: 10px 20px;
  font-size: 2em;
  font-weight: 600;
  border-radius: 40px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5), inset 5px 5px 20px rgba(255, 255, 255, 0.2),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);

  div {
    position: relative;
    width: 60px;
    text-align: center;
    opacity: 0.75;
    &:first-child {
      color: #ff2972;
    }
    &:last-child {
      font-size: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      color: #fff;
    }
    &:nth-child(2) {
      color: #fee800;
    }
    &:nth-child(3) {
      color: #04fc43;
    }
    &:nth-child(1),
    &:nth-child(2) {
      &:after {
        content: ':';
        position: absolute;
        right: -4px;
      }
    }
    &:nth-child(2):after {
      animation: ${animate} 1s steps(1) infinite;
    }
  }
`;

export const Number = styled.span`
  position: absolute;
  inset: 20px;
  text-align: center;
  color: #fff;
  transform: rotate(calc(30deg * ${({ i }) => i}));
  b {
    font-size: 2.1em;
    opacity: 0.25;
    font-weight: 600;
    display: inline-block;
    transform: rotate(calc(-30deg * ${({ i }) => i}));
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border: 2px solid rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 10;
  &:nth-child(1) i {
    width: 2px;
  }
  &:nth-child(2) i {
    width: 4px;
  }
  &::before {
    content: '';
    position: absolute;
    top: -8.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 15px;
    height: 15px;
    background: ${({ color }) => color};
    border-radius: 50%;
    box-shadow: 0 0 20px ${({ color }) => color}, 0 0 60px ${({ color }) => color};
  }
  i {
    position: absolute;
    width: 6px;
    background: #fff;
    height: 50%;
    background: ${({ color }) => color};
    opacity: 0.75;
    transform-origin: bottom;
    transform: scaleY(0.5);
  }
  &.circle2 {
    width: 240px;
    height: 240px;
    z-index: 9;
  }
  &.circle3 {
    width: 180px;
    height: 180px;
    z-index: 8;
  }
`;
