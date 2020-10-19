'use strict';

document.addEventListener('click', (e) => {
    e = e || window.e;
    if(e.target.tagName == 'IMG'){
        e.target.classList.toggle('bordered');
    }
})