'use strict';
// Hozz létre egy `animals` változót az alábbi tartalommal:
// `['koal', 'pand', 'zebr']`
// Minden elemhez fűzz hozzá egy "a" betűt
// Próbálj meg beépített metódust használni ciklus helyett!

let animals = ['koal', 'pand', 'zebr'];
animals = animals.map(an => an + 'a');
console.log(animals);