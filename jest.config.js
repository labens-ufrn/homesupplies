/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "tests/(.*)": "<rootDir>/tests/$1",
  },
  moduleFileExtensions: ["js", "ts"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,ts}"],
  coverageReporters: [
    "lcov"
  ],
};