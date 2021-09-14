'use strict';

const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;

// Írj egy programot, ami kiszámítja, hogy hány másodperc
// van még hátra a napból úgy, hogy az aktuális időt a fenti változókkal
// lehet beállítani

let currentSecondsSum = currentHours * 3600 + currentMinutes * 60 + currentSeconds;
let leftSeconds = 86400 - currentSecondsSum;
console.log(leftSeconds + " seconds are left from this day.");