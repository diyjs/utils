# utils

JavaScript utility library.

```sh
npm install @diyjs/utils
```

## Type detection

### `isDefined(value)`

Checks if `value` is defined (not `undefined`).

```js
isDefined(null); // => true
isDefined(); // => false
```

### `isBoolean(value)`

Checks if `value` is a boolean.

```js
isBoolean(true); // => true
isBoolean(null); // => false
```

### `isNumber(value)`

Checks if `value` is a number.

```js
isNumber(1); // => true
isNumber('1'); // => false
```

### `isString(value)`

Checks if `value` is a string.

```js
isString('abc'); // => true
isString(1); // => false
```

### `isFunction(value)`

Checks if `value` is a function.

```js
isFunction(() => {}); // => true
isFunction(/abc/); // => false
```

### `isPlainObject(value)`

Checks if `value` is a plain object.

```js
isPlainObject({ x: 0, y: 0 }); // => true
isPlainObject([1, 2, 3]); // => false
```

### `isArray(value)`

Checks if `value` is an array.

```js
isArray([1, 2, 3]); // => true
isArray('abc'); // => false
```

## Placeholders

### `noop()`

Does nothing (no operation). Good as a default parameter.

```js
noop(); // => undefined
noop(3); // => undefined
```

### `identity(value)`

Returns `value`. Good as a default parameter.

```js
const ref = {};
identity(ref) === ref; // => true
```

## Function helpers

### `call(func)`

Calls `func` and returns its result.

```js
const ref = {};
const getRef = () => ref;
call(getRef) === getRef(); // => true
```

### `partial(func, ...partials)`

Creates a function that invokes `func` with `partials` prepended to the
arguments it receives.

```js
const sum = (a, b) => a + b;
const add2 = partial(sum, 2);
add2(1); // => 3
```

### `pipe(...funcs)`

Performs left-to-right
[function composition](<https://en.wikipedia.org/wiki/Function_composition_(computer_science)>).

```js
const sum = (a, b) => a + b;
const double = (x) => x * 2;
const customMessage = (x) => `result: ${x}`;
const foo = pipe(sum, double, customMessage);
foo(1, 2); // => 'result: 6'
```

## Object helpers

### `mapValues(object, iteratee)`

Creates an object with the same keys as `object` and values generated by running
each value of `object` through `iteratee`. Like `[].map` for objects.

```js
const foo = { a: 1, b: 2 };
const double = (x) => x * 2;
mapValues(foo, double); // => { a: 2, b: 4 }
```
