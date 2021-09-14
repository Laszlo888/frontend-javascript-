'use strict';

const lineCount = 6;


// Írj egy programot, ami rajzol
// egy olyan négyzetet, mint ez:
//
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// A négyzetnek annyi sora legyen, mint a lineCount értéke

let diagonal = '';
for (let i = 1; i < lineCount + 1; i++) {
    if (i == 1 || i == lineCount) {
        for (let k = 1; k < lineCount + 1; k++) {
            diagonal += '%'
        }
        console.log(diagonal)
        diagonal = '';
    } else {
        diagonal += "%";
        for (let k = 2; k < lineCount; k++) {
            if (i == k) { diagonal += '%'; } else { diagonal += ' '; }
        }
        diagonal += '%';
        console.log(diagonal);
        diagonal = '';
    }
}