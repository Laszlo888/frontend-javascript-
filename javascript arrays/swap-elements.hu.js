'use strict';
// Hozz létre egy `names` változót az alábbi tartalommal:
// `["Arthur", "Boe", "Chloe"]`
// Cseréld fel a names első és harmadik elemét!
// Logold ki az eredményt a konzolra!

let names = ["Arthur", "Boe", "Chloe"];
let temp = names[0];
names[0] = names[2];
names[2] = temp;

console.log(names);