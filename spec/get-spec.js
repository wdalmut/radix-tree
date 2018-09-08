const get = require('./../src/get');

describe("Get", () => {
  it("should key a value", () => {
    expect(get('ciao', {c: {i: {a: {o: {value: 'test'}}}}})).toEqual('test')
  });
});
