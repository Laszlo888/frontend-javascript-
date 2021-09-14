'use strict';

const lineCount = 7;


// Írj egy programot, ami rajzol egy
// olyan rombuszt, mlet ez:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// A rombusznak annyi sora legyen, mlet a lineCount értéke

let diamond = '';
for (let i = 1; i <= lineCount / 2 + 1; i++) {
    for (let j = 1; j <= lineCount / 2 + 1 - i; j++) {
        diamond += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
        diamond += '*';
    }
    console.log(diamond);
    diamond = '';
}

let diamond2 = '';
for (let b = lineCount / 2; b > 0; b--) {
    for (let c = 0; c <= lineCount / 2 - b; c++) {
        diamond2 += " ";
    }
    for (let d = 1; d < b * 2 - 1; d++) {
        diamond2 += '*';
    }
    console.log(diamond2);
    diamond2 = '';
}