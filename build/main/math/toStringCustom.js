"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringFromCoordinates_1 = require("./stringFromCoordinates");
function toStringCustom(coordinates, coordToString, labels, uom) {
    var quantityString = stringFromCoordinates_1.stringFromCoordinates(coordinates, coordToString, labels, uom);
    return quantityString;
}
exports.toStringCustom = toStringCustom;
