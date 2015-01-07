var debounce = require('debounce');

module.exports = inViewport;

function inViewport(el){
  var rect = el.getBoundingClientRect();
  var innerHeight = window.innerHeight || document.documentElement.clientHeight;
  var innerWidth = window.innerWidth || document.documentElement.clientWidth;

  return rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= innerHeight
    && rect.right <= innerWidth;
};

inViewport.watch = function(el, fn){
  var state;
  var check = function(){
    var cur = inViewport(el);
    if (cur !== state) {
      state = cur;
      fn(state);
    }
  };
  var immediate = true;
  var onscroll = debounce(check, 100, immediate);

  document.addEventListener('scroll', onscroll);
  check();

  return function unwatch(){
    document.removeEventListener('scroll', onscroll);
  };
};

