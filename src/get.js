const path = require('./path');

module.exports = (key, root) => {
  return path(key.split('').concat(['value']), root)
}
