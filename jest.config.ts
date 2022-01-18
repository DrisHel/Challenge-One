export default {
  preset: 'ts-jest',

  testEnvironment: 'node',

  setupFilesAfterEnv: ['./__tests__/jest.setup.ts'],

  testMatch: ['**/__tests__/**/*.test.ts?(x)'],

  coveragePathIgnorePatterns: ['./src/database/migrations/*']
};
