
describe("Flat map", () => {
  it("should flatten an array", () => {
    expect(flatMap(i=>i, [[1],[2]])).toEqual([1,2])
  })
});
