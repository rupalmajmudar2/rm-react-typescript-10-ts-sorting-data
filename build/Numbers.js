"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numbers = void 0;
const SortData_1 = require("./SortData");
class Numbers extends SortData_1.SortData {
    constructor(numbers) {
        super();
        this.numbers = numbers;
    }
    compare(indexLeft, indexRight) {
        return this.numbers[indexLeft] > this.numbers[indexRight];
    }
    swap(indexLeft, indexRight) {
        const left = this.numbers[indexLeft];
        this.numbers[indexLeft] = this.numbers[indexRight];
        this.numbers[indexRight] = left;
    }
    get length() {
        return this.numbers.length;
    }
}
exports.Numbers = Numbers;
