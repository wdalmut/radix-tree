const assocPath = require('./assoc-path');

module.exports = (key, value, root) => {
  return assocPath(key.split('').concat(['value']), value, root);
}
