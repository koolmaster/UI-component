import { DEVICE } from '@/constants';
import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  gap: 6px;
`;

export const User = styled.div`
  position: relative;
  background: #fff;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
  .imgBx {
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 6px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      margin: 0;
      &:first-child {
        font-weight: 600;
        font-size: 1.17em;
        line-height: 1.1em;
      }
      &:last-child {
        font-weight: 500;
        font-size: 0.8em;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;

export const Navigation = styled.div`
  position: relative;
  width: 40px;
  height: 70px;
  background: #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #222327;
    border-radius: 50%;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #222327;
    &:nth-child(1) {
      transform: translateY(-12px);
    }
    &:nth-child(3) {
      transform: translateY(12px);
    }
    svg {
      transition: 0.5s;
      font-size: 0em;
    }
  }
  &.active {
    width: 200px;
    span {
      width: 35px;
      height: 35px;
      transition: 0.5s;

      @media ${DEVICE.tabletS} {
        width: 50px;
        height: 50px;
      }

      &:nth-child(1) {
        transform: translateY(0) translateX(-50px);
        @media ${DEVICE.tabletS} {
          transform: translateY(0) translateX(-60px);
        }
      }
      &:nth-child(3) {
        transform: translateY(0) translateX(50px);
        @media ${DEVICE.tabletS} {
          transform: translateY(0) translateX(60px);
        }
      }
      svg {
        font-size: 1.15em;
        color: #fff;
        @media ${DEVICE.tabletS} {
          font-size: 1.55em;
        }
      }
      &:hover {
        background: #29fd53;
        color: #222327;
      }
    }
  }
`;

export const EmptyAvatar = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 6px;
  background: #dedede;
`;
