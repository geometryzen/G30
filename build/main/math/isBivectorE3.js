"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNull_1 = require("../checks/isNull");
var isNumber_1 = require("../checks/isNumber");
var isObject_1 = require("../checks/isObject");
/**
 * Determines whether the argument supports the BivectorE3 interface.
 * The argument must be a non-null object and must support the yz, zx, and xy numeric properties.
 */
function isBivectorE3(v) {
    if (isObject_1.isObject(v) && !isNull_1.isNull(v)) {
        return isNumber_1.isNumber(v.xy) && isNumber_1.isNumber(v.yz) && isNumber_1.isNumber(v.zx);
    }
    else {
        return false;
    }
}
exports.isBivectorE3 = isBivectorE3;
