const omit = require('../src/omit')

describe("Omit", () => {
  [
    {keys: ['test'], obj: {}, expected: {}},
    {keys: ['test'], obj: {test: 'test'}, expected: {}},
    {keys: ['test'], obj: {ciao: 'ok', test: 'test'}, expected: {ciao: 'ok'}},
    {keys: ['test'], obj: {ciao: { test: 'ok' }, test: 'test'}, expected: {ciao: { test: 'ok' }}},
  ].map(({keys, obj, expected}) => {
    it("should omit a key", () => {
      expect(omit(keys, obj)).toEqual(expected)
    })
  })
})
