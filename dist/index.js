"use strict";
//Basic types
const id = 2;
const company = 'Youtube';
const isTrue = true;
let x = 'Hello';
const ids = [1, 2, 3, 4, 5]; //Array of numbers
const arr = [1, true, 'Hello']; //Array of any (any types)
//Tuple
let person = [1, 'Name', true];
//Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Mary'],
];
//Union
let input = 25;
function checkInput(input) {
    if (typeof input === 'string') {
        return;
    }
    if (typeof input === 'number') {
        return;
    }
    return;
}
//Enum
