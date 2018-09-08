# Radix Tree kata

A simple (not space optimized) radix tree example

```js
const { add, get, del, keys } = require('./src');
```

## Add elements

```js
let root = {};
root = add('test', 'value', root);
```

## Get existing elements

```js
get('test', root);
'value'
```


## Remove existing elements

```js
root = del('test', root);
```

## Get all keys of a prefix (autocomplete)

```js
keys('te', root)
console.log(suggests)
['test', 'testa', 'tester']
```

## Create extra features

Prepare a set of functional helpers

```js
const curry2   = fn => a => b => fn(a,b)
const map      = (fn, data) => data.map(fn)
const nthArg   = (pos) => (...args) => args[pos]
const compose  = (g, f) => (...args) => g(f.apply(null, args))
const flip     = (fn) => (...args) => fn.apply(fn, args.slice().reverse())
const assoc    = (key, value, data) => Object.assign({}, {[key]:value}, data)
const converge = (fn, paths) => (...args) => fn.apply(null, paths.map((fn) => fn.apply(null, args)))
const zipObj   = (keys, values) => keys.reduce((memo, item, pos) => assoc(item, values[pos], memo), {})
```

### Get all existing keys

```js
const allKeys = curry2(keys)('');

allKeys(root);
['test', 'testa']
```

### Get all values for a given prefix

```js
const values = converge(map, [compose(curry2(flip(get)), nthArg(1)), keys])

values('te', root)
['value', 'value2']
```

### Get all elements of a given prefix

```js
const all = converge(zipObj, [keys, values])

all('te', root)
{ testa: 'value2', test: 'value' }
```

