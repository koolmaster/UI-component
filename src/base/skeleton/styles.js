import Box from '@/base/box';
import styled, { keyframes, css } from 'styled-components';

const SkeletonLoading = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

export const StyledSkeleton = styled(Box)`
  background: #efefef;
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 74.5%, 0.2) 25%,
    hsla(0, 0%, 50.6%, 0.24) 37%,
    hsla(0, 0%, 74.5%, 0.2) 63%
  );
  background-size: 400% 100%;
  animation: ${({ animating }) =>
    animating
      ? css`
          ${SkeletonLoading} 1.4s ease infinite
        `
      : 'none'};
`;
