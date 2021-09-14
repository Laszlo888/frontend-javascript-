'use strict';

const lineCount = 4;

// Írj egy programot, ami
// ilyen piramist rajzol:
//
//
//    *
//   ***
//  *****
// *******
//
// A piramisnak annyi sora legyen, mint amennyi a lineCount értéke

let pyramid = '';
for (let i = 1; i <= lineCount; i++) {
    for (let j = i; j < lineCount; j++) {
        pyramid += " ";
    }
    for (let k = 1; k < i * 2; k++) {
        pyramid += "*";
    }
    console.log(pyramid);
    pyramid = '';
}