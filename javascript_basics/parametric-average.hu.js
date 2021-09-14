'use strict';

// Írj egy programot, ami kiszámítja 1-től egy megadott számig
// a számok összegét és átlagát
//
// Például:
// Megadott szám: 5
// Kimenet: Összeg: 15, átlag: 3

let k = 1;
let number = 24;
let sum = 0;
do {
    sum += k;
    k += 1;
} while (k < number + 1);
console.log("Sum: " + sum + " Average: " + sum / number);