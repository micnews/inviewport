var inViewport = require('./');

var el = document.createElement('div');
el.style.width = '100px';
el.style.height = '100px';
el.style.position = 'absolute';
el.style.top = '3000px';
el.style.backgroundColor = 'pink';

document.body.appendChild(el);
document.body.appendChild(document.createTextNode(
  'Watch the console and scroll down ;)'
));

var button = document.createElement('button');
button.style.position = 'fixed';
button.appendChild(document.createTextNode(
  'In viewport?'
));
button.addEventListener('click', function(){
  alert('In viewport: ' + inViewport(el));
});
document.body.appendChild(button);

inViewport.watch(el, function(inside){
  console.log('inside: ', inside);
});
