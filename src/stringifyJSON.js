// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
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
    }



  };
  helper(obj);
  return result;
};


var testToString = [1, 2, 'hi', true];
var testNumToString = 1;
var testStringToString = 'hello world';
console.log(stringifyJSON (testNumToString));
console.log(typeof null);