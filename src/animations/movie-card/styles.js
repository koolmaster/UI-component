import { colors } from '@/themes/default';
import { isEmpty } from 'lodash';
import styled from 'styled-components';

export const StyledMovieCard = styled.div`
  position: relative;
  width: 320px;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    > .poster {
      &::before {
        bottom: 0px;
      }
      img {
        transform: translateY(-50px);
        filter: blur(5px);
      }
      + div {
        bottom: 0px;
      }
    }
  }
`;

export const StyledPoster = styled.div`
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    bottom: -180px;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, ${colors.blueNavi} 50%, transparent);
    transition: 0.5s;
    z-index: 1;
  }
  img {
    width: 100%;
    transition: 0.5s;
  }
`;

export const StyledDetail = styled.div`
  position: absolute;
  bottom: ${({ checkData }) => {
    if (isEmpty(checkData.actor)) return '-95px';
    return ' -165px';
  }};
  left: 0;
  padding: 20px;
  width: 100%;
  z-index: 2;
  transition: 0.5s;
  img {
    max-width: 180px;
  }
  h3 {
    font-size: 0.8em;
    color: ${colors.white};
    margin: 0;
  }
  .rating {
    position: relative;
    display: flex;
    gap: 3px;
    padding: 5px 0;
    svg {
      color: #f7f406;
      width: 18px;
      height: 16px;
    }
    span {
      color: ${colors.white};
      margin-left: 5px;
      padding-top: 1px;
    }
  }
  .tags {
    position: relative;
    margin-top: 5px;
    span {
      padding: 2px 5px;
      margin-right: 5px;
      color: ${colors.white};
      background: #03a8f5;
      border-radius: 4px;
      &:nth-child(2) {
        background: #ff5722;
      }
      &:nth-child(3) {
        background: #92d14f;
      }
    }
  }
  .info {
    color: ${colors.white};
    margin-top: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px;
  }
  .cast {
    position: relative;
    h4 {
      color: ${colors.white};
      margin: 10px 0 0 0;
    }
    ul {
      position: relative;
      display: flex;
      gap: 10px;
      margin-top: 10px;
      margin-bottom: 0;
      padding: 0;
      li {
        list-style: none;
        width: 35px;
        height: 35px;
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid #fff;
        img {
          max-width: 100%;
        }
      }
    }
  }
`;
