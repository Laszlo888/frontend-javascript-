'use strict';

const lineCount = 6;

// Írj egy programot, ami rajzol
// egy ilyen négyzetet:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// A négyzetnek annyi sora legyen, mint a lineCount értéke

let square = '';
for (let i = 1; i < lineCount + 1; i++) {
    if (i == 1 || i == lineCount) {
        for (let k = 1; k < lineCount + 1; k++) {
            square += '%'
        }
        console.log(square)
        square = '';
    } else {
        square += "%";
        for (let k = 1; k < lineCount - 1; k++) {
            square += ' ';
        }
        square += '%';
        console.log(square);
        square = '';
    }
}