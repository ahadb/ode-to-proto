const bind = require('./helpers/bind')

/**
 * Checks if value is empty. Deep-checks arrays and objects
 * Note: isEmpty([]) == true, isEmpty({}) == true, isEmpty([{0:false},"",0]) == true, isEmpty({0:1}) == false
 * @param value
 * @returns {boolean}
 * 
 * 
 */
function isEmpty(value){
  var isEmptyObject = function(a) {
    if (typeof a.length === 'undefined') { // it's an Object, not an Array
      var hasNonempty = Object.keys(a).some(function nonEmpty(element){
        return !isEmpty(a[element]);
      });
      return hasNonempty ? false : isEmptyObject(Object.keys(a));
    }

    return !a.some(function nonEmpty(element) { // check if array is really not empty as JS thinks
      return !isEmpty(element); // at least one element should be non-empty
    });
  };
  return (
    value == false
    || typeof value === 'undefined'
    || value == null
    || (typeof value === 'object' && isEmptyObject(value))
  );
}
/**
 * Extends and object
 * 
 * @param  {} x
 * @param  {} y
 * @returns {}
 */

function extend(x, y, thisArg) {
    forEach(y, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        x[key] = bind(val, thisArg);
      } else {
        x[key] = val;
      }
    });
    return x;
}
/**
 * @param  {} val
  * @returns {bool}
 */
function isArray(val) {
    return toString.call(val) === '[object Array]';
}

/**
 * @param  {} obj
 * @param  {} fn

 */
function forEach(obj, fn) {
    // pass if no value is provided as args
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
  
    if (typeof obj !== 'object') {
    
      obj = [obj];
    }
  
    if (isArray(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
  
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
}

module.exports = {
    isEmpty: isEmpty,
    extend: extend
}