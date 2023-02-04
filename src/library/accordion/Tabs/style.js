import { colors } from '@/themes/default';
import styled from 'styled-components';

export const Tab = styled.div`
  position: relative;
  background: ${colors.white};
  padding: 20px 20px;
  box-shadow: 0 15px 25px rgb(0 0 0 / 5%);
  border-radius: 5px;
  overflow: hidden;
  &:nth-child(2) {
    .label {
      span {
        &:first-child {
          background: linear-gradient(135deg, #70f570 10%, #49c628 100%);
        }
      }
    }
  }
  &:nth-child(3) {
    .label {
      span {
        &:first-child {
          background: linear-gradient(135deg, #3c8ce7 10%, #00eaff 100%);
        }
      }
    }
  }
  &:nth-child(4) {
    .label {
      span {
        &:first-child {
          background: linear-gradient(135deg, #ff96f9 10%, #c32bac 100%);
        }
      }
    }
  }
  &:nth-child(5) {
    .label {
      span {
        &:first-child {
          background: linear-gradient(135deg, #fd6e6a 10%, #ffc600 100%);
        }
      }
    }
  }
  &:nth-child(6) {
    .label {
      span {
        &:first-child {
          background: linear-gradient(135deg, #23074d 10%, #cc5333 100%);
        }
      }
    }
  }
  &:nth-child(7) {
    .label {
      span {
        &:first-child {
          background: linear-gradient(135deg, #659999 10%, #f4791f 100%);
        }
      }
    }
  }
  &:nth-child(8) {
    .label {
      span {
        &:first-child {
          background: linear-gradient(135deg, #dd3e54 10%, #6be585 100%);
        }
      }
    }
  }
  &:nth-child(9) {
    .label {
      span {
        &:first-child {
          background: linear-gradient(135deg, #009fff 10%, #ec2f4b 100%);
        }
      }
    }
  }
  &:nth-child(10) {
    .label {
      span {
        &:first-child {
          background: linear-gradient(135deg, #fdc830 10%, #f37335 100%);
        }
      }
    }
  }
  .label {
    display: inline-block;
    display: flex;
    margin-bottom: 0px;
    align-items: center;
    cursor: pointer;
    span {
      &:first-child {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors.white};
        font-size: 1.25em;
        border-radius: 5px;
        margin-right: 10px;
        font-weight: bold;
      }
      &:nth-child(2) {
        position: relative;
        font-size: 1.17em;
        font-weight: 500;
        color: #333;
        z-index: 10;
      }
    }
    svg {
      content: '+';
      position: absolute;
      right: 20px;
      font-size: 2em;
      color: rgba(0, 0, 0, 0.1);
      transition: transform 1s;
    }
  }
  .content {
    max-height: 0;
    overflow: hidden;
    transition: 1s;
    p {
      position: relative;
      padding: 10px 0;
      margin: 0;
      color: #333;
      z-index: 10;
      font-size: 1.2em;
      line-height: 1.4em;
    }
  }
  &:hover {
    .label {
      svg {
        color: #333;
      }
    }
  }
  &.active {
    .label {
      span {
        &:first-child {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: rgba(255, 255, 255, 0.2);
          font-size: 8em;
          justify-content: flex-end;
          padding: 20px;
        }
        &:nth-child(2) {
          background: ${colors.white};
          padding: 4px 10px;
          color: #333;
          border-radius: 2px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
      }
      svg {
        color: ${colors.white};
        transform: rotate(135deg);
      }
    }
    .content {
      max-height: 100vh;
      transition: 1s;
      p {
        color: ${colors.white};
      }
    }
  }
`;
