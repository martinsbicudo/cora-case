/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest')

const path = require('path')
const { pathsToModuleNameMapper } = require('ts-jest')

const tsconfig = require('./tsconfig.json')
const createJestConfig = nextJest({
  dir: './',
})

const fileTransformerPath = path.resolve(__dirname, '/test/__mocks__/svg.js')

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
    '^.+\\.(svg)$': '<rootDir>/test/__mocks__/svg.jsx',
  },
  testRegex: '(/__tests__/.*|(\\.)(test|spec))\\.[jt]sx?$',
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
