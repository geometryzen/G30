"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var applyMixins_1 = require("./applyMixins");
var approx_1 = require("./approx");
var dotVectorCartesianE3_1 = require("./dotVectorCartesianE3");
var Lockable_1 = require("./Lockable");
var mulSpinorE3YZ_1 = require("./mulSpinorE3YZ");
var mulSpinorE3ZX_1 = require("./mulSpinorE3ZX");
var mulSpinorE3XY_1 = require("./mulSpinorE3XY");
var mulSpinorE3alpha_1 = require("./mulSpinorE3alpha");
var mustBeInteger_1 = require("../checks/mustBeInteger");
var mustBeNumber_1 = require("../checks/mustBeNumber");
var randomRange_1 = require("./randomRange");
var readOnly_1 = require("../i18n/readOnly");
var rotorFromDirectionsE3_1 = require("./rotorFromDirectionsE3");
var toStringCustom_1 = require("./toStringCustom");
var Unit_1 = require("./Unit");
var wedgeXY_1 = require("./wedgeXY");
var wedgeYZ_1 = require("./wedgeYZ");
var wedgeZX_1 = require("./wedgeZX");
// Constants for the coordinate indices into the coords array.
var COORD_YZ = 0;
var COORD_ZX = 1;
var COORD_XY = 2;
var COORD_SCALAR = 3;
var BASIS_LABELS = ['e23', 'e31', 'e12', '1'];
/**
 * Coordinates corresponding to basis labels.
 */
function coordinates(m) {
    return [m.yz, m.zx, m.xy, m.a];
}
var magicCode = Math.random();
/**
 * A mutable representation of a spinor with cartesian coordinates in 3 dimensions.
 */
var Spinor3 = (function () {
    /**
     *
     */
    function Spinor3(coords, uom, code) {
        if (code !== magicCode) {
            throw new Error("Use the static creation methods instead of the constructor");
        }
        this.coords_ = coords;
        this.modified_ = false;
        this.uom = Unit_1.Unit.mustBeUnit('uom', uom);
    }
    Object.defineProperty(Spinor3.prototype, "modified", {
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
    Object.defineProperty(Spinor3.prototype, "yz", {
        /**
         * The coordinate corresponding to the <b>e</b><sub>23</sub> basis bivector.
         */
        get: function () {
            return this.coords_[COORD_YZ];
        },
        set: function (yz) {
            if (this.isLocked()) {
                throw new Lockable_1.TargetLockedError('set yz');
            }
            mustBeNumber_1.mustBeNumber('yz', yz);
            var coords = this.coords_;
            this.modified_ = this.modified_ || coords[COORD_YZ] !== yz;
            coords[COORD_YZ] = yz;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinor3.prototype, "zx", {
        /**
         * The coordinate corresponding to the <b>e</b><sub>31</sub> basis bivector.
         */
        get: function () {
            return this.coords_[COORD_ZX];
        },
        set: function (zx) {
            if (this.isLocked()) {
                throw new Lockable_1.TargetLockedError('zx');
            }
            mustBeNumber_1.mustBeNumber('zx', zx);
            var coords = this.coords_;
            this.modified_ = this.modified_ || coords[COORD_ZX] !== zx;
            coords[COORD_ZX] = zx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinor3.prototype, "xy", {
        /**
         * The coordinate corresponding to the <b>e</b><sub>12</sub> basis bivector.
         */
        get: function () {
            return this.coords_[COORD_XY];
        },
        set: function (xy) {
            if (this.isLocked()) {
                throw new Lockable_1.TargetLockedError('xy');
            }
            mustBeNumber_1.mustBeNumber('xy', xy);
            var coords = this.coords_;
            this.modified_ = this.modified_ || coords[COORD_XY] !== xy;
            coords[COORD_XY] = xy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinor3.prototype, "a", {
        /**
         * The coordinate corresponding to the <b>1</b> basis scalar.
         */
        get: function () {
            return this.coords_[COORD_SCALAR];
        },
        set: function (α) {
            if (this.isLocked()) {
                throw new Lockable_1.TargetLockedError('a');
            }
            mustBeNumber_1.mustBeNumber('α', α);
            var coords = this.coords_;
            this.modified_ = this.modified_ || coords[COORD_SCALAR] !== α;
            coords[COORD_SCALAR] = α;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinor3.prototype, "length", {
        get: function () {
            return 4;
        },
        enumerable: true,
        configurable: true
    });
    Spinor3.prototype.getComponent = function (index) {
        return this.coords_[index];
    };
    Object.defineProperty(Spinor3.prototype, "maskG3", {
        /**
         *
         */
        get: function () {
            var α = this.a;
            var yz = this.yz;
            var zx = this.zx;
            var xy = this.xy;
            var m = 0x0;
            if (α !== 0) {
                m += 0x1;
            }
            if (yz !== 0 || zx !== 0 || xy !== 0) {
                m += 0x4;
            }
            return m;
        },
        set: function (unused) {
            throw new Error(readOnly_1.readOnly('maskG3').message);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * this ⟼ this + α
     *
     * @param α
     * @returns this + α
     */
    Spinor3.prototype.addScalar = function (α, uom) {
        mustBeNumber_1.mustBeNumber('α', α);
        this.a += α;
        return this;
    };
    Spinor3.prototype.arg = function () {
        if (this.isLocked()) {
            return Lockable_1.lock(this.clone().arg());
        }
        else {
            return this.log().grade(2);
        }
    };
    Spinor3.prototype.approx = function (n) {
        approx_1.approx(this.coords_, n);
        return this;
    };
    /**
     * Returns an unlocked (mutable) copy of `this`.
     */
    Spinor3.prototype.clone = function () {
        return Spinor3.spinor(this.yz, this.zx, this.xy, this.a);
    };
    /**
     *
     */
    Spinor3.prototype.copy = function (spinor) {
        this.a = spinor.a;
        this.xy = spinor.xy;
        this.yz = spinor.yz;
        this.zx = spinor.zx;
        return this;
    };
    /**
     *
     */
    Spinor3.prototype.divByScalar = function (alpha) {
        if (alpha !== 1) {
            this.a /= alpha;
            this.xy /= alpha;
            this.yz /= alpha;
            this.zx /= alpha;
        }
        return this;
    };
    Spinor3.prototype.dual = function (v, changeSign) {
        this.a = 0;
        this.yz = v.x;
        this.zx = v.y;
        this.xy = v.z;
        if (changeSign) {
            this.neg();
        }
        return this;
    };
    /**
     * <code>this ⟼ e<sup>this</sup></code>
     *
     * @returns exp(this)
     */
    Spinor3.prototype.exp = function () {
        var w = this.a;
        var x = this.yz;
        var y = this.zx;
        var z = this.xy;
        var expW = Math.exp(w);
        // φ is actually the absolute value of one half the rotation angle.
        // The orientation of the rotation gets carried in the bivector components.
        // FIXME: DRY
        var φ = Math.sqrt(x * x + y * y + z * z);
        var s = expW * (φ !== 0 ? Math.sin(φ) / φ : 1);
        this.a = expW * Math.cos(φ);
        this.yz = x * s;
        this.zx = y * s;
        this.xy = z * s;
        return this;
    };
    Spinor3.prototype.grade = function (grade) {
        mustBeInteger_1.mustBeInteger('grade', grade);
        switch (grade) {
            case 0: {
                this.yz = 0;
                this.zx = 0;
                this.xy = 0;
                break;
            }
            case 2: {
                this.a = 0;
                break;
            }
            default: {
                this.a = 0;
                this.yz = 0;
                this.zx = 0;
                this.xy = 0;
            }
        }
        return this;
    };
    /**
     *
     */
    Spinor3.prototype.isOne = function () {
        return this.a === 1 && this.xy === 0 && this.yz === 0 && this.zx === 0;
    };
    Spinor3.prototype.isZero = function () {
        return this.a === 0 && this.xy === 0 && this.yz === 0 && this.zx === 0;
    };
    Spinor3.prototype.log = function () {
        // FIXME: Wrong
        var w = this.a;
        var x = this.yz;
        var y = this.zx;
        var z = this.xy;
        // FIXME: DRY
        var bb = x * x + y * y + z * z;
        var Vector2 = Math.sqrt(bb);
        var R0 = Math.abs(w);
        var R = Math.sqrt(w * w + bb);
        this.a = Math.log(R);
        var θ = Math.atan2(Vector2, R0) / Vector2;
        // The angle, θ, produced by atan2 will be in the range [-π, +π]
        this.yz = x * θ;
        this.zx = y * θ;
        this.xy = z * θ;
        return this;
    };
    /**
     *
     */
    Spinor3.prototype.magnitude = function () {
        return Math.sqrt(this.quaditude());
    };
    /**
     * <p>
     * <code>this ⟼ this * rhs</code>
     * </p>
     *
     * @method mul
     * @param rhs {SpinorE3}
     * @return {Spinor3} <code>this</code>
     * @chainable
     */
    Spinor3.prototype.mul = function (rhs) {
        var α = mulSpinorE3alpha_1.mulSpinorE3alpha(this, rhs);
        var yz = mulSpinorE3YZ_1.mulSpinorE3YZ(this, rhs);
        var zx = mulSpinorE3ZX_1.mulSpinorE3ZX(this, rhs);
        var xy = mulSpinorE3XY_1.mulSpinorE3XY(this, rhs);
        this.a = α;
        this.yz = yz;
        this.zx = zx;
        this.xy = xy;
        return this;
    };
    /**
     * <p>
     * <code>this ⟼ a * b</code>
     * </p>
     *
     * @method mul2
     * @param a {SpinorE3}
     * @param b {SpinorE3}
     * @return {Spinor3} <code>this</code>
     * @chainable
     */
    Spinor3.prototype.mul2 = function (a, b) {
        var α = mulSpinorE3alpha_1.mulSpinorE3alpha(a, b);
        var yz = mulSpinorE3YZ_1.mulSpinorE3YZ(a, b);
        var zx = mulSpinorE3ZX_1.mulSpinorE3ZX(a, b);
        var xy = mulSpinorE3XY_1.mulSpinorE3XY(a, b);
        this.a = α;
        this.yz = yz;
        this.zx = zx;
        this.xy = xy;
        return this;
    };
    Spinor3.prototype.neg = function () {
        this.a = -this.a;
        this.yz = -this.yz;
        this.zx = -this.zx;
        this.xy = -this.xy;
        return this;
    };
    /**
     *
     */
    Spinor3.prototype.normalize = function () {
        var m = this.magnitude();
        if (m !== 1) {
            return this.divByScalar(m);
        }
        else {
            return this;
        }
    };
    /**
     *
     */
    Spinor3.prototype.one = function () {
        this.a = 1;
        this.xy = 0;
        this.yz = 0;
        this.zx = 0;
        return this;
    };
    /**
     * a.k.a. squared norm
     */
    Spinor3.prototype.quaditude = function () {
        var a = this.a;
        var x = this.yz;
        var y = this.zx;
        var z = this.xy;
        return a * a + x * x + y * y + z * z;
    };
    /**
     *
     */
    Spinor3.prototype.rev = function () {
        this.yz = -this.yz;
        this.zx = -this.zx;
        this.xy = -this.xy;
        return this;
    };
    /**
     * Sets this Spinor to the value of its reflection in the plane orthogonal to n.
     * The geometric formula for bivector reflection is B' = n * B * n.
     *
     * @method reflect
     * @param n {VectorE3}
     * @return {Spinor3} <code>this</code>
     * @chainable
     */
    Spinor3.prototype.reflect = function (n) {
        var w = this.a;
        var yz = this.yz;
        var zx = this.zx;
        var xy = this.xy;
        var nx = n.x;
        var ny = n.y;
        var nz = n.z;
        var nn = nx * nx + ny * ny + nz * nz;
        var nB = nx * yz + ny * zx + nz * xy;
        this.a = nn * w;
        this.xy = 2 * nz * nB - nn * xy;
        this.yz = 2 * nx * nB - nn * yz;
        this.zx = 2 * ny * nB - nn * zx;
        return this;
    };
    /**
     * <p>
     * <code>this = ⟼ R * this * rev(R)</code>
     * </p>
     *
     * @method rotate
     * @param R {SpinorE3}
     * @return {Spinor3} <code>this</code>
     * @chainable
     */
    Spinor3.prototype.rotate = function (R) {
        // R * this * rev(R) = R * rev(R * rev(this));
        this.rev();
        this.mul2(R, this);
        this.rev();
        this.mul2(R, this);
        return this;
    };
    /**
     * <p>
     * Computes a rotor, R, from two vectors, where
     * R = (abs(b) * abs(a) + b * a) / sqrt(2 * (quad(b) * quad(a) + abs(b) * abs(a) * b << a))
     * </p>
     *
     * @method rotorFromDirections
     * @param a {VectorE3} The <em>from</em> vector.
     * @param b {VectorE3} The <em>to</em> vector.
     * @return {Spinor3} <code>this</code> The rotor representing a rotation from a to b.
     * @chainable
     */
    Spinor3.prototype.rotorFromDirections = function (a, b) {
        return this.rotorFromVectorToVector(a, b, void 0);
    };
    /**
     * <p>
     * <code>this = ⟼ exp(- B * θ / 2)</code>
     * </p>
     *
     * @param B The unit bivector that generates the rotation.
     * @param θ The rotation angle in radians.
     */
    Spinor3.prototype.rotorFromGeneratorAngle = function (B, θ) {
        var φ = θ / 2;
        var s = Math.sin(φ);
        this.yz = -B.yz * s;
        this.zx = -B.zx * s;
        this.xy = -B.xy * s;
        this.a = Math.cos(φ);
        return this;
    };
    Spinor3.prototype.rotorFromVectorToVector = function (a, b, B) {
        rotorFromDirectionsE3_1.rotorFromDirectionsE3(a, b, B, this);
        return this;
    };
    /**
     * <p>
     * <code>this ⟼ this * α</code>
     * </p>
     *
     * @method scale
     * @param α {number}
     * @return {Spinor3} <code>this</code>
     * @chainable
     */
    Spinor3.prototype.scale = function (α) {
        mustBeNumber_1.mustBeNumber('α', α);
        this.yz *= α;
        this.zx *= α;
        this.xy *= α;
        this.a *= α;
        return this;
    };
    /**
     * @method stress
     * @param σ {VectorE3}
     * @return {Spinor3}
     * @chainable
     */
    Spinor3.prototype.stress = function (σ) {
        // There is no change to the scalar coordinate, α.
        this.yz = this.yz * σ.y * σ.z;
        this.zx = this.zx * σ.z * σ.x;
        this.xy = this.xy * σ.x * σ.y;
        return this;
    };
    Spinor3.prototype.toExponential = function (fractionDigits) {
        var coordToString = function (coord) { return coord.toExponential(fractionDigits); };
        return toStringCustom_1.toStringCustom(coordinates(this), coordToString, BASIS_LABELS, this.uom);
    };
    /**
     *
     */
    Spinor3.prototype.toFixed = function (fractionDigits) {
        var coordToString = function (coord) { return coord.toFixed(fractionDigits); };
        return toStringCustom_1.toStringCustom(coordinates(this), coordToString, BASIS_LABELS, this.uom);
    };
    /**
     *
     */
    Spinor3.prototype.toPrecision = function (position) {
        var coordToString = function (coord) { return coord.toPrecision(position); };
        return toStringCustom_1.toStringCustom(coordinates(this), coordToString, BASIS_LABELS, this.uom);
    };
    /**
     * @method toString
     * @param [radix] {number}
     * @return {string} A non-normative string representation of the target.
     */
    Spinor3.prototype.toString = function (radix) {
        var coordToString = function (coord) { return coord.toString(radix); };
        return toStringCustom_1.toStringCustom(coordinates(this), coordToString, BASIS_LABELS, this.uom);
    };
    /**
     * <p>
     * <code>this ⟼ a * b</code>
     * </p>
     *
     * Sets this Spinor3 to the geometric product, a * b, of the vector arguments.
     *
     * @param a
     * @param b
     */
    Spinor3.prototype.versor = function (a, b) {
        var ax = a.x;
        var ay = a.y;
        var az = a.z;
        var bx = b.x;
        var by = b.y;
        var bz = b.z;
        this.a = dotVectorCartesianE3_1.dotVectorCartesianE3(ax, ay, az, bx, by, bz);
        this.yz = wedgeYZ_1.wedgeYZ(ax, ay, az, bx, by, bz);
        this.zx = wedgeZX_1.wedgeZX(ax, ay, az, bx, by, bz);
        this.xy = wedgeXY_1.wedgeXY(ax, ay, az, bx, by, bz);
        return this;
    };
    /**
     * Sets this spinor to the identity element for addition, <b>0</b>.
     *
     * @return {Spinor3} <code>this</code>
     */
    Spinor3.prototype.zero = function () {
        this.a = 0;
        this.yz = 0;
        this.zx = 0;
        this.xy = 0;
        return this;
    };
    /**
     * <p>
     * Computes a unit spinor with a random direction.
     * </p>
     */
    Spinor3.random = function () {
        var yz = randomRange_1.randomRange(-1, 1);
        var zx = randomRange_1.randomRange(-1, 1);
        var xy = randomRange_1.randomRange(-1, 1);
        var α = randomRange_1.randomRange(-1, 1);
        return Spinor3.spinor(yz, zx, xy, α).normalize();
    };
    /**
     * Computes the rotor that rotates vector <code>a</code> to vector <code>b</code>.
     *
     * @param a The <em>from</em> vector.
     * @param b The <em>to</em> vector.
     */
    Spinor3.rotorFromDirections = function (a, b) {
        return Spinor3.zero.clone().rotorFromDirections(a, b);
    };
    /**
     * @param yz
     * @param zx
     * @param xy
     * @param α
     * @param uom
     */
    Spinor3.spinor = function (yz, zx, xy, α, uom) {
        return new Spinor3([yz, zx, xy, α], uom, magicCode);
    };
    Spinor3.wedge = function (a, b) {
        var ax = a.x;
        var ay = a.y;
        var az = a.z;
        var bx = b.x;
        var by = b.y;
        var bz = b.z;
        var yz = wedgeYZ_1.wedgeYZ(ax, ay, az, bx, by, bz);
        var zx = wedgeZX_1.wedgeZX(ax, ay, az, bx, by, bz);
        var xy = wedgeXY_1.wedgeXY(ax, ay, az, bx, by, bz);
        return Spinor3.spinor(yz, zx, xy, 0);
    };
    /**
     *
     */
    Spinor3.one = Spinor3.spinor(0, 0, 0, 1);
    /**
     *
     */
    Spinor3.zero = Spinor3.spinor(0, 0, 0, 0);
    return Spinor3;
}());
exports.Spinor3 = Spinor3;
applyMixins_1.applyMixins(Spinor3, [Lockable_1.LockableMixin]);
Spinor3.one.lock();
Spinor3.zero.lock();
