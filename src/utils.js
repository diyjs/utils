// Type detection

export const isDefined = (value) => typeof value !== 'undefined';
export const isBoolean = (value) => typeof value === 'boolean';
export const isNumber = (value) => typeof value === 'number';
export const isString = (value) => typeof value === 'string';
export const isFunction = (value) => typeof value === 'function';
export const isPlainObject = (value) => value?.constructor === Object;
export const isArray = Array.isArray;

// Placeholders

export const noop = () => {};
export const identity = (value) => value;

// Function helpers

export const call = (func) => func();

export const partial = (func, ...partials) => {
  return (...args) => func(...partials, ...args);
};

export const pipe = (...funcs) => {
  const source = funcs.shift();
  return (...args) => funcs.reduce((acc, func) => func(acc), source(...args));
};

// Object helpers

export const mapValues = (object, iteratee) => {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [key, iteratee(value)])
  );
};
