'use strict';
// Hozz létre egy `firstArrayOfNumbers` változót az alábbi tartalommal:
// `[1, 2, 3]`
// Hozz létre egy `secondArrayOfNumbers` változót az alábbi tartalommal:
// `[4, 5]`
// Logold ki a konzolra, hogy 'secondArrayOfNumbers hosszabb, mint a
// firstArrayOfNumbers' hogyha a 'secondArrayOfNumbers'-ben több elem van, mint
// a 'firstArrayOfNumbers'-ben

let firstArrayOfNumbers = [1, 2, 3];
let secondArrayOfNumbers = [4, 5];
if (firstArrayOfNumbers.length > secondArrayOfNumbers.length) {
    console.log("firstArrayOfNumbers is the longer one");
} else if (secondArrayOfNumbers.length > firstArrayOfNumbers.length) {
    console.log("secondArrayOfNumbers is longer");
} else {
    console.log("They are equal long.");
}