
function createCache(fn) {
  var value = {};
  return function() {
    var index = JSON.stringify( Array.prototype.slice.call(arguments));
    if (value[index] === undefined) {
      value[index] = fn.apply(this, arguments);
    }
    return value[index];
  };
}
