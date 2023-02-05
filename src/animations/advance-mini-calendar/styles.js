import styled from 'styled-components';

export const StyledAdvanceMiniCalendar = styled.ul`
  display: flex;
  gap: 5px;
  height: 120px;
  padding: 20px 40px;
  background: #fff;
  border-radius: 10px;
`;

export const Item = styled.li`
  list-style: none;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border-radius: 20px;
  color: #666;
  font-size: 1.25em;
  &.current {
    position: relative;
    background: ${({ isSun }) => (isSun ? '#ff1e2c' : '#29fd53')};
    color: ${({ isSun }) => (isSun ? '#fff' : '#222327')};
    height: 100px;
    width: 100px;
    font-size: 1.65em;
    border: 6px solid #222327;
    transform: translateY(-70px);
    font-weight: 500;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      left: -36px;
      top: 44px;
      width: 30px;
      height: 30px;
      background: #fff;
      border-top-right-radius: 10px;
      box-shadow: 6px -6px #222327;
    }
    &::after {
      content: '';
      position: absolute;
      right: -36px;
      top: 44px;
      width: 30px;
      height: 30px;
      background: #fff;
      border-top-left-radius: 10px;
      box-shadow: -6px -6px #222327;
    }
    p {
      margin: 0;
      &:first-child {
        font-size: 1.6em;
        color: #222327;
        position: absolute;
        transform: translateY(76px);
      }
      &:nth-child(2) {
        position: absolute;
        transform: translateY(102px);
        font-size: 0.55em;
        font-weight: 500;
        color: #222327;
      }
      &:last-child {
        color: #fff;
        font-size: 0.85em;
        position: absolute;
        font-weight: 500;
        transform: translateY(-62px);
      }
    }
  }
`;
