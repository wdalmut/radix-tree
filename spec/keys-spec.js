const keys = require('../src/keys');

describe("keys", () => {
  [
    {key: "test", root: {}, expected: []},
    {key: "te", root: {t: {e: {s: {t: {value: 'test'}}}}}, expected: ['test']},
    {key: "te", root: {t: {e: {s: {t: {value: 'test', a: {value: 'ok'}}}}}}, expected: ['test', 'testa']},
    {key: "te", root: {t: {e: {s: {t: {value: 'test', a: {value: 'ok'}}, l: {a: {value: true}}}}}}, expected: ['test', 'testa', 'tesla']},
    {key: "te", root: {t: {e: {r: {value: true}, s: {t: {value: 'test', a: {value: 'ok'}}, l: {a: {value: true}}}}}}, expected: ['ter', 'test', 'testa', 'tesla']},
    {key: "te", root: {t: {e: {r: {value: undefined}, s: {t: {value: 'test', a: {value: 'ok'}}, l: {a: {value: true}}}}}}, expected: ['test', 'testa', 'tesla']},
  ].map(({key, root, expected}) => {
    it(`should list other possibilities`, () => {
      expect(keys(key, root)).toEqual(expected)
    })
  })
})
