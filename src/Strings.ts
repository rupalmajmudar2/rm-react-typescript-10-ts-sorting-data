import { SortData } from "./SortData";

export class Strings extends SortData {
    constructor(public str: string) { 
        super();
    }
    
    compare(indexLeft:number, indexRight:number): boolean {
        return this.str[indexLeft].toLowerCase() > this.str[indexRight].toLowerCase();
    }

    swap(indexLeft: number, indexRight: number): void {
        const letters = [...this.str];
        const left = letters[indexLeft];
        letters[indexLeft] = letters[indexRight];
        letters[indexRight] = left;

        this.str = letters.join('');
    }

    get length(): number { //"accessor". "get" => accessed via numvers.length and not .length() !
        return this.str.length;
    }
}