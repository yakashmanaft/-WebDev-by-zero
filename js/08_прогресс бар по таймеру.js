'use strict';

function userProgress (time) {
    let start = 0;
    var time = Math.round(time * 1000 / 100);
    let progressElement = document.getElementById('user-progress'); // Элемент прогресс бара
    let intervalId = setInterval(function(){
        if(start > 100) {
            clearInterval(intervalId);
            userProgressCallback();
        }else {
            progressElement.value = start;   
        }
        start++;
    }, time);
}

function userProgressCallback() {
    document.querySelector('.hidden-block').style.display = 'block';
}

userProgress(5);