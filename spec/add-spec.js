const add  = require('../src/add');

describe("Add", () => {
  it("should add a letter", () => {
    expect(add('a', 'value', {})).toEqual({a: {value: 'value'}});
  })

  it("should add a couple of letters", () => {
    expect(add('ab', 'value', {})).toEqual({a: {b: {value: 'value'}}});
  });

  it("should add more values on existing keys", () => {
    expect(add('ab', 'value', {a: {value: 'ok'}})).toEqual({a: {value: 'ok', b: {value: 'value'}}});
  });

});
