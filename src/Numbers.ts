import { SortData } from "./SortData";

export class Numbers extends SortData {
    constructor(public numbers: number[]) { 
        super();
    }
    
    compare(indexLeft:number, indexRight:number): boolean {
        return this.numbers[indexLeft] > this.numbers[indexRight];
    }

    swap(indexLeft:number, indexRight:number): void {
        const left = this.numbers[indexLeft];
        this.numbers[indexLeft] = this.numbers[indexRight];
        this.numbers[indexRight] = left;
    }

    get length(): number { //"accessor". "get" => accessed via numvers.length and not .length() !
        return this.numbers.length;
    }
}