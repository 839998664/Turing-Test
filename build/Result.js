"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Result = /** @class */ (function () {
    function Result(m, b, specialCase) {
        this.m = m;
        this.b = b;
        this.isVertical = specialCase;
    }
    Result.getLineDetails = function (line) {
        var result = new Result(0, 0, false);
        var slope = 0;
        var isSpecial = false;
        var yIntercept = 0;
        slope = Result.calculateM(line);
        if (slope === -1) {
            isSpecial = true;
            result = new Result(slope, 1, isSpecial);
        }
        else {
            result = new Result(slope, Result.calculateYIntercept(line.point1, slope), isSpecial);
        }
        return result;
    };
    Result.calculateYIntercept = function (point, slope) {
        var b = point.y - (point.x * slope);
        return b;
    };
    Result.calculateM = function (line) {
        var numerator = line.point2.y - line.point1.y;
        var denom = line.point2.x - line.point1.x;
        if (denom === 0) {
            return -1;
        }
        else {
            return numerator / denom;
        }
    };
    Result.prototype.toString = function () {
        return "m: " + this.m + ", b: " + this.b + ", isSpecial: " + this.isVertical;
    };
    return Result;
}());
exports.default = Result;
