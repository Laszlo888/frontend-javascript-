'use strict';

// Írj egy programot, ami egy téglatest 3 oldalát tartalmazza változókban (floats)
// A program írja ki a felületét és térfogatát a testnek ilyen formátumban:
//
// Felület: 600
// Térfogat: 1000

const sidea = 12.1;
const sideb = 23.3;
const sidec = 34.7;
console.log(
    "Surface Area: " + (2 * (sidea * sideb + sidea * sidec + sideb * sidec)));
console.log("Volume: " + (sidea * sideb * sidec));