import { colors } from '@/themes/default';
import styled, { css } from 'styled-components';

export const StyledActionMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .navigation {
    position: relative;
    width: 70px;
    height: 70px;
    background: ${colors.white};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
    &::before {
      content: '+';
      position: absolute;
      z-index: 2;
      font-size: 3em;
      font-weight: 300;
      color: #e91e63;
      transition: 1.5s;
    }
    ~ .menu {
      position: absolute;
      width: 30px;
      height: 30px;
      background: #fff;
      border-radius: 70px;
      z-index: 1;
      transition: transform 0.5s, width 0.5s, height 0.5s;
      transition-delay: 1s, 0.5s, 0.5s;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

      &::before {
        content: '';
        position: absolute;
        left: calc(50% - 8px);
        bottom: 4px;
        width: 16px;
        height: 16px;
        transform: rotate(45deg);
        background: #fff;
        border-radius: 2px;
        transition: 0.5s;
      }

      ul {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        gap: 40px;
        z-index: 10;
        padding: 0;
        margin: 0;
      }
    }
    &.active {
      &::before {
        transform: rotate(225deg);
        left: 33%;
      }
      ~ .menu {
        transform: translateY(-100px);
        height: 70px;
        width: ${({width}) => `${width}px`};
        z-index: 1;
        transition-delay: 0s, 0.5s, 0.5s;
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
        &::before {
          transition-delay: 0.5s;
          bottom: -6px;
        }
      }
    }
  }
`;

export const WrapperIcon = styled.li`
  list-style: none;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  height: 40px;
  transform: translateY(-30px);
  transition: 0.25s;
  transition-delay: 0s;
  transition-delay: calc(0s + ${({ x }) => x});
  ${({ active }) =>
    active
      ? css`
          visibility: visible;
          opacity: 1;
          transform: translateY(0px);
          transition-delay: calc(0.75s + ${({ x }) => x});
        `
      : ''};

  svg {
    display: block;
    font-size: 32px;
    text-decoration: none;
    color: #555;
  }
`;
