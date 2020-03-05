"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __importDefault(require("./Point"));
var Line_1 = __importDefault(require("./Line"));
var Result_1 = __importDefault(require("./Result"));
var Main = /** @class */ (function () {
    function Main() {
        this.dataMap = new Map();
    }
    Main.prototype.runTest = function () {
        var count = 0;
        var dataset = Point_1.default.loadDataset();
        var result = new Array();
        for (var i = 0; i < dataset.length; i++) {
            for (var j = i + 1; j < dataset.length; j++) {
                var line = new Line_1.default(dataset[i], dataset[j]);
                for (var k = j + 1; k < dataset.length; k++) {
                    if (this.dataMap.get(line.getKey()) && line.isCollinear(dataset[k])) {
                        this.dataMap.set(line.getKey(), (this.dataMap.get(line.getKey()) || 0) + 1);
                    }
                    else if (line.isCollinear(dataset[k])) {
                        this.dataMap.set(line.getKey(), 1);
                        if (!this.isDuplicate(result, Result_1.default.getLineDetails(line))) {
                            result.push(Result_1.default.getLineDetails(line));
                        }
                    }
                }
            }
        }
        return result;
    };
    Main.prototype.isDuplicate = function (result, item) {
        var returnValue = false;
        for (var p = 0; p < result.length; p++) {
            if (result[p].m === item.m && item.b === result[p].b) {
                return true;
            }
        }
        return returnValue;
    };
    return Main;
}());
module.exports = Main;
