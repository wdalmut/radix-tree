const omit    = require('./omit')
const path    = require('./path')
const isNil   = require('./is-nil')
const flatMap = require('./flat-map')

module.exports = (prefix, root) => {
  return (function complete(prefix, root) {
    let elements = [];

    if (isNil(root)) {
      return elements;
    }

    if (!isNil(root.value)) {
      elements = elements.concat(prefix)
    }

    let children = Object.keys(omit(['value'], root))
    let others = flatMap((key) => complete(prefix + key, root[key]), children)

    return elements.concat(others)
  })(prefix, path(prefix.split(''), root))
};

