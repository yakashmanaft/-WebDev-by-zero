'use sctrict';

// Задача про палиндромы. Это слово, которое читается со всех сторон одинаково. Минус подхода: Если будут смайлики, они таким способ развернутые точно не дадут нужного...

const palindrom = str => {
    // Перевести строку в нижний регистр
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');

        // // Переводим строку в массив
        // let str2 = str.split('');
        //     // Разворачиваем массив
        //     str2 = str2.reverse();
        //     //Объединяем в строку
        //     str2 = str2.join('');
        //     if(str == str2) return true;
        //     else return false;
}

console.log(palindrom('abba'));