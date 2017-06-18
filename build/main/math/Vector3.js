"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var applyMixins_1 = require("./applyMixins");
var approx_1 = require("./approx");
var isNumber_1 = require("../checks/isNumber");
var isSpinorE3_1 = require("./isSpinorE3");
var isVectorE3_1 = require("./isVectorE3");
var Lockable_1 = require("./Lockable");
// import { mustBeNumber } from '../checks/mustBeNumber';
var mustBeVectorE3_1 = require("./mustBeVectorE3");
var randomRange_1 = require("./randomRange");
var readOnly_1 = require("../i18n/readOnly");
var Unit_1 = require("./Unit");
var wedgeXY_1 = require("./wedgeXY");
var wedgeYZ_1 = require("./wedgeYZ");
var wedgeZX_1 = require("./wedgeZX");
var COORD_X = 0;
var COORD_Y = 1;
var COORD_Z = 2;
// const BASIS_LABELS = ['e1', 'e2', 'e3'];
/**
 * Coordinates corresponding to basis labels.
 */
/*
function coordinates(m: VectorE3): number[] {
    return [m.x, m.y, m.z];
}
*/
var zero = function zero() {
    return [0, 0, 0];
};
var vector = function vector(x, y, z) {
    var coords = zero();
    coords[COORD_X] = x;
    coords[COORD_Y] = y;
    coords[COORD_Z] = z;
    return coords;
};
var magicCode = Math.random();
/**
 *
 */
var Vector3 = (function () {
    /**
     * Constructs a mutable vector.
     * This may only be used internally.
     */
    function Vector3(coords, uom, code) {
        if (code !== magicCode) {
            throw new Error("Use the static creation methods instead of the constructor");
        }
        this.coords_ = coords;
        this.modified_ = false;
        this.uom = Unit_1.Unit.mustBeUnit('uom', uom);
    }
    Object.defineProperty(Vector3.prototype, "length", {
        get: function () {
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "modified", {
        get: function () {
            return this.modified_;
        },
        set: function (modified) {
            if (this.isLocked()) {
                throw new Lockable_1.TargetLockedError('set modified');
            }
            this.modified_ = modified;
        },
        enumerable: true,
        configurable: true
    });
    Vector3.prototype.getComponent = function (i) {
        return this.coords_[i];
    };
    Object.defineProperty(Vector3.prototype, "x", {
        /**
         * The coordinate corresponding to the e1 basis vector.
         */
        get: function () {
            return this.coords_[COORD_X];
        },
        set: function (value) {
            if (this.isLocked()) {
                throw new Lockable_1.TargetLockedError('set x');
            }
            var coords = this.coords_;
            this.modified_ = this.modified_ || coords[COORD_X] !== value;
            coords[COORD_X] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "y", {
        /**
         * The coordinate corresponding to the e2 basis vector.
         */
        get: function () {
            return this.coords_[COORD_Y];
        },
        set: function (value) {
            if (this.isLocked()) {
                throw new Lockable_1.TargetLockedError('set y');
            }
            var coords = this.coords_;
            this.modified_ = this.modified_ || coords[COORD_Y] !== value;
            coords[COORD_Y] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "z", {
        /**
         * The coordinate corresponding to the e3 basis vector.
         */
        get: function () {
            return this.coords_[COORD_Z];
        },
        set: function (value) {
            if (this.isLocked()) {
                throw new Lockable_1.TargetLockedError('set z');
            }
            var coords = this.coords_;
            this.modified_ = this.modified_ || coords[COORD_Z] !== value;
            coords[COORD_Z] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "maskG3", {
        /**
         *
         */
        get: function () {
            return this.isZero() ? 0x0 : 0x2;
        },
        set: function (unused) {
            throw new Error(readOnly_1.readOnly('maskG3').message);
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     */
    Vector3.prototype.add = function (rhs, α) {
        if (α === void 0) { α = 1; }
        if (!this.isLocked()) {
            return Lockable_1.lock(this.clone().add(rhs, α));
        }
        else {
            this.x += rhs.x;
            this.y += rhs.y;
            this.z += rhs.z;
            this.uom = Unit_1.Unit.compatible(this.uom, rhs.uom);
            return this;
        }
    };
    /**
     *
     */
    Vector3.prototype.approx = function (n) {
        approx_1.approx(this.coords_, n);
        return this;
    };
    /**
     * Pre-multiplies the column vector corresponding to this vector by the matrix.
     * The result is applied to this vector.
     *
     * @param σ The 3x3 matrix that pre-multiplies this column vector.
     */
    Vector3.prototype.applyMatrix = function (σ) {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var n11 = σ.getElement(0, 0), n12 = σ.getElement(0, 1), n13 = σ.getElement(0, 2);
        var n21 = σ.getElement(1, 0), n22 = σ.getElement(1, 1), n23 = σ.getElement(1, 2);
        var n31 = σ.getElement(2, 0), n32 = σ.getElement(2, 1), n33 = σ.getElement(2, 2);
        this.x = n11 * x + n12 * y + n13 * z;
        this.y = n21 * x + n22 * y + n23 * z;
        this.z = n31 * x + n32 * y + n33 * z;
        return this;
    };
    /**
     *
     */
    Vector3.prototype.clone = function () {
        return Vector3.vector(this.x, this.y, this.z, this.uom);
    };
    /**
     *
     */
    Vector3.prototype.copy = function (source) {
        mustBeVectorE3_1.mustBeVectorE3('source', source);
        this.x = source.x;
        this.y = source.y;
        this.z = source.z;
        return this;
    };
    Vector3.prototype.cross = function (v) {
        return this.cross2(this, v);
    };
    /**
     * <code>this ⟼ a ✕ b</code>
     *
     * @param a
     * @param b
     * @returns a x b
     */
    Vector3.prototype.cross2 = function (a, b) {
        var ax = a.x, ay = a.y, az = a.z;
        var bx = b.x, by = b.y, bz = b.z;
        this.x = wedgeYZ_1.wedgeYZ(ax, ay, az, bx, by, bz);
        this.y = wedgeZX_1.wedgeZX(ax, ay, az, bx, by, bz);
        this.z = wedgeXY_1.wedgeXY(ax, ay, az, bx, by, bz);
        return this;
    };
    /**
     *
     */
    Vector3.prototype.direction = function () {
        var m = this.magnitude();
        return this.divByScalar(m);
    };
    /**
     *
     */
    Vector3.prototype.divByScalar = function (alpha) {
        this.x /= alpha;
        this.y /= alpha;
        this.z /= alpha;
        return this;
    };
    /**
     *
     */
    Vector3.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    };
    /**
     *
     */
    Vector3.prototype.dual = function (B) {
        this.x = -B.yz;
        this.y = -B.zx;
        this.z = -B.xy;
        return this;
    };
    Vector3.prototype.isZero = function () {
        return this.x === 0 && this.y === 0 && this.z === 0;
    };
    /**
     *
     */
    Vector3.prototype.magnitude = function () {
        return Math.sqrt(this.quaditude());
    };
    /**
     *
     */
    Vector3.prototype.mulByScalar = function (alpha) {
        this.x *= alpha;
        this.y *= alpha;
        this.z *= alpha;
        return this;
    };
    Vector3.prototype.neg = function () {
        return this.mulByScalar(-1);
    };
    /**
     *
     */
    Vector3.prototype.normalize = function (magnitude) {
        if (magnitude === void 0) { magnitude = 1; }
        var m = this.magnitude();
        return this.mulByScalar(magnitude).divByScalar(m);
    };
    /**
     *
     */
    Vector3.prototype.write = function (destination) {
        destination.x = this.x;
        destination.y = this.y;
        destination.z = this.z;
        return this;
    };
    /**
     *
     */
    Vector3.prototype.zero = function () {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        return this;
    };
    /**
     * Computes the square of this vector.
     * This is an alias for the `squaredNorm` method.
     */
    Vector3.prototype.quaditude = function () {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        return x * x + y * y + z * z;
    };
    /**
     *
     */
    Vector3.prototype.quadranceTo = function (point) {
        var Δx = this.x - point.x;
        var Δy = this.y - point.y;
        var Δz = this.z - point.z;
        return Δx * Δx + Δy * Δy + Δz * Δz;
    };
    /**
     *
     */
    Vector3.prototype.rotate = function (spinor) {
        if (spinor.a === 1 && spinor.xy === 0 && spinor.yz === 0 && spinor.zx === 0) {
            return this;
        }
        else {
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var a = spinor.xy;
            var b = spinor.yz;
            var c = spinor.zx;
            var w = spinor.a;
            var ix = w * x - c * z + a * y;
            var iy = w * y - a * x + b * z;
            var iz = w * z - b * y + c * x;
            var iw = b * x + c * y + a * z;
            this.x = ix * w + iw * b + iy * a - iz * c;
            this.y = iy * w + iw * c + iz * b - ix * a;
            this.z = iz * w + iw * a + ix * c - iy * b;
            return this;
        }
    };
    /**
     * Computes the square of this vector.
     * This is an alias for the `quaditude` method.
     */
    Vector3.prototype.squaredNorm = function () {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        return x * x + y * y + z * z;
    };
    Vector3.prototype.stress = function (σ) {
        this.x *= σ.x;
        this.y *= σ.y;
        this.z *= σ.z;
        return this;
    };
    /**
     *
     */
    Vector3.prototype.sub = function (rhs) {
        this.x -= rhs.x;
        this.y -= rhs.y;
        this.z -= rhs.z;
        return this;
    };
    /**
     * Returns a string containing a number in exponential notation.
     */
    Vector3.prototype.toExponential = function (fractionDigits) {
        return "new Vector3(" + this.x.toExponential(fractionDigits) + ", " + this.y.toExponential(fractionDigits) + ", " + this.z.toExponential(fractionDigits) + ")";
    };
    /**
     * Returns a string containing a number in fixed-point notation.
     */
    Vector3.prototype.toFixed = function (fractionDigits) {
        return "new Vector3(" + this.x.toFixed(fractionDigits) + ", " + this.y.toFixed(fractionDigits) + ", " + this.z.toFixed(fractionDigits) + ")";
    };
    /**
     * Returns a string containing a number represented either in exponential or fixed-point notation
     * with a specified number of digits.
     */
    Vector3.prototype.toPrecision = function (precision) {
        return "new Vector3(" + this.x.toPrecision(precision) + ", " + this.y.toPrecision(precision) + ", " + this.z.toPrecision(precision) + ")";
    };
    /**
     * Returns a string representation of this vector.
     */
    Vector3.prototype.toString = function (radix) {
        return "new Vector3(" + this.x.toString(radix) + ", " + this.y.toString(radix) + ", " + this.z.toString(radix) + ")";
    };
    Vector3.prototype.__add__ = function (rhs) {
        if (isVectorE3_1.isVectorE3(rhs) && !isSpinorE3_1.isSpinorE3(rhs)) {
            var uom = Unit_1.Unit.compatible(this.uom, rhs.uom);
            return Vector3.vector(this.x + rhs.x, this.y + rhs.y, this.z + rhs.z, uom);
        }
        else {
            return void 0;
        }
    };
    Vector3.prototype.__div__ = function (rhs) {
        if (isNumber_1.isNumber(rhs)) {
            return Vector3.vector(this.x / rhs, this.y / rhs, this.z / rhs, this.uom);
        }
        else {
            return void 0;
        }
    };
    Vector3.prototype.__rdiv__ = function (lhs) {
        return void 0;
    };
    Vector3.prototype.__mul__ = function (rhs) {
        if (isNumber_1.isNumber(rhs)) {
            return Vector3.vector(this.x * rhs, this.y * rhs, this.z * rhs, this.uom);
        }
        else {
            return void 0;
        }
    };
    Vector3.prototype.__pos__ = function () {
        return Lockable_1.lock(Vector3.copy(this));
    };
    Vector3.prototype.__neg__ = function () {
        return Lockable_1.lock(Vector3.copy(this).neg());
    };
    Vector3.prototype.__radd__ = function (lhs) {
        if (isVectorE3_1.isVectorE3(lhs) && !isSpinorE3_1.isSpinorE3(lhs)) {
            var uom = Unit_1.Unit.compatible(lhs.uom, this.uom);
            return Vector3.vector(lhs.x + this.x, lhs.y + this.y, lhs.z + this.z, uom);
        }
        else {
            return void 0;
        }
    };
    Vector3.prototype.__rmul__ = function (lhs) {
        if (isNumber_1.isNumber(lhs)) {
            return Vector3.vector(lhs * this.x, lhs * this.y, lhs * this.z, this.uom);
        }
        else {
            return void 0;
        }
    };
    Vector3.prototype.__rsub__ = function (lhs) {
        if (isVectorE3_1.isVectorE3(lhs) && !isSpinorE3_1.isSpinorE3(lhs)) {
            var uom = Unit_1.Unit.compatible(lhs.uom, this.uom);
            return Vector3.vector(lhs.x - this.x, lhs.y - this.y, lhs.z - this.z, uom);
        }
        else {
            return void 0;
        }
    };
    Vector3.prototype.__sub__ = function (rhs) {
        if (isVectorE3_1.isVectorE3(rhs) && !isSpinorE3_1.isSpinorE3(rhs)) {
            var uom = Unit_1.Unit.compatible(this.uom, rhs.uom);
            return Vector3.vector(this.x - rhs.x, this.y - rhs.y, this.z - rhs.z, uom);
        }
        else {
            return void 0;
        }
    };
    Vector3.copy = function (vector) {
        return Vector3.vector(vector.x, vector.y, vector.z, vector.uom);
    };
    /**
     * Constructs a vector by computing the dual of a bivector.
     */
    Vector3.dual = function (B) {
        return Vector3.zero.clone().dual(B);
    };
    /**
     * <p>
     * Computes a unit vector with a random direction.
     * </p>
     */
    Vector3.random = function () {
        var x = randomRange_1.randomRange(-1, 1);
        var y = randomRange_1.randomRange(-1, 1);
        var z = randomRange_1.randomRange(-1, 1);
        return Vector3.vector(x, y, z).normalize();
    };
    /**
     * @param x
     * @param y
     * @param z
     * @param uom
     */
    Vector3.vector = function (x, y, z, uom) {
        return new Vector3(vector(x, y, z), uom, magicCode);
    };
    /**
     *
     */
    Vector3.e1 = Vector3.vector(1, 0, 0, void 0);
    /**
     *
     */
    Vector3.e2 = Vector3.vector(0, 1, 0, void 0);
    /**
     *
     */
    Vector3.e3 = Vector3.vector(0, 0, 1, void 0);
    /**
     *
     */
    Vector3.zero = Vector3.vector(0, 0, 0, void 0);
    return Vector3;
}());
exports.Vector3 = Vector3;
applyMixins_1.applyMixins(Vector3, [Lockable_1.LockableMixin]);
Vector3.zero.lock();
Vector3.e1.lock();
Vector3.e2.lock();
Vector3.e3.lock();
