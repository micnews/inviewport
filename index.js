
module.exports = function inViewport(el) {
  var rect = el.getBoundingClientRect();
  var innerHeight = window.innerHeight || document.documentElement.clientHeight;
  var innerWidth = window.innerWidth || document.documentElement.clientWidth;

  return rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= innerHeight
    && rect.right <= innerWidth;
};

