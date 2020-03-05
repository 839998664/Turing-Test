import Line from "./Line";
import Point from "./Point";

class Result {
    m: number;
    b: number;
    isVertical: boolean;

    constructor(m: number, b: number, specialCase: boolean) {
        this.m = m;
        this.b = b;
        this.isVertical = specialCase;
    }
    static getLineDetails(line: Line): Result {
        let result: Result = new Result(0, 0, false);
        let slope: number = 0;
        let isSpecial = false;
        let yIntercept: number = 0;

        slope = Result.calculateM(line);

        if (slope === -1) {
            isSpecial = true;
            result = new Result(slope, 1, isSpecial);
        } else {
            result = new Result(slope, Result.calculateYIntercept(line.point1, slope), isSpecial);
        }

        return result;
    }
    static calculateYIntercept(point: Point, slope: number): number {
        let b = point.y - (point.x * slope);
        return b;
    }
    static calculateM(line: Line) {
        let numerator: number = line.point2.y - line.point1.y;
        let denom: number = line.point2.x - line.point1.x;
        if (denom === 0) {
            return -1;
        } else {
            return numerator / denom;
        }
    }
    toString(): string {
        return `m: ${this.m}, b: ${this.b}, isSpecial: ${this.isVertical}`;
    }
}
export default Result;