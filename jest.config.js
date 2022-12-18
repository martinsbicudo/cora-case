/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest')

const { pathsToModuleNameMapper } = require('ts-jest')

const tsconfig = require('./tsconfig.json')
const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: '<rootDir>/',
    moduleNameMapper: {
      '^@/components/(.*)$': '<rootDir>/components/$1',
      '^@/pages/(.*)$': '<rootDir>/pages/$1',
    },
  }),
  testRegex: '(/__tests__/.*|(\\.)(test|spec))\\.[jt]sx?$',
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
