const del = require('../src/delete')

describe("Delete", () => {
  it("should remove a existing value", () => {
    expect(del('test', {})).toEqual({t: {e: {s: {t: {value: undefined}}}}})
  })

  it("should remove an existing value", () => {
    expect(del('test', {t: {e: {s: {t: {value: "test"}}}}})).toEqual({t: {e: {s: {t: {value: undefined}}}}})
  })
});
