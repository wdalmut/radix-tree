const assocPath = require('./assoc-path');

module.exports = (key, root) => {
  return assocPath(key.split('').concat(['value']), undefined, root)
};
