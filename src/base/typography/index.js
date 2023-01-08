import PropTypes from 'prop-types';
import { fontSizes, fontWeights } from '@/themes/default';
import styled from 'styled-components';
import Box from '@/base/box';

const Typography = styled(Box)`
  margin: 0;
  ${(props) => {
    const { fontSize, lineHeight } = fontSizes[props.size] || fontSizes.base;
    const { fontWeight } = fontWeights[props.variant] || fontWeights.regular;

    return `font-size: ${fontSize}px;
line-height: ${lineHeight}px;
font-weight: ${fontWeight};`;
  }}
`;

Typography.defaultProps = {
  size: 'base',
  variant: 'regular',
};

Typography.propTypes = {
  size: PropTypes.oneOf(['small', 'base', 'medium', 'large', 'xlarge']),
  variant: PropTypes.oneOf(['regular', 'medium', 'semibold']),
};

export default Typography;
