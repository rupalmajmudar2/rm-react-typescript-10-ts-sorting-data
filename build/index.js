"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Numbers_1 = require("./Numbers");
const Strings_1 = require("./Strings");
const dateArray = [
    new Date(2009, 9, 24),
    new Date(2035, 9, 24),
    new Date(2001, 9, 24),
    new Date(2029, 9, 24),
];
const years = dateArray.map((date) => {
    return date.getFullYear();
});
console.log(dateArray);
const numbersData = new Numbers_1.Numbers(years);
//const sortData = new SortData(numbersData);
numbersData.sort();
console.log(numbersData.numbers);
const strData = new Strings_1.Strings('vdGryF');
console.log(strData.str);
//const sortData2 = new SortData(strData);
strData.sort();
console.log(strData.str);
