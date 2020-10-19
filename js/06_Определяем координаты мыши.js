'use strict';

document.querySelector('#test').addEventListener('mousemove', (e) => {
    e = e || window.e;
    console.log(e);
    document.querySelector('#offx').innerHTML = e.offsetX;
    document.querySelector('#offy').innerHTML = e.offsetY;
});