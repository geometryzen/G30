"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isZeroBivectorE3_1 = require("./isZeroBivectorE3");
var isZeroVectorE3_1 = require("./isZeroVectorE3");
/**
 * Returns true if all coordinates of the vector are exactly zero.
 */
function isZeroGeometricE3(m) {
    return isZeroVectorE3_1.isZeroVectorE3(m) && isZeroBivectorE3_1.isZeroBivectorE3(m) && m.a === 0 && m.b === 0;
}
exports.isZeroGeometricE3 = isZeroGeometricE3;
