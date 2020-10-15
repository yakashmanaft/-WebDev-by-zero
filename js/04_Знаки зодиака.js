'use strict';

document.querySelector('button').onclick = () => {
    let day = +document.querySelector('#day').nodeValue;
    let month = +document.querySelector('#month').nodeValue;
    // строка 2 и 11.. 2 больше...
    // Тем самым необходимо перевести в число
    // Так как инпуты дают строку
    
    // if ( (month == 12 && day >= 22) || (month == 1 && day <= 19)) alert('Козерог');

    // if (month == 12 && day >= 22) alert('Козерог');
    // else if (month == 1 && day <= 19) alert('Козерог');

    if (month == 1) {
        if (day <= 19) alert('Козерог');
        else alert('Водолей');
    }
}