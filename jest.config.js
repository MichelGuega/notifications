module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!src/pages/**/*.{ts,tsx}',
    '!src/utils/**/*.{ts,tsx}',
    '!src/service/**/*.{ts,tsx}',
    '!src/styles/**/*.{ts,tsx}',
    '!src/types/**/*.{ts,tsx}',
    '!src/components/**/stories.tsx',
    '!src/components/**/**/*.snap',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
};
