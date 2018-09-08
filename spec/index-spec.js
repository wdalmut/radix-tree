const { add, get, del, keys } = require('../src');

describe("Radix tree", () => {
  it("should have a get method", () => {
    expect(typeof add).toEqual("function")
  })

  it("should have a get method", () => {
    expect(typeof get).toEqual("function")
  })

  it("should have a del method", () => {
    expect(typeof del).toEqual("function")
  })

  it("should have a keys method", () => {
    expect(typeof keys).toEqual("function")
  })
})
