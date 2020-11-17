// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let typeToReturnObj = ['number', 'boolean'];
  if (typeToReturnObj.includes(typeof obj) || obj === null) {
    return `${obj}`;
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  } else if (Array.isArray(obj) && obj.length === 0) {
    return '[]';
  } else if (typeof obj === 'object' && Object.keys(obj).length === 0) {
    return '{}';
  }

  if (Array.isArray(obj)) {
    let string = '[';
    obj.forEach((el, index) => {
      string += stringifyJSON(el);
      if (obj.length - 1 !== index) {
        string += ',';
      }
    });
    return string + ']';
  }

  if (typeof obj === 'object' && Object.keys(obj).length > 0) {
    let string = '{';
    Object.keys(obj).forEach((key, index) => {

      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        return {};
      }

      string = string + stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      if (Object.keys(obj).length - 1 !== index) {
        string += ',';
      }
    });
    return string + '}';
  }

};
