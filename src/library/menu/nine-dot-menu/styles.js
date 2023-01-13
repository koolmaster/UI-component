import styled, { css } from 'styled-components';

export const BtnClose = styled.div`
  position: absolute;
  width: 7px;
  height: 7px;
  background: #fff;
  transition: 0.5s;
  transition-delay: 0.4s;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    font-size: 2em;
    scale: 0;
    color: #10131c;
    transition: 0.5s;
  }
`;

export const WrapperIcon = styled.span`
  position: absolute;
  width: 7px;
  height: 7px;
  background: #fff;
  transform: ${({ active, x, y }) =>
    active ? `translate(calc(60px * ${x}), calc(60px * ${y}));` : `translate(calc(14px * ${x}), calc(14px * ${y}));`};
  transition: transform 0.5s, width 0.5s, height 0.5s, background 0.5s;
  transition-delay: calc(0.1s * ${({ i }) => i});
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    transition: 0.5s;
    font-size: 0em;
    color: #fff;
  }
`;

export const StyledNineDotMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 170px;
  .navigation {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    &.active {
      ${WrapperIcon} {
        width: 45px;
        height: 45px;
        background: #1f2536;
        svg {
          font-size: 1.35em;
        }
        &:hover {
          svg {
            color: #2dfc52;
            filter: drop-shadow(0 0 2px #2dfc52) drop-shadow(0 0 5px #2dfc52) drop-shadow(0 0 15px #2dfc52);
          }
        }
      }
      ~ ${BtnClose} {
        width: 40px;
        height: 40px;
        pointer-events: initial;
        transition-delay: 0.8s;
        background: #2dfc52;
        svg {
          scale: 1;
          transition-delay: 1s;
        }
      }
    }
  }
`;
