"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dataset_1 = __importDefault(require("./dataset"));
var Point = /** @class */ (function () {
    function Point(xCord, yCord) {
        this.x = xCord;
        this.y = yCord;
    }
    Point.prototype.getKey = function () {
        return this.x + "," + this.y;
    };
    Point.loadDataset = function () {
        var ds = new Array();
        for (var i = 0; i < dataset_1.default.length; i++) {
            var item = new Point(dataset_1.default[i][0], dataset_1.default[i][1]);
            ds.push(item);
        }
        return ds;
    };
    return Point;
}());
exports.default = Point;
