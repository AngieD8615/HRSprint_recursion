// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let elements = [];

  const checkChildNodes = function (parentNode) {

    if (parentNode.classList.value.includes(className)) {
      elements.push(parentNode);
    }

    if (parentNode.children.length === 0) {
      return;
    }

    for (var i = 0; i < parentNode.children.length; i++) {
      checkChildNodes(parentNode.children[i]);
    }
  };

  checkChildNodes(document.body);
  return elements;
};
