module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./setupTests.js'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!test-component).+\\.js$'],
  moduleDirectories: ['node_modules', 'src'],
};
