module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.jest.json',
      diagnostics: false,
    },
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/', '/src/styles/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['<rootDir>/src/styles/'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '@utils(.*)$': '<rootDir>/src/utils/$1',
    '@styles(.*)$': '<rootDir>/src/styles/$1',
    '@components(.*)$': '<rootDir>/src/components/$1',
    '@store(.*)$': '<rootDir>/src/store/$1',
    '@services(.*)$': '<rootDir>/src/services/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
};
