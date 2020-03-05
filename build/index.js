"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Main_1 = __importDefault(require("./Main"));
var main = new Main_1.default();
var result = main.runTest();
for (var i = 0; i < result.length; i++) {
    console.log(result[i].toString());
}
;
