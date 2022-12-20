module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  // testMatch: ['<rootDir>/test/**/*.[jt]s?(x)', '<rootDir>/src/components/**/*.[jt]s?(x)'],
  // setupFiles: ['<rootDir>/setupTests.js'],
};
