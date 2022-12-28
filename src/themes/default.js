export const colors = {
  black: '#242424',
  white: '#fff',
  blueNavi: '#1064a6',
};

export const zIndex = {
  modal: 999,
  tooltip: 9999,
  toast: 99999,
};

export const fontSizes = {
  verysmall: { fontSize: 10, lineHeight: 12 },
  small: { fontSize: 12, lineHeight: 16 },
  base: { fontSize: 14, lineHeight: 20 },
  medium: { fontSize: 16, lineHeight: 24 },
  large: { fontSize: 18, lineHeight: 24 },
  xlarge: { fontSize: 20, lineHeight: 32 },
};
export const fontWeights = {
  regular: { fontWeight: 400 },
  medium: { fontWeight: 500 },
  semibold: { fontWeight: 600 },
};

const defaultTheme = { colors, zIndex, fontSizes };

export default defaultTheme;
