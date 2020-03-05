import Point from "./Point";

class Line {
    point1: Point;
    point2: Point;

    constructor(point1: Point, point2: Point) {
        this.point1 = point1;
        this.point2 = point2;
    }
    getKey(): string {
        return `${this.point1.getKey()},${this.point2.getKey()}`;
    };
    isCollinear(point: Point): boolean {

        let result: boolean = false;

        result = this.testCollinearity(point);

        return result;
    }

    testCollinearity(point3: Point): boolean {
        let result: boolean = false;
        if (this.calculateArea(this.point1, this.point2, point3) === 0) {
            result = true;
        }
        return result;
    }

    calculateArea(p1: Point, p2: Point, p3: Point): number {
        //Skipping multiplication by 0.5 to avoid floating point arithmetic
        let area: number = (p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y));

        return area;
    }
}

export default Line;