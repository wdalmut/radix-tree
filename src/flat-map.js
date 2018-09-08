
module.exports = function(fn, arr) {
  return Array.prototype.concat.apply([], arr.map(fn));
};
