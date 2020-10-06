// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  var resultNotUndefined = false;
  const helper = (obj) => {
    if (typeof obj === 'number') {
      result += obj;
    } else if (typeof obj === 'string') {
      result += `"${obj}"`;
    } else if (typeof obj === 'boolean') {
      result += `${obj}`;
    } else if (obj === null) {
      result += `${null}`;
    } else if (Array.isArray(obj) && obj.length === 0) {
      result += '[]';
    } else if (!Array.isArray(obj) && typeof obj === 'object' && Object.keys(obj).length === 0) {
      result += '{}';
    } else if (Array.isArray(obj) && obj.length !== 0) {
      for (var i = 0; i < obj.length; i++) {
        if (i === 0) {
          result += '[';
        }
        // console.log(obj[i]);
        helper(obj[i]);
        if (i !== obj.length - 1) {
          result += ',';
        }
        if (i === obj.length - 1) {
          result += ']';
        }
      }
    } else if (typeof obj === 'object' && Object.keys(obj).length !== 0) {
      for (var i = 0; i < Object.keys(obj).length; i++) {
        if (i === 0) {
          result += '{';
        }
        result += `"${Object.keys(obj)[i]}":`;
        if (obj[Object.keys(obj)[i]] === undefined || typeof obj[Object.keys(obj)[i]] === 'function') {
          resultNotUndefined = true;
          return undefined;
        }
        helper(obj[Object.keys(obj)[i]]);
        if (i !== Object.keys(obj).length - 1) {
          result += ',';
        }
        if (i === Object.keys(obj).length - 1) {
          result += '}';
        }
      }
    }

  };
  helper(obj);
  console.log(result);
  return (resultNotUndefined) ? undefined : result;
};

