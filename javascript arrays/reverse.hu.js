'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Fordítsd meg a bejárás sorrendjét, kezdd a végéről!
// - beéptett metódussal
// - egy átmeneti arrayt létrehozva, és egy ciklus segítségével
// Logold ki a konzolra a megfordított numbers tömb mindegyik elemét

let numbers = [3, 4, 5, 6, 7];

numbers.reverse();

console.log(numbers);

numbers = [3, 4, 5, 6, 7];
let temp = [];

for (let i = numbers.length - 1; i > -1; i--) {
    temp.push(numbers[i]);
}

console.log(temp);