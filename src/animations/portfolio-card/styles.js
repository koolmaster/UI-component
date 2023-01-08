import { colors } from '@/themes/default';
import styled from 'styled-components';

export const ImgBx = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: ${colors.black};
  transition: 0.5s;
  z-index: 10;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 150px;
    transform: translate(-50%, -50%);
    background: linear-gradient(transparent, #ff3c7b, #ff3c7b, #ff3c7b, transparent);
    animation: animate2 6s linear infinite;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 3px;
    background: #292929;
  }
  img {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    filter: grayscale(1);
    transition: 0.5s;
  }
  .skeleton {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
  }
  &:hover {
    img {
      filter: grayscale(0);
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  .details {
    padding: 55px 40px;
    text-align: center;
    width: 100%;
    transition: 0.5s;
    transform: translateY(145px);
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #45f3ff;
    line-height: 25px;
    display: flex;
    flex-direction: column;
    margin: 0;
    span {
      font-size: 15px;
      font-weight: 500;
      color: #fff;
      line-height: 21px;
    }
  }
  .data {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    h3 {
      font-size: 1em;
      color: #45f3ff;
      line-height: 1.2em;
      font-weight: 600;
      margin: 0;
      display: flex;
      flex-direction: column;
      span {
        font-size: 0.85em;
        font-weight: 400;
        color: #fff;
      }
    }
  }
  .actionBtn {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    button {
      padding: 10px 30px;
      border: none;
      outline: none;
      border-radius: 5px;
      font-size: 1em;
      font-weight: 500;
      background: #45f3ff;
      color: #222;
      cursor: pointer;
      opacity: 0.9;
      width: calc(100% - 10px);
      &:nth-child(2) {
        background: ${colors.white};
      }
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const StyledPortfolioCard = styled.div`
  @keyframes animate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  @keyframes animate2 {
    0% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }

  position: relative;
  width: 350px;
  height: 190px;
  background: #333;
  transition: 0.5s;
  &:hover {
    height: 450px;
    ${ImgBx} {
      width: 250px;
      height: 250px;
    }
    ${Content} {
      .details {
        transform: translateY(0px);
      }
    }
  }
  .lines {
    position: absolute;
    inset: 0;
    background: ${colors.black};
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 600px;
      height: 120px;
      background: linear-gradient(transparent, #45f3ff, #45f3ff, #45f3ff, transparent);
      animation: animate 4s linear infinite;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 3px;
      background: #292929;
    }
  }
`;
