
module.exports = (list, obj) => {
  let remainingKeys = Object.keys(obj)
    .filter((key) => list.indexOf(key) < 0)

  let newObj = {};

  for(let i of remainingKeys) {
    newObj[i] = obj[i];
  }

  return newObj;
}
