import { colors } from '@/themes/default';
import styled from 'styled-components';

export const StyledMovieCard = styled.div`
  position: relative;
  width: 320px;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
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
  bottom: -175px;
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
`;
