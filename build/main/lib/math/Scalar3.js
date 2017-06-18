"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scalar3 = (function () {
    function Scalar3(a, uom) {
        this.a_ = a;
        this.uom_ = uom;
    }
    Object.defineProperty(Scalar3.prototype, "a", {
        get: function () {
            return this.a_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scalar3.prototype, "uom", {
        get: function () {
            return this.uom_;
        },
        enumerable: true,
        configurable: true
    });
    Scalar3.prototype.mulByNumber = function (alpha) {
        return new Scalar3(alpha * this.a, this.uom);
    };
    return Scalar3;
}());
exports.Scalar3 = Scalar3;
