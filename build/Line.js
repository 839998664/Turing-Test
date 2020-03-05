"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Line = /** @class */ (function () {
    function Line(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
    }
    Line.prototype.getKey = function () {
        return this.point1.getKey() + "," + this.point2.getKey();
    };
    ;
    Line.prototype.isCollinear = function (point) {
        var result = false;
        result = this.testCollinearity(point);
        return result;
    };
    Line.prototype.testCollinearity = function (point3) {
        var result = false;
        if (this.calculateArea(this.point1, this.point2, point3) === 0) {
            result = true;
        }
        return result;
    };
    Line.prototype.calculateArea = function (p1, p2, p3) {
        //Skipping multiplication by 0.5 to avoid floating point arithmetic
        var area = (p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y));
        return area;
    };
    return Line;
}());
exports.default = Line;
