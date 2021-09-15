'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[1, 2, 3, 8, 5, 6]`
// Változtasd meg a 8-as számot 4-essé a map metódussal
// Logold ki a 4. elemet

let numbers = [1, 2, 3, 8, 5, 6];
let changedNumbers = numbers.map(nb => nb / 2);
console.log(changedNumbers[3]);