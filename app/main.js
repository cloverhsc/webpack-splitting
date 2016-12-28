var a1 = require('./chunk1');
var a2 = require('./chunk2');
var element = document.createElement('h1');
element.innerHTML = 'Hello Clover ' + '\n' + a1.chunk1 + '\n' + a2.chunk2;
document.body.appendChild(element);

$('body').css('color', 'red');
