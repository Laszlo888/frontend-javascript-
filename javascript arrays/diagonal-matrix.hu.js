'use strict';
// Hozz létre dinamikusan* egy kétdimenziós tömböt!
// Tartalma az alábbi mátrix** legyen.
// Használj ciklust hozzá!

//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0

// Logold ki a mátrixot a konzolra.
//
// * a mérete egy változóból érkezzen, így téve dinamikussá a mátrix létrehozását
// ** ne ijedj meg a kifejezéstől, egy mátrix: tömbök a tömbben

let matrixLength = 4;
let numbers = [];
let numbersInside = [];
let str = '';

for (let j = 1; j < matrixLength + 1; j++) {
    for (let k = matrixLength; k > 0; k--) {
        if (j != k) {
            numbersInside.push(0);
            str += '0 ';
        } else {
            numbersInside.push(1);
            str += '1 ';
        }
    }
    console.log(str);
    str = '';
    numbers.push(numbersInside);
    numbersInside = [];
}

console.log('');
// or we can print table
console.table(numbers);