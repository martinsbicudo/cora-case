import capitalize from '.'

describe('lib / capitalize', () => {
  test('should return capitalize string', () => {
    const result = capitalize('test')

    expect(result).toBe('Test')
  })
})
