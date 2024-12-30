const capitalize = require('../functions/capitalize')

describe('capitalize', () => {
  test('capitalizes first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  test('handles single letter', () => {
    expect(capitalize('a')).toBe('A')
  })

  test('handles empty string', () => {
    expect(capitalize('')).toBe('')
  })

  test('does not change already capitalized string', () => {
    expect(capitalize('World')).toBe('World')
  })
})
