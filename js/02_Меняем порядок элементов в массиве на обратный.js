'use sctrict';

// Реализуем метод, меняющий порядок элементов в массиве на обратный, без использования сторонних библиотек

let a = [2, 5, 12, 3, 78, 90];
let b = [1, 2, 3, 4, 5, 88];

console.log(a.reverse());

function r1(a) {
    return a.reverse()
}

console.log(r1(a));

function r2(a) {
    res = [];
    a.forEach(element => {
        res.unshift(element);
    });
    return res;
}

function r3(a) {
    res = [];
    for (let i = a.length - 1; i >= 0; i--) {
        res.push(a[i]);
    }
    return res;
}

// console.log(r2(b));
console.log(r3(b));
