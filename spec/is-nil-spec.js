const isNil = require('../src/is-nil')

describe("Is Nil", () => {
  [
    {input: 1, expected: false},
    {input: 'a', expected: false},
    {input: {}, expected: false},
    {input: [], expected: false},
    {input: null, expected: true},
    {input: undefined, expected: true},
  ].map(({input, expected}) => {
    it("should say true on nil", () => {
      expect(isNil(input)).toBe(expected)
    })
  })
});
