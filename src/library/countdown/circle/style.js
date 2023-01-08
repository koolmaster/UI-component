import styled from 'styled-components';

export const StyledCircle = styled.div`
  position: relative;
  width: ${({ size }) => `${size * 2 + 10}px`};
  height: ${({ size }) => `${size * 2 + 10}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    position: relative;
    width: ${({ size }) => `${size * 2 + 10}px`};
    height: ${({ size }) => `${size * 2 + 10}px`};
    transform: rotate(270deg);
    circle {
      width: 100%;
      height: 100%;
      fill: transparent;
      stroke-width: 8;
      stroke: #282828;
      stroke-linecap: round;
      transform: translate(5px, 5px);
      &:nth-child(2) {
        stroke: ${({ color }) => color};
        stroke-dasharray: ${({ size }) => size*6.28};
        stroke-dashoffset: ${({ size }) => size*6.28};
      }
    }
  }

  .dots {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 1000;
    &::before {
      content: '';
      position: absolute;
      top: -3px;
      width: 15px;
      height: 15px;
      background: ${({ color }) => color};
      border-radius: 50%;
      box-shadow: 0 0 20px ${({ color }) => color}, 0 0 60px ${({ color }) => color};
    }
  }

  .title {
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: 500;
    color: #fff;
    font-size: 1.5em;
    span {
      &:first-child {
        font-size: 27px;
      }
    }
  }
`;
