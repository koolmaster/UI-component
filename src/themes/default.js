export const colors = {
  black: '#242424',
  warmGrey: '#787878',
  deepSkyBlue: '#017fff',
  iceBlue: '#f0f8ff',
  white: '#fff',
  lightGrey: '#f2f2f2',
  niceBlue: '#0d5cb6',
  backdrop: 'rgba(0, 0, 0, 0.5)',
  lightSage: '#e7f8f1',
  deepGreen: '#0d5302',
  red: '#ff424e',
  lightRed: '#ffcccf',
  failure: 'rgba(0, 0, 0, 0.8)',
  pinkishGrey: '#c7c7c7',
  shadow: 'rgba(0, 0, 0, 0.15)',
  borderLine: '#484461',
  orange_40: '#FFB56C',
  red_40: '#FF99A0',
  red_60: '#FF424E',
  asaBg_L0: '#1B1928',
  asaBg_L2: '#36324D',
  blue_60: '#1A94FF',
  purple_10: '#F2F0FE',
  purple_20: '#ECE9FD',
  purple_40: '#C6BCF8',
  purple_60: '#856EFA',
  purple_70: '#6F55ED',
  purple_90: '#402DA1',
  gray_10: '#F5F5FA',
  gray_20: '#EBEBF0',
  gray_40: '#c4c4cf',
  gray_50: '#A6A6B0',
  gray_60: '#808089',
  gray_70: '#64646D',
  gray_90: '#38383D',
  orange_60: '#FC820A',
  tab_active: '#0B74E5',
  text_link: '#0B74E5',
  green_50: '#2DC26D',
  blue_70: '#0B74E5',
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
