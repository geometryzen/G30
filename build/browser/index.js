(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.spaceAlgebra = global.spaceAlgebra || {})));
}(this, (function (exports) { 'use strict';

/**
 * A summary of all the exponents in physical dimensions.
 */
var DimensionsSummary;
(function (DimensionsSummary) {
    /**
     * The `amount of substance` base quantity.
     */
    DimensionsSummary[DimensionsSummary["AMOUNT_OF_SUBSTANCE"] = 0] = "AMOUNT_OF_SUBSTANCE";
    DimensionsSummary[DimensionsSummary["ANGULAR_MOMENTUM"] = 1] = "ANGULAR_MOMENTUM";
    /**
     * The `area` derived quantity.
     */
    DimensionsSummary[DimensionsSummary["AREA"] = 2] = "AREA";
    /**
     * The `electric charge, quantity of electricity` derived quantity.
     */
    DimensionsSummary[DimensionsSummary["ELECTRIC_CHARGE"] = 3] = "ELECTRIC_CHARGE";
    /**
     * The `electric current` base quantity.
     */
    DimensionsSummary[DimensionsSummary["ELECTRIC_CURRENT"] = 4] = "ELECTRIC_CURRENT";
    DimensionsSummary[DimensionsSummary["ELECTRIC_FIELD"] = 5] = "ELECTRIC_FIELD";
    DimensionsSummary[DimensionsSummary["ELECTRIC_PERMITTIVITY_TIMES_AREA"] = 6] = "ELECTRIC_PERMITTIVITY_TIMES_AREA";
    DimensionsSummary[DimensionsSummary["ENERGY_OR_TORQUE"] = 7] = "ENERGY_OR_TORQUE";
    DimensionsSummary[DimensionsSummary["FORCE"] = 8] = "FORCE";
    /**
     * The `liminous intensity` base quantity.
     */
    DimensionsSummary[DimensionsSummary["LUMINOUS_INTENSITY"] = 9] = "LUMINOUS_INTENSITY";
    DimensionsSummary[DimensionsSummary["INV_LENGTH"] = 10] = "INV_LENGTH";
    DimensionsSummary[DimensionsSummary["INV_MOMENT_OF_INERTIA"] = 11] = "INV_MOMENT_OF_INERTIA";
    DimensionsSummary[DimensionsSummary["INV_MASS"] = 12] = "INV_MASS";
    DimensionsSummary[DimensionsSummary["INV_TIME"] = 13] = "INV_TIME";
    /**
     * The `length` base qiantity.
     */
    DimensionsSummary[DimensionsSummary["LENGTH"] = 14] = "LENGTH";
    /**
     * The `mass` base quantity.
     */
    DimensionsSummary[DimensionsSummary["MASS"] = 15] = "MASS";
    DimensionsSummary[DimensionsSummary["MOMENT_OF_INERTIA"] = 16] = "MOMENT_OF_INERTIA";
    DimensionsSummary[DimensionsSummary["MOMENTUM"] = 17] = "MOMENTUM";
    DimensionsSummary[DimensionsSummary["MOMENTUM_SQUARED"] = 18] = "MOMENTUM_SQUARED";
    DimensionsSummary[DimensionsSummary["ONE"] = 19] = "ONE";
    DimensionsSummary[DimensionsSummary["RATE_OF_CHANGE_OF_AREA"] = 20] = "RATE_OF_CHANGE_OF_AREA";
    DimensionsSummary[DimensionsSummary["STIFFNESS"] = 21] = "STIFFNESS";
    /**
     * The `time` base quantity.
     */
    DimensionsSummary[DimensionsSummary["TIME"] = 22] = "TIME";
    DimensionsSummary[DimensionsSummary["TIME_SQUARED"] = 23] = "TIME_SQUARED";
    /**
     * The `thermodynamic temperature` base quantity.
     */
    DimensionsSummary[DimensionsSummary["THERMODYNAMIC_TEMPERATURE"] = 24] = "THERMODYNAMIC_TEMPERATURE";
    DimensionsSummary[DimensionsSummary["VELOCITY"] = 25] = "VELOCITY";
    DimensionsSummary[DimensionsSummary["VELOCITY_SQUARED"] = 26] = "VELOCITY_SQUARED";
    /**
     * The `volume` derived quantity.
     */
    DimensionsSummary[DimensionsSummary["VOLUME"] = 27] = "VOLUME";
})(DimensionsSummary || (DimensionsSummary = {}));

/**
 * The QQ class represents a rational number, ℚ.
 *
 * The QQ implementation is that of an <em>immutable</em> (value) type.
 *
 * The numerator and denominator are reduced to their lowest form.
 *
 * Construct new instances using the static <code>valueOf</code> method.
 */
var QQ = (function () {
    /**
     * @param n The numerator.
     * @param d The denominator.
     */
    function QQ(n, d) {
        var g;
        var gcd = function (a, b) {
            var temp;
            if (a < 0) {
                a = -a;
            }
            if (b < 0) {
                b = -b;
            }
            if (b > a) {
                temp = a;
                a = b;
                b = temp;
            }
            while (true) {
                a %= b;
                if (a === 0) {
                    return b;
                }
                b %= a;
                if (b === 0) {
                    return a;
                }
            }
        };
        if (d === 0) {
            throw new Error("denominator must not be zero");
        }
        if (n === 0) {
            g = 1;
        }
        else {
            g = gcd(Math.abs(n), Math.abs(d));
        }
        if (d < 0) {
            n = -n;
            d = -d;
        }
        this.numer_ = n / g;
        this.denom_ = d / g;
    }
    Object.defineProperty(QQ.prototype, "numer", {
        /**
         * The numerator of the rational number.
         */
        get: function () {
            return this.numer_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QQ.prototype, "denom", {
        /**
         * The denominator of the rational number.
         */
        get: function () {
            return this.denom_;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @returns this + rhs
     */
    QQ.prototype.add = function (rhs) {
        return QQ.valueOf(this.numer_ * rhs.denom_ + this.denom_ * rhs.numer_, this.denom_ * rhs.denom_);
    };
    /**
     * @returns this - rhs
     */
    QQ.prototype.sub = function (rhs) {
        return QQ.valueOf(this.numer_ * rhs.denom_ - this.denom_ * rhs.numer_, this.denom_ * rhs.denom_);
    };
    /**
     * @returns this * rhs
     */
    QQ.prototype.mul = function (rhs) {
        return QQ.valueOf(this.numer_ * rhs.numer_, this.denom_ * rhs.denom_);
    };
    /**
     * @returns this / rhs
     */
    QQ.prototype.div = function (rhs) {
        var numer = this.numer_ * rhs.denom_;
        var denom = this.denom_ * rhs.numer_;
        if (numer === 0) {
            if (denom === 0) {
                // How do we handle undefined?
                return QQ.valueOf(numer, denom);
            }
            else {
                return QQ.ZERO;
            }
        }
        else {
            if (denom === 0) {
                // How do we handle division by zero.
                return QQ.valueOf(numer, denom);
            }
            else {
                return QQ.valueOf(numer, denom);
            }
        }
    };
    /**
     * @returns `true` if this rational number is one (1), otherwise `false`.
     */
    QQ.prototype.isOne = function () {
        return this.numer_ === 1 && this.denom_ === 1;
    };
    /**
     * @returns `true` if this rational number is zero (0), otherwise `false`.
     */
    QQ.prototype.isZero = function () {
        return this.numer_ === 0 && this.denom_ === 1;
    };
    /**
     * @returns 37 * numerator + 13 * denominator
     */
    QQ.prototype.hashCode = function () {
        return 37 * this.numer_ + 13 * this.denom_;
    };
    /**
     * Computes the multiplicative inverse of this rational number.
     *
     * @returns 1 / this
     */
    QQ.prototype.inv = function () {
        return QQ.valueOf(this.denom_, this.numer_);
    };
    /**
     * Computes the additive inverse of this rational number.
     *
     * @returns -this
     */
    QQ.prototype.neg = function () {
        return QQ.valueOf(-this.numer_, this.denom_);
    };
    /**
     * Determines whether two rational numbers are equal.
     *
     * @returns `true` if `this` rational number equals the `other` rational number.
     */
    QQ.prototype.equals = function (other) {
        if (this === other) {
            return true;
        }
        else if (other instanceof QQ) {
            return this.numer_ * other.denom_ === this.denom_ * other.numer_;
        }
        else {
            return false;
        }
    };
    /**
     * Computes a non-normative string representation of this rational.
     *
     * @returns
     */
    QQ.prototype.toString = function (radix) {
        return "" + this.numer_.toString(radix) + "/" + this.denom_.toString(radix) + "";
    };
    /**
     * @returns this + rhs
     */
    QQ.prototype.__add__ = function (rhs) {
        if (rhs instanceof QQ) {
            return this.add(rhs);
        }
        else {
            return void 0;
        }
    };
    /**
     * @returns lhs + this
     */
    QQ.prototype.__radd__ = function (lhs) {
        if (lhs instanceof QQ) {
            return lhs.add(this);
        }
        else {
            return void 0;
        }
    };
    /**
     * @returns this - rhs
     */
    QQ.prototype.__sub__ = function (rhs) {
        if (rhs instanceof QQ) {
            return this.sub(rhs);
        }
        else {
            return void 0;
        }
    };
    /**
     * @returns lhs - this
     */
    QQ.prototype.__rsub__ = function (lhs) {
        if (lhs instanceof QQ) {
            return lhs.sub(this);
        }
        else {
            return void 0;
        }
    };
    /**
     * @returns this * rhs
     */
    QQ.prototype.__mul__ = function (rhs) {
        if (rhs instanceof QQ) {
            return this.mul(rhs);
        }
        else {
            return void 0;
        }
    };
    /**
     * @returns lhs * this
     */
    QQ.prototype.__rmul__ = function (lhs) {
        if (lhs instanceof QQ) {
            return lhs.mul(this);
        }
        else {
            return void 0;
        }
    };
    /**
     * @returns this / rhs
     */
    QQ.prototype.__div__ = function (rhs) {
        if (rhs instanceof QQ) {
            return this.div(rhs);
        }
        else {
            return void 0;
        }
    };
    /**
     * @returns lhs / this
     */
    QQ.prototype.__rdiv__ = function (lhs) {
        if (lhs instanceof QQ) {
            return lhs.div(this);
        }
        else {
            return void 0;
        }
    };
    /**
     * @returns +this
     */
    QQ.prototype.__pos__ = function () {
        return this;
    };
    /**
     * @returns -this
     */
    QQ.prototype.__neg__ = function () {
        return this.neg();
    };
    /**
     * @param numer The numerator of the rational number.
     * @param denom The denominator of the rational number.
     * @returns The rational number numer / denom reduced to its lowest form.
     */
    QQ.valueOf = function (n, d) {
        if (n === 0) {
            if (d !== 0) {
                return QQ.ZERO;
            }
            else {
                // This is the undefined case, 0/0.
            }
        }
        else if (d === 0) {
            // Fall through
        }
        else if (n === d) {
            return QQ.ONE;
        }
        else if (n === 1) {
            if (d === 2) {
                return QQ.POS_01_02;
            }
            else if (d === 3) {
                return QQ.POS_01_03;
            }
            else if (d === 4) {
                return QQ.POS_01_04;
            }
            else if (d === 5) {
                return QQ.POS_01_05;
            }
            else if (d === -3) {
                return QQ.NEG_01_03;
            }
        }
        else if (n === -1) {
            if (d === 1) {
                return QQ.NEG_01_01;
            }
            else if (d === 3) {
                return QQ.NEG_01_03;
            }
        }
        else if (n === 2) {
            if (d === 1) {
                return QQ.POS_02_01;
            }
            else if (d === 3) {
                return QQ.POS_02_03;
            }
        }
        else if (n === -2) {
            if (d === 1) {
                return QQ.NEG_02_01;
            }
        }
        else if (n === 3) {
            if (d === 1) {
                return QQ.POS_03_01;
            }
        }
        else if (n === -3) {
            if (d === 1) {
                return QQ.NEG_03_01;
            }
        }
        else if (n === 4) {
            if (d === 1) {
                return QQ.POS_04_01;
            }
        }
        else if (n === 5) {
            if (d === 1) {
                return QQ.POS_05_01;
            }
        }
        else if (n === 6) {
            if (d === 1) {
                return QQ.POS_06_01;
            }
        }
        else if (n === 7) {
            if (d === 1) {
                return QQ.POS_07_01;
            }
        }
        else if (n === 8) {
            if (d === 1) {
                return QQ.POS_08_01;
            }
        }
        // console.warn(`QQ.valueOf(${n},${d}) is not cached.`);
        return new QQ(n, d);
    };
    //
    // Immutable constants allow us to avoid creating
    // temporary QQ instances for the common values.
    //
    QQ.POS_08_01 = new QQ(8, 1);
    QQ.POS_07_01 = new QQ(7, 1);
    QQ.POS_06_01 = new QQ(6, 1);
    QQ.POS_05_01 = new QQ(5, 1);
    QQ.POS_04_01 = new QQ(4, 1);
    QQ.POS_03_01 = new QQ(3, 1);
    QQ.POS_02_01 = new QQ(2, 1);
    QQ.ONE = new QQ(1, 1);
    QQ.POS_01_02 = new QQ(1, 2);
    QQ.POS_01_03 = new QQ(1, 3);
    QQ.POS_01_04 = new QQ(1, 4);
    QQ.POS_01_05 = new QQ(1, 5);
    QQ.ZERO = new QQ(0, 1);
    QQ.NEG_01_03 = new QQ(-1, 3);
    QQ.NEG_01_01 = new QQ(-1, 1);
    QQ.NEG_02_01 = new QQ(-2, 1);
    QQ.NEG_03_01 = new QQ(-3, 1);
    QQ.POS_02_03 = new QQ(2, 3);
    return QQ;
}());

/**
 *
 */
function detectDimensions(M, L, T, Q, temperature, amount, intensity) {
    if (M.numer === -1) {
        if (M.denom === 1) {
            if (L.numer === -2) {
                if (L.denom === 1) {
                    if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.INV_MOMENT_OF_INERTIA;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === -1) {
                if (L.denom === 1) {
                    if (T.numer === 2) {
                        if (T.denom === 1) {
                            if (Q.numer === 2) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.ELECTRIC_PERMITTIVITY_TIMES_AREA;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === 0) {
                if (L.denom === 1) {
                    if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.INV_MASS;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else if (M.numer === 0) {
        if (M.denom === 1) {
            if (L.numer === -1) {
                if (L.denom === 1) {
                    if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.INV_LENGTH;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === 0) {
                if (L.denom === 1) {
                    if (T.numer === -1) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.INV_TIME;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (Q.numer === 1) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.ELECTRIC_CURRENT;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.ONE;
                                                        }
                                                    }
                                                    else if (intensity.numer === 1) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.LUMINOUS_INTENSITY;
                                                        }
                                                    }
                                                }
                                            }
                                            else if (amount.numer === 1) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.AMOUNT_OF_SUBSTANCE;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else if (temperature.numer === 1) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.THERMODYNAMIC_TEMPERATURE;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (Q.numer === 1) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.ELECTRIC_CHARGE;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === 1) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.TIME;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === 2) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.TIME_SQUARED;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === 1) {
                if (L.denom === 1) {
                    if (T.numer === -1) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.VELOCITY;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.LENGTH;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === 2) {
                if (L.denom === 1) {
                    if (T.numer === -2) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.VELOCITY_SQUARED;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (T.numer === -1) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.RATE_OF_CHANGE_OF_AREA;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.AREA;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === 3) {
                if (L.denom === 1) {
                    if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.VOLUME;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else if (M.numer === 1) {
        if (M.denom === 1) {
            if (L.numer === 0) {
                if (L.denom === 1) {
                    if (T.numer === -2) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.STIFFNESS;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.MASS;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === 1) {
                if (L.denom === 1) {
                    if (T.numer === -2) {
                        if (T.denom === 1) {
                            if (Q.numer === -1) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.ELECTRIC_FIELD;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.FORCE;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === -1) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.MOMENTUM;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (L.numer === 2) {
                if (L.denom === 1) {
                    if (T.numer === -2) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.ENERGY_OR_TORQUE;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === -1) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.ANGULAR_MOMENTUM;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (T.numer === 0) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.MOMENT_OF_INERTIA;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else if (M.numer === 2) {
        if (M.denom === 1) {
            if (L.numer === 2) {
                if (L.denom === 1) {
                    if (T.numer === -2) {
                        if (T.denom === 1) {
                            if (Q.numer === 0) {
                                if (Q.denom === 1) {
                                    if (temperature.numer === 0) {
                                        if (temperature.denom === 1) {
                                            if (amount.numer === 0) {
                                                if (amount.denom === 1) {
                                                    if (intensity.numer === 0) {
                                                        if (intensity.denom === 1) {
                                                            return DimensionsSummary.MOMENTUM_SQUARED;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return void 0;
}

var R0 = QQ.valueOf(0, 1);
var R1 = QQ.valueOf(1, 1);
var R2 = QQ.valueOf(2, 1);
var R3 = QQ.valueOf(3, 1);
var M1 = QQ.valueOf(-1, 1);
var M2 = QQ.valueOf(-2, 1);
function assertArgRational(name, arg) {
    if (arg instanceof QQ) {
        return arg;
    }
    else {
        throw new Error("Argument " + name + " => " + arg + " must be a QQ");
    }
}
/**
 * Keeps track of the dimensions of a physical quantity using seven rational exponents.
 * Each of the exponents corresponds to a dimension in the S.I. system of units.
 */
var Dimensions = (function () {
    /**
     * The Dimensions class captures the physical dimensions associated with a unit of measure.
     *
     * @param M The mass component of the dimensions object.
     * @param L The length component of the dimensions object.
     * @param T The time component of the dimensions object.
     * @param Q The charge component of the dimensions object.
     * @param temperature The temperature component of the dimensions object.
     * @param amount The amount component of the dimensions object.
     * @param intensity The intensity component of the dimensions object.
     */
    function Dimensions(M, L, T, Q, temperature, amount, intensity, summary) {
        this.M = assertArgRational('M', M);
        this.L = assertArgRational('L', L);
        this.T = assertArgRational('T', T);
        this.Q = assertArgRational('Q', Q);
        this.temperature = assertArgRational('temperature', temperature);
        this.amount = assertArgRational('amount', amount);
        this.intensity = assertArgRational('intensity', intensity);
        this.summary_ = summary;
    }
    Object.defineProperty(Dimensions.prototype, "summary", {
        get: function () {
            return this.summary_;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the dimensions if they are all equal, otherwise throws an <code>Error</code>
     *
     * @param rhs
     * @returns
     */
    Dimensions.prototype.compatible = function (rhs) {
        if (typeof this.summary_ === 'number' && this.summary_ === rhs.summary_) {
            return this;
        }
        else if (this.M.equals(rhs.M) && this.L.equals(rhs.L) && this.T.equals(rhs.T) && this.Q.equals(rhs.Q) && this.temperature.equals(rhs.temperature) && this.amount.equals(rhs.amount) && this.intensity.equals(rhs.intensity)) {
            return this;
        }
        else {
            if (this.isOne()) {
                if (rhs.isOne()) {
                    throw new Error();
                }
                else {
                    throw new Error("Dimensions must be equal (dimensionless, " + rhs + ")");
                }
            }
            else {
                if (rhs.isOne()) {
                    throw new Error("Dimensions must be equal (" + this + ", dimensionless)");
                }
                else {
                    throw new Error("Dimensions must be equal (" + this + ", " + rhs + ")");
                }
            }
        }
    };
    Dimensions.prototype.equals = function (rhs) {
        if (this === rhs) {
            return true;
        }
        else {
            return this.M.equals(rhs.M) && this.L.equals(rhs.L) && this.T.equals(rhs.T) && this.Q.equals(rhs.Q) && this.temperature.equals(rhs.temperature) && this.amount.equals(rhs.amount) && this.intensity.equals(rhs.intensity);
        }
    };
    /**
     * Multiplies dimensions by adding rational exponents.
     *
     * @param rhs
     * @returns <code>this * rhs</code>
     */
    Dimensions.prototype.mul = function (rhs) {
        return Dimensions.valueOf(this.M.add(rhs.M), this.L.add(rhs.L), this.T.add(rhs.T), this.Q.add(rhs.Q), this.temperature.add(rhs.temperature), this.amount.add(rhs.amount), this.intensity.add(rhs.intensity));
    };
    /**
     * Divides dimensions by subtracting rational exponents.
     *
     * @param rhs
     * @returns <code>this / rhs</code>
     */
    Dimensions.prototype.div = function (rhs) {
        return Dimensions.valueOf(this.M.sub(rhs.M), this.L.sub(rhs.L), this.T.sub(rhs.T), this.Q.sub(rhs.Q), this.temperature.sub(rhs.temperature), this.amount.sub(rhs.amount), this.intensity.sub(rhs.intensity));
    };
    /**
     * Computes the power function by multiplying rational exponents.
     *
     * @param rhs
     * @returns <code>pow(this, rhs)</code>
     */
    Dimensions.prototype.pow = function (exponent) {
        return Dimensions.valueOf(this.M.mul(exponent), this.L.mul(exponent), this.T.mul(exponent), this.Q.mul(exponent), this.temperature.mul(exponent), this.amount.mul(exponent), this.intensity.mul(exponent));
    };
    /**
     * Computes the square root by dividing each rational component by two.
     *
     * @returns
     */
    Dimensions.prototype.sqrt = function () {
        return Dimensions.valueOf(this.M.div(R2), this.L.div(R2), this.T.div(R2), this.Q.div(R2), this.temperature.div(R2), this.amount.div(R2), this.intensity.div(R2));
    };
    /**
     * Determines whether all the exponents of this dimensions number are zero.
     * This implies a dimensionless quantity.
     *
     * @returns <code>true</code> if all the exponents are zero, otherwise <code>false</code>.
     */
    Dimensions.prototype.isOne = function () {
        if (this === Dimensions.ONE) {
            return true;
        }
        else {
            return this.M.isZero() && this.L.isZero() && this.T.isZero() && this.Q.isZero() && this.temperature.isZero() && this.amount.isZero() && this.intensity.isZero();
        }
    };
    /**
     * Computes the multiplicative inverse of this dimensions number.
     * This is achived by changing the signs of all the exponent quantities.
     *
     * @returns The multiplicative inverse of this dimensions number.
     */
    Dimensions.prototype.inv = function () {
        return Dimensions.valueOf(this.M.neg(), this.L.neg(), this.T.neg(), this.Q.neg(), this.temperature.neg(), this.amount.neg(), this.intensity.neg());
    };
    /**
     * Creates a representation of this <code>Dimensions</code> instance.
     *
     * @returns
     */
    Dimensions.prototype.toString = function () {
        var stringify = function (rational, label) {
            if (rational.numer === 0) {
                return null;
            }
            else if (rational.denom === 1) {
                if (rational.numer === 1) {
                    return "" + label;
                }
                else {
                    return "" + label + " ** " + rational.numer;
                }
            }
            return "" + label + " ** " + rational;
        };
        return [stringify(this.M, 'mass'), stringify(this.L, 'length'), stringify(this.T, 'time'), stringify(this.Q, 'charge'), stringify(this.temperature, 'thermodynamic temperature'), stringify(this.amount, 'amount of substance'), stringify(this.intensity, 'luminous intensity')].filter(function (x) {
            return typeof x === 'string';
        }).join(" * ");
    };
    /**
     * @returns this + rhs
     */
    Dimensions.prototype.__add__ = function (rhs) {
        if (rhs instanceof Dimensions) {
            return this.compatible(rhs);
        }
        else {
            return void 0;
        }
    };
    /**
     * @returns lhs + this
     */
    Dimensions.prototype.__radd__ = function (lhs) {
        if (lhs instanceof Dimensions) {
            return lhs.compatible(this);
        }
        else {
            return void 0;
        }
    };
    /**
     *
     * @param rhs
     * @returns
     */
    Dimensions.prototype.__sub__ = function (rhs) {
        if (rhs instanceof Dimensions) {
            return this.compatible(rhs);
        }
        else {
            return void 0;
        }
    };
    /**
     *
     * @param lhs
     * @returns
     */
    Dimensions.prototype.__rsub__ = function (lhs) {
        if (lhs instanceof Dimensions) {
            return lhs.compatible(this);
        }
        else {
            return void 0;
        }
    };
    /**
     *
     * @param rhs
     * @returns
     */
    Dimensions.prototype.__mul__ = function (rhs) {
        if (rhs instanceof Dimensions) {
            return this.mul(rhs);
        }
        else {
            return void 0;
        }
    };
    /**
     *
     * @param lhs
     * @returns
     */
    Dimensions.prototype.__rmul__ = function (lhs) {
        if (lhs instanceof Dimensions) {
            return lhs.mul(this);
        }
        else {
            return void 0;
        }
    };
    /**
     *
     * @param rhs
     * @returns
     */
    Dimensions.prototype.__div__ = function (rhs) {
        if (rhs instanceof Dimensions) {
            return this.div(rhs);
        }
        else {
            return void 0;
        }
    };
    /**
     * @param lhs
     * @returns
     */
    Dimensions.prototype.__rdiv__ = function (lhs) {
        if (lhs instanceof Dimensions) {
            return lhs.div(this);
        }
        else {
            return void 0;
        }
    };
    /**
     * @returns
     */
    Dimensions.prototype.__pos__ = function () {
        return this;
    };
    /**
     *
     * @returns
     */
    Dimensions.prototype.__neg__ = function () {
        return this;
    };
    /**
     * Constructor function for Dimensions.
     * @param M The mass component of the dimensions object.
     * @param L The length component of the dimensions object.
     * @param T The time component of the dimensions object.
     * @param Q The charge component of the dimensions object.
     * @param temperature The temperature component of the dimensions object.
     * @param amount The amount component of the dimensions object.
     * @param intensity The intensity component of the dimensions object.
     */
    Dimensions.valueOf = function (M, L, T, Q, temperature, amount, intensity) {
        // This function is optimized to minimize the need for object creation.
        var summary = detectDimensions(M, L, T, Q, temperature, amount, intensity);
        switch (summary) {
            case DimensionsSummary.AMOUNT_OF_SUBSTANCE: return Dimensions.AMOUNT_OF_SUBSTANCE;
            case DimensionsSummary.ANGULAR_MOMENTUM: return Dimensions.ANGULAR_MOMENTUM;
            case DimensionsSummary.AREA: return Dimensions.AREA;
            case DimensionsSummary.ELECTRIC_CHARGE: return Dimensions.ELECTRIC_CHARGE;
            case DimensionsSummary.ELECTRIC_CURRENT: return Dimensions.ELECTRIC_CURRENT;
            case DimensionsSummary.ELECTRIC_FIELD: return Dimensions.ELECTRIC_FIELD;
            case DimensionsSummary.ELECTRIC_PERMITTIVITY_TIMES_AREA: return Dimensions.ELECTRIC_PERMITTIVITY_TIMES_AREA;
            case DimensionsSummary.ENERGY_OR_TORQUE: return Dimensions.ENERGY_OR_TORQUE;
            case DimensionsSummary.FORCE: return Dimensions.FORCE;
            case DimensionsSummary.LUMINOUS_INTENSITY: return Dimensions.LUMINOUS_INTENSITY;
            case DimensionsSummary.INV_LENGTH: return Dimensions.INV_LENGTH;
            case DimensionsSummary.INV_MASS: return Dimensions.INV_MASS;
            case DimensionsSummary.INV_MOMENT_OF_INERTIA: return Dimensions.INV_MOMENT_OF_INERTIA;
            case DimensionsSummary.INV_TIME: return Dimensions.INV_TIME;
            case DimensionsSummary.LENGTH: return Dimensions.LENGTH;
            case DimensionsSummary.MASS: return Dimensions.MASS;
            case DimensionsSummary.MOMENT_OF_INERTIA: return Dimensions.MOMENT_OF_INERTIA;
            case DimensionsSummary.MOMENTUM: return Dimensions.MOMENTUM;
            case DimensionsSummary.MOMENTUM_SQUARED: return Dimensions.MOMENTUM_SQUARED;
            case DimensionsSummary.ONE: return Dimensions.ONE;
            case DimensionsSummary.RATE_OF_CHANGE_OF_AREA: return Dimensions.RATE_OF_CHANGE_OF_AREA;
            case DimensionsSummary.STIFFNESS: return Dimensions.STIFFNESS;
            case DimensionsSummary.THERMODYNAMIC_TEMPERATURE: return Dimensions.THERMODYNAMIC_TEMPERATURE;
            case DimensionsSummary.TIME: return Dimensions.TIME;
            case DimensionsSummary.TIME_SQUARED: return Dimensions.TIME_SQUARED;
            case DimensionsSummary.VELOCITY: return Dimensions.VELOCITY;
            case DimensionsSummary.VELOCITY_SQUARED: return Dimensions.VELOCITY_SQUARED;
            default: {
                // console.warn(`Dimensions.valueOf(${M},${L},${T},${Q},${temperature},${amount},${intensity}) is not cached.`);
                return new Dimensions(M, L, T, Q, temperature, amount, intensity, summary);
            }
        }
    };
    /**
     * All exponents are zero, a dimensionless quantity.
     */
    Dimensions.ONE = new Dimensions(R0, R0, R0, R0, R0, R0, R0, DimensionsSummary.ONE);
    /**
     * M<sup>1</sup>
     */
    Dimensions.MASS = new Dimensions(R1, R0, R0, R0, R0, R0, R0, DimensionsSummary.MASS);
    /**
     * L<sup>1</sup>
     */
    Dimensions.LENGTH = new Dimensions(R0, R1, R0, R0, R0, R0, R0, DimensionsSummary.LENGTH);
    /**
     * L<sup>2</sup>
     */
    Dimensions.AREA = new Dimensions(R0, R2, R0, R0, R0, R0, R0, DimensionsSummary.AREA);
    /**
     * L<sup>3</sup>
     */
    Dimensions.VOLUME = new Dimensions(R0, R3, R0, R0, R0, R0, R0, DimensionsSummary.VOLUME);
    /**
     * Inverse Length.
     */
    Dimensions.INV_LENGTH = new Dimensions(R0, M1, R0, R0, R0, R0, R0, DimensionsSummary.INV_LENGTH);
    /**
     * T<sup>1</sup>
     */
    Dimensions.TIME = new Dimensions(R0, R0, R1, R0, R0, R0, R0, DimensionsSummary.TIME);
    /**
     * Q<sup>1</sup>
     */
    Dimensions.ELECTRIC_CHARGE = new Dimensions(R0, R0, R0, R1, R0, R0, R0, DimensionsSummary.ELECTRIC_CHARGE);
    /**
     * Q<sup>1</sup>T<sup>-1<sup>
     */
    Dimensions.ELECTRIC_CURRENT = new Dimensions(R0, R0, M1, R1, R0, R0, R0, DimensionsSummary.ELECTRIC_CURRENT);
    /**
     *
     */
    Dimensions.THERMODYNAMIC_TEMPERATURE = new Dimensions(R0, R0, R0, R0, R1, R0, R0, DimensionsSummary.THERMODYNAMIC_TEMPERATURE);
    /**
     *
     */
    Dimensions.AMOUNT_OF_SUBSTANCE = new Dimensions(R0, R0, R0, R0, R0, R1, R0, DimensionsSummary.AMOUNT_OF_SUBSTANCE);
    /**
     *
     */
    Dimensions.LUMINOUS_INTENSITY = new Dimensions(R0, R0, R0, R0, R0, R0, R1, DimensionsSummary.LUMINOUS_INTENSITY);
    /**
     * Angular Momentum.
     */
    Dimensions.ANGULAR_MOMENTUM = new Dimensions(R1, R2, M1, R0, R0, R0, R0, DimensionsSummary.ANGULAR_MOMENTUM);
    /**
     * Rate of change of Area.
     */
    Dimensions.RATE_OF_CHANGE_OF_AREA = new Dimensions(R0, R2, M1, R0, R0, R0, R0, DimensionsSummary.RATE_OF_CHANGE_OF_AREA);
    /**
     * Electric Field.
     */
    Dimensions.ELECTRIC_FIELD = new Dimensions(R1, R1, M2, M1, R0, R0, R0, DimensionsSummary.ELECTRIC_FIELD);
    /**
     * Electric Permittivity times Area.
     */
    Dimensions.ELECTRIC_PERMITTIVITY_TIMES_AREA = new Dimensions(M1, M1, R2, R2, R0, R0, R0, DimensionsSummary.ELECTRIC_PERMITTIVITY_TIMES_AREA);
    /**
     * Energy or Torque.
     */
    Dimensions.ENERGY_OR_TORQUE = new Dimensions(R1, R2, M2, R0, R0, R0, R0, DimensionsSummary.ENERGY_OR_TORQUE);
    /**
     * Force.
     */
    Dimensions.FORCE = new Dimensions(R1, R1, M2, R0, R0, R0, R0, DimensionsSummary.FORCE);
    /**
     * Inverse Mass.
     */
    Dimensions.INV_MASS = new Dimensions(M1, R0, R0, R0, R0, R0, R0, DimensionsSummary.INV_MASS);
    /**
     * Inverse Moment of Inertia.
     */
    Dimensions.INV_MOMENT_OF_INERTIA = new Dimensions(M1, M2, R0, R0, R0, R0, R0, DimensionsSummary.INV_MOMENT_OF_INERTIA);
    /**
     * Inverse Time.
     */
    Dimensions.INV_TIME = new Dimensions(R0, R0, M1, R0, R0, R0, R0, DimensionsSummary.INV_TIME);
    /**
     * Moment of Inertia.
     */
    Dimensions.MOMENT_OF_INERTIA = new Dimensions(R1, R2, R0, R0, R0, R0, R0, DimensionsSummary.MOMENT_OF_INERTIA);
    /**
     * Momentum.
     */
    Dimensions.MOMENTUM = new Dimensions(R1, R1, M1, R0, R0, R0, R0, DimensionsSummary.MOMENTUM);
    /**
     * Momentum squared.
     */
    Dimensions.MOMENTUM_SQUARED = new Dimensions(R2, R2, M2, R0, R0, R0, R0, DimensionsSummary.MOMENTUM_SQUARED);
    /**
     * Stiffness.
     */
    Dimensions.STIFFNESS = new Dimensions(R1, R0, M2, R0, R0, R0, R0, DimensionsSummary.STIFFNESS);
    /**
     * Time squared.
     */
    Dimensions.TIME_SQUARED = new Dimensions(R0, R0, R2, R0, R0, R0, R0, DimensionsSummary.TIME_SQUARED);
    /**
     * Velocity
     */
    Dimensions.VELOCITY = new Dimensions(R0, R1, M1, R0, R0, R0, R0, DimensionsSummary.VELOCITY);
    /**
     * Velocity squared
     */
    Dimensions.VELOCITY_SQUARED = new Dimensions(R0, R2, M2, R0, R0, R0, R0, DimensionsSummary.VELOCITY_SQUARED);
    return Dimensions;
}());

function approx(coords, n) {
    var max = 0;
    var iLen = coords.length;
    for (var i = 0; i < iLen; i++) {
        max = Math.max(max, Math.abs(coords[i]));
    }
    var threshold = max * Math.pow(10, -n);
    for (var i = 0; i < iLen; i++) {
        if (Math.abs(coords[i]) < threshold) {
            coords[i] = 0;
        }
    }
}

function isDefined(arg) {
    return (typeof arg !== 'undefined');
}

function isNull(x) {
    return x === null;
}

function isUndefined(arg) {
    return (typeof arg === 'undefined');
}

function arraysEQ(a, b) {
    if (isDefined(a)) {
        if (isDefined(b)) {
            if (!isNull(a)) {
                if (!isNull(b)) {
                    var aLen = a.length;
                    var bLen = b.length;
                    if (aLen === bLen) {
                        for (var i = 0; i < aLen; i++) {
                            if (a[i] !== b[i]) {
                                return false;
                            }
                        }
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return isNull(b);
            }
        }
        else {
            return false;
        }
    }
    else {
        return isUndefined(b);
    }
}

function dotVectorE3(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}

// Symbolic constants for the coordinate indices into the data array.
// These are chosen to match those used by G3.
// TODO: The goal should be to protect the user from changes in ordering.
var COORD_W = 0;
var COORD_X$1 = 1;
var COORD_Y$1 = 2;
var COORD_Z$1 = 3;
var COORD_XY$1 = 4;
var COORD_YZ$1 = 5;
var COORD_ZX$1 = 6;
var COORD_XYZ = 7;
/**
 * @param index
 * 0: scalar
 * 1: x
 * 2: y
 * 3: z
 * 4: xy
 * 5: yz
 * 6: zx
 * 7: xyz
 */
function compG3Get(m, index) {
    switch (index) {
        case COORD_W: {
            return m.a;
        }
        case COORD_X$1: {
            return m.x;
        }
        case COORD_Y$1: {
            return m.y;
        }
        case COORD_Z$1: {
            return m.z;
        }
        case COORD_XY$1: {
            return m.xy;
        }
        case COORD_YZ$1: {
            return m.yz;
        }
        case COORD_ZX$1: {
            return m.zx;
        }
        case COORD_XYZ: {
            return m.b;
        }
        default: {
            throw new Error("index => " + index);
        }
    }
}

function extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index | 0;
    var x = 0.0;
    switch (~(~index)) {
        case 0:
            {
                x = +(a0 * b0);
            }
            break;
        case 1:
            {
                x = +(a0 * b1 + a1 * b0);
            }
            break;
        case 2:
            {
                x = +(a0 * b2 + a2 * b0);
            }
            break;
        case 3:
            {
                x = +(a0 * b3 + a3 * b0);
            }
            break;
        case 4:
            {
                x = +(a0 * b4 + a1 * b2 - a2 * b1 + a4 * b0);
            }
            break;
        case 5:
            {
                x = +(a0 * b5 + a2 * b3 - a3 * b2 + a5 * b0);
            }
            break;
        case 6:
            {
                x = +(a0 * b6 - a1 * b3 + a3 * b1 + a6 * b0);
            }
            break;
        case 7:
            {
                x = +(a0 * b7 + a1 * b5 + a2 * b6 + a3 * b4 + a4 * b3 + a5 * b1 + a6 * b2 + a7 * b0);
            }
            break;
        default: {
            throw new Error("index must be in the range [0..7]");
        }
    }
    return +x;
}

var COORD_W$1 = 0;
var COORD_X$2 = 1;
var COORD_Y$2 = 2;
var COORD_Z$2 = 3;
var COORD_XY$2 = 4;
var COORD_YZ$2 = 5;
var COORD_ZX$2 = 6;
var COORD_XYZ$1 = 7;
function compG3Set(m, index, value) {
    switch (index) {
        case COORD_W$1: {
            m.a = value;
            break;
        }
        case COORD_X$2: {
            m.x = value;
            break;
        }
        case COORD_Y$2: {
            m.y = value;
            break;
        }
        case COORD_Z$2: {
            m.z = value;
            break;
        }
        case COORD_XY$2: {
            m.xy = value;
            break;
        }
        case COORD_YZ$2: {
            m.yz = value;
            break;
        }
        case COORD_ZX$2: {
            m.zx = value;
            break;
        }
        case COORD_XYZ$1: {
            m.b = value;
            break;
        }
        default:
            throw new Error("index => " + index);
    }
}

// const NAMES_SI = ['kilogram', 'meter', 'second', 'coulomb', 'kelvin', 'mole', 'candela'];
var SYMBOLS_SI = ['kg', 'm', 's', 'C', 'K', 'mol', 'cd'];
/**
 * The numerator, denominator values for each dimension (M, L, T, Q, temperature, amount, intensity).
 */
var patterns = [
    [-1, 1, -3, 1, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1],
    [-1, 1, -2, 1, 1, 1, 2, 1, 0, 1, 0, 1, 0, 1],
    [-1, 1, -2, 1, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1],
    [-1, 1, -1, 1, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1],
    [-1, 1, +0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [-1, 1, +3, 1, -2, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [+0, 1, -3, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [+0, 1, -2, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [+0, 1, -1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [+0, 1, 2, 1, -2, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [+0, 1, 0, 1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [+0, 1, 0, 1, -1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, -2, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, -1, 1, -2, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, -1, 1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, -3, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, -2, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, -1, 1, -1, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, -3, 1, 0, 1, -1, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, -2, 1, -1, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, -2, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, -2, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 2, 1, -2, 1, 0, 1, -1, 1, 0, 1, 0, 1],
    [0, 1, 2, 1, -2, 1, 0, 1, -1, 1, 0, 1, 0, 1],
    [1, 1, 2, 1, -2, 1, 0, 1, -1, 1, -1, 1, 0, 1],
    [1, 1, 2, 1, -2, 1, 0, 1, 0, 1, -1, 1, 0, 1],
    [1, 1, 2, 1, -2, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 2, 1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 2, 1, -3, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 2, 1, -2, 1, -1, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 2, 1, -1, 1, -2, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 2, 1, 0, 1, -2, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 2, 1, -1, 1, -1, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 3, 1, -2, 1, -2, 1, 0, 1, 0, 1, 0, 1] // N·m**2/C**2
];
/**
 * The string literals for the patterns.
 * The convention is to write the unit compactly (without whitespace).
 * TODO: Would be nice to separate...
 * Name (same as the variable name)
 * Symbol
 * Expression in terms of other SI units
 * Expression in terms of SI base units.
 */
var decodes = [
    ["F/m or C**2/N·m**2"],
    ["S or A/V"],
    ["F or C/V"],
    ["C**2/N"],
    ["C/kg"],
    ["N·m·m/kg·kg"],
    ["C/m**3"],
    ["C/m**2"],
    ["C/m"],
    ["J/kg"],
    ["Hz"],
    ["A"],
    ["m/s**2"],
    ["m/s"],
    ["kg·m/s"],
    ["Pa or N/m**2 or J/m**3"],
    ["Pa·s"],
    ["W/m**2"],
    ["N/m"],
    ["T or Wb/m**2"],
    ["W/(m·K)"],
    ["V/m or N/C"],
    ["N"],
    ["H/m"],
    ["J/K"],
    ["J/(kg·K)"],
    ["J/(mol·K)"],
    ["J/mol"],
    ["J or N·m"],
    ["J·s"],
    ["W or J/s"],
    ["V or W/A"],
    ["Ω or V/A"],
    ["H or Wb/A"],
    ["Wb"],
    ["N·m**2/C**2"]
];
var dumbString = function (multiplier, formatted, dimensions, labels, compact) {
    var stringify = function (rational, label) {
        if (rational.numer === 0) {
            return null;
        }
        else if (rational.denom === 1) {
            if (rational.numer === 1) {
                if (compact) {
                    return label;
                }
                else {
                    return label;
                }
            }
            else {
                return label + "**" + rational.numer;
            }
        }
        else {
            return label + "**" + rational;
        }
    };
    var operatorStr = multiplier === 1 || dimensions.isOne() ? (compact ? "" : " ") : " ";
    var scaleString = multiplier === 1 ? (compact ? "" : formatted) : formatted;
    var unitsString = [stringify(dimensions.M, labels[0]), stringify(dimensions.L, labels[1]), stringify(dimensions.T, labels[2]), stringify(dimensions.Q, labels[3]), stringify(dimensions.temperature, labels[4]), stringify(dimensions.amount, labels[5]), stringify(dimensions.intensity, labels[6])].filter(function (x) {
        return typeof x === 'string';
    }).join(" ");
    return "" + scaleString + operatorStr + unitsString;
};
var unitString = function (multiplier, formatted, dimensions, labels, compact) {
    var M = dimensions.M;
    var L = dimensions.L;
    var T = dimensions.T;
    var Q = dimensions.Q;
    var temperature = dimensions.temperature;
    var amount = dimensions.amount;
    var intensity = dimensions.intensity;
    for (var i = 0, len = patterns.length; i < len; i++) {
        var pattern = patterns[i];
        if (M.numer === pattern[0] && M.denom === pattern[1] &&
            L.numer === pattern[2] && L.denom === pattern[3] &&
            T.numer === pattern[4] && T.denom === pattern[5] &&
            Q.numer === pattern[6] && Q.denom === pattern[7] &&
            temperature.numer === pattern[8] && temperature.denom === pattern[9] &&
            amount.numer === pattern[10] && amount.denom === pattern[11] &&
            intensity.numer === pattern[12] && intensity.denom === pattern[13]) {
            if (!compact) {
                return multiplier + " * " + decodes[i][0];
            }
            else {
                if (multiplier !== 1) {
                    return multiplier + " * " + decodes[i][0];
                }
                else {
                    return decodes[i][0];
                }
            }
        }
    }
    return dumbString(multiplier, formatted, dimensions, labels, compact);
};
function add(lhs, rhs) {
    return Unit.valueOf(lhs.multiplier + rhs.multiplier, lhs.dimensions.compatible(rhs.dimensions), lhs.labels);
}
function sub(lhs, rhs) {
    return Unit.valueOf(lhs.multiplier - rhs.multiplier, lhs.dimensions.compatible(rhs.dimensions), lhs.labels);
}
function mul(lhs, rhs) {
    return Unit.valueOf(lhs.multiplier * rhs.multiplier, lhs.dimensions.mul(rhs.dimensions), lhs.labels);
}
function scale(α, unit) {
    return Unit.valueOf(α * unit.multiplier, unit.dimensions, unit.labels);
}
function div(lhs, rhs) {
    return Unit.valueOf(lhs.multiplier / rhs.multiplier, lhs.dimensions.div(rhs.dimensions), lhs.labels);
}
/**
 * <p>
 * The Unit class represents the units for a measure.
 * </p>
 */
var Unit = (function () {
    /**
     * @param multiplier
     * @param dimensions
     * @param labels The label strings to use for each dimension.
     */
    function Unit(multiplier, dimensions, labels) {
        this.multiplier = multiplier;
        this.dimensions = dimensions;
        this.labels = labels;
        if (labels.length !== 7) {
            throw new Error("Expecting 7 elements in the labels array.");
        }
        this.multiplier = multiplier;
        this.dimensions = dimensions;
        this.labels = labels;
    }
    Unit.prototype.compatible = function (rhs) {
        if (rhs instanceof Unit) {
            this.dimensions.compatible(rhs.dimensions);
            return this;
        }
        else {
            throw new Error("Illegal Argument for Unit.compatible: " + rhs);
        }
    };
    Unit.prototype.isCompatible = function (rhs) {
        if (rhs instanceof Unit) {
            return this.dimensions.equals(rhs.dimensions);
        }
        else {
            throw new Error("Illegal Argument for Unit.compatible: " + rhs);
        }
    };
    /**
     *
     */
    Unit.prototype.__add__ = function (rhs) {
        if (rhs instanceof Unit) {
            return add(this, rhs);
        }
        else {
            return void 0;
        }
    };
    Unit.prototype.__radd__ = function (lhs) {
        if (lhs instanceof Unit) {
            return add(lhs, this);
        }
        else {
            return void 0;
        }
    };
    Unit.prototype.__sub__ = function (rhs) {
        if (rhs instanceof Unit) {
            return sub(this, rhs);
        }
        else {
            return void 0;
        }
    };
    Unit.prototype.__rsub__ = function (lhs) {
        if (lhs instanceof Unit) {
            return sub(lhs, this);
        }
        else {
            return void 0;
        }
    };
    /**
     * Computes the unit equal to `this * rhs`.
     */
    Unit.prototype.mul = function (rhs) {
        return mul(this, rhs);
    };
    Unit.prototype.__mul__ = function (rhs) {
        if (rhs instanceof Unit) {
            return mul(this, rhs);
        }
        else if (typeof rhs === 'number') {
            return scale(rhs, this);
        }
        else {
            return void 0;
        }
    };
    Unit.prototype.__rmul__ = function (lhs) {
        if (lhs instanceof Unit) {
            return mul(lhs, this);
        }
        else if (typeof lhs === 'number') {
            return scale(lhs, this);
        }
        else {
            return void 0;
        }
    };
    /**
     * Computes the unit equal to `this / rhs`.
     */
    Unit.prototype.div = function (rhs) {
        return div(this, rhs);
    };
    Unit.prototype.__div__ = function (rhs) {
        if (rhs instanceof Unit) {
            return div(this, rhs);
        }
        else if (typeof rhs === 'number') {
            return Unit.valueOf(this.multiplier / rhs, this.dimensions, this.labels);
        }
        else {
            return void 0;
        }
    };
    Unit.prototype.__rdiv__ = function (lhs) {
        if (lhs instanceof Unit) {
            return div(lhs, this);
        }
        else if (typeof lhs === 'number') {
            return Unit.valueOf(lhs / this.multiplier, this.dimensions.inv(), this.labels);
        }
        else {
            return void 0;
        }
    };
    Unit.prototype.pow = function (exponent) {
        return Unit.valueOf(Math.pow(this.multiplier, exponent.numer / exponent.denom), this.dimensions.pow(exponent), this.labels);
    };
    Unit.prototype.inv = function () {
        return Unit.valueOf(1 / this.multiplier, this.dimensions.inv(), this.labels);
    };
    Unit.prototype.neg = function () {
        return Unit.valueOf(-this.multiplier, this.dimensions, this.labels);
    };
    Unit.prototype.isOne = function () {
        return this.dimensions.isOne() && (this.multiplier === 1);
    };
    Unit.prototype.sqrt = function () {
        return Unit.valueOf(Math.sqrt(this.multiplier), this.dimensions.sqrt(), this.labels);
    };
    Unit.prototype.toExponential = function (fractionDigits, compact) {
        return unitString(this.multiplier, this.multiplier.toExponential(fractionDigits), this.dimensions, this.labels, compact);
    };
    Unit.prototype.toFixed = function (fractionDigits, compact) {
        return unitString(this.multiplier, this.multiplier.toFixed(fractionDigits), this.dimensions, this.labels, compact);
    };
    Unit.prototype.toPrecision = function (precision, compact) {
        return unitString(this.multiplier, this.multiplier.toPrecision(precision), this.dimensions, this.labels, compact);
    };
    Unit.prototype.toString = function (radix, compact) {
        return unitString(this.multiplier, this.multiplier.toString(radix), this.dimensions, this.labels, compact);
    };
    Unit.prototype.__pos__ = function () {
        return this;
    };
    Unit.prototype.__neg__ = function () {
        return this.neg();
    };
    /**
     * @param uom The unit of measure.
     */
    Unit.isOne = function (uom) {
        if (uom === void 0) {
            return true;
        }
        else if (uom instanceof Unit) {
            return uom.isOne();
        }
        else {
            throw new Error("isOne argument must be a Unit or undefined.");
        }
    };
    /**
     * @param uom The unit of measure that must be dimensionless.
     */
    Unit.assertDimensionless = function (uom) {
        if (!Unit.isOne(uom)) {
            throw new Error("uom " + uom + " must be dimensionless.");
        }
    };
    /**
     * @param lhs
     * @param rhs
     * @returns
     */
    Unit.compatible = function (lhs, rhs) {
        if (lhs) {
            if (rhs) {
                return lhs.compatible(rhs);
            }
            else {
                if (lhs.isOne()) {
                    return void 0;
                }
                else {
                    throw new Error(lhs + " is incompatible with 1");
                }
            }
        }
        else {
            if (rhs) {
                if (rhs.isOne()) {
                    return void 0;
                }
                else {
                    throw new Error("1 is incompatible with " + rhs);
                }
            }
            else {
                return void 0;
            }
        }
    };
    Unit.isCompatible = function (lhs, rhs) {
        if (lhs) {
            if (rhs) {
                return lhs.isCompatible(rhs);
            }
            else {
                if (lhs.isOne()) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            if (rhs) {
                if (rhs.isOne()) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
    };
    /**
     * @param lhs
     * @param rhs
     * @returns
     */
    Unit.mul = function (lhs, rhs) {
        if (lhs) {
            if (rhs) {
                return lhs.mul(rhs);
            }
            else if (Unit.isOne(rhs)) {
                return lhs;
            }
            else {
                return void 0;
            }
        }
        else if (Unit.isOne(lhs)) {
            return rhs;
        }
        else {
            return void 0;
        }
    };
    /**
     * @param lhs
     * @param rhs
     */
    Unit.div = function (lhs, rhs) {
        if (lhs) {
            if (rhs) {
                return lhs.div(rhs);
            }
            else {
                return lhs;
            }
        }
        else {
            if (rhs) {
                return rhs.inv();
            }
            else {
                return Unit.ONE;
            }
        }
    };
    /**
     * Computes the multiplicative inverse of the specified unit of measure.
     */
    Unit.inv = function (uom) {
        if (uom instanceof Unit) {
            if (uom.isOne()) {
                return Unit.ONE;
            }
            else {
                return uom.inv();
            }
        }
        else {
            return Unit.ONE;
        }
    };
    /**
     *
     */
    Unit.mustBeUnit = function (name, uom) {
        if (uom instanceof Unit) {
            return uom;
        }
        else if (isUndefined(uom)) {
            return Unit.ONE;
        }
        else {
            throw new Error(name + " must be a Unit or undefined (meaning 1).");
        }
    };
    /**
     * Computes the value of the unit of measure raised to the specified power.
     */
    Unit.pow = function (uom, exponent) {
        if (uom instanceof Unit) {
            if (uom.isOne()) {
                return void 0;
            }
            else {
                if (exponent.isZero()) {
                    return void 0;
                }
                else {
                    return uom.pow(exponent);
                }
            }
        }
        else {
            return void 0;
        }
    };
    /**
     * @param uom
     * @returns
     */
    Unit.sqrt = function (uom) {
        if (uom instanceof Unit) {
            if (uom.isOne()) {
                return void 0;
            }
            else {
                return uom.sqrt();
            }
        }
        else {
            return void 0;
        }
    };
    /**
     * Constructs a Unit.
     */
    Unit.valueOf = function (multiplier, dimensions, labels) {
        // This method is optimized to minimize object creation.
        // The summary on the dimensions is used to improve lookup time.
        if (multiplier === 1) {
            switch (dimensions.summary) {
                case DimensionsSummary.AMOUNT_OF_SUBSTANCE: return Unit.MOLE;
                case DimensionsSummary.ANGULAR_MOMENTUM: return Unit.JOULE_SECOND;
                case DimensionsSummary.AREA: return Unit.METER_SQUARED;
                case DimensionsSummary.ELECTRIC_CHARGE: return Unit.COULOMB;
                case DimensionsSummary.ELECTRIC_CURRENT: return Unit.AMPERE;
                case DimensionsSummary.ELECTRIC_FIELD: return Unit.ELECTRIC_FIELD;
                case DimensionsSummary.ELECTRIC_PERMITTIVITY_TIMES_AREA: return Unit.COULOMB_SQUARED_PER_NEWTON;
                case DimensionsSummary.ENERGY_OR_TORQUE: return Unit.JOULE;
                case DimensionsSummary.FORCE: return Unit.NEWTON;
                case DimensionsSummary.LUMINOUS_INTENSITY: return Unit.CANDELA;
                case DimensionsSummary.INV_LENGTH: return Unit.INV_METER;
                case DimensionsSummary.INV_MASS: return Unit.INV_KILOGRAM;
                case DimensionsSummary.INV_MOMENT_OF_INERTIA: return Unit.INV_KILOGRAM_METER_SQUARED;
                case DimensionsSummary.INV_TIME: return Unit.INV_SECOND;
                case DimensionsSummary.LENGTH: return Unit.METER;
                case DimensionsSummary.MASS: return Unit.KILOGRAM;
                case DimensionsSummary.MOMENT_OF_INERTIA: return Unit.KILOGRAM_METER_SQUARED;
                case DimensionsSummary.MOMENTUM: return Unit.KILOGRAM_METER_PER_SECOND;
                case DimensionsSummary.MOMENTUM_SQUARED: return Unit.KILOGRAM_SQUARED_METER_SQUARED_PER_SECOND_SQUARED;
                case DimensionsSummary.ONE: return Unit.ONE;
                case DimensionsSummary.RATE_OF_CHANGE_OF_AREA: return Unit.METER_SQUARED_PER_SECOND;
                case DimensionsSummary.STIFFNESS: return Unit.STIFFNESS;
                case DimensionsSummary.THERMODYNAMIC_TEMPERATURE: return Unit.KELVIN;
                case DimensionsSummary.TIME: return Unit.SECOND;
                case DimensionsSummary.TIME_SQUARED: return Unit.SECOND_SQUARED;
                case DimensionsSummary.VELOCITY: return Unit.METER_PER_SECOND;
                case DimensionsSummary.VELOCITY_SQUARED: return Unit.METER_SQUARED_PER_SECOND_SQUARED;
                case DimensionsSummary.VOLUME: return Unit.METER_CUBED;
                default: {
                    // Do nothing.
                }
            }
        }
        // console.warn(`Unit.valueOf(${multiplier},${dimensions}) is not cached.`);
        return new Unit(multiplier, dimensions, labels);
    };
    /**
     * Internal symbolic constant to improve code readability.
     * May be undefined or an instance of Unit.
     */
    Unit.ONE = new Unit(1, Dimensions.ONE, SYMBOLS_SI);
    /**
     * Unit of mass.
     * The kilogram is the unit of mass; it is equal to the mass of the international prototype of the kilogram.
     */
    Unit.KILOGRAM = new Unit(1, Dimensions.MASS, SYMBOLS_SI);
    /**
     * Unit of length.
     * The meter is the length of the path travelled by light in vacuum during a time interval of 1/299 792 458 of a second.
     */
    Unit.METER = new Unit(1, Dimensions.LENGTH, SYMBOLS_SI);
    /**
     * Unit of time.
     * The second is the duration of 9 192 631 770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium 133 atom.
     */
    Unit.SECOND = new Unit(1, Dimensions.TIME, SYMBOLS_SI);
    /**
     * Unit of electric charge.
     *
     */
    Unit.COULOMB = new Unit(1, Dimensions.ELECTRIC_CHARGE, SYMBOLS_SI);
    /**
     * Unit of electric current.
     * The ampere is that constant current which,
     * if maintained in two straight parallel conductors of infinite length,
     * of negligible circular cross-section,
     * and placed 1 meter apart in vacuum,
     * would produce between these conductors a force equal to 2 x 10<sup>-7</sup> newton per meter of length.
     */
    Unit.AMPERE = new Unit(1, Dimensions.ELECTRIC_CURRENT, SYMBOLS_SI);
    /**
     * Unit of thermodynamic temperature.
     * The kelvin, unit of thermodynamic temperature, is the fraction 1/273.16 of the thermodynamic temperature of the triple point of water.
     */
    Unit.KELVIN = new Unit(1, Dimensions.THERMODYNAMIC_TEMPERATURE, SYMBOLS_SI);
    /**
     * Unit of amount of substance.
     * 1. The mole is the amount of substance of a system which contains as many elementary entities as there are atoms in 0.012 kilogram of carbon 12; its symbol is "mol."
     * 2. When the mole is used, the elementary entities must be specified and may be atoms, molecules, ions, electrons, other particles, or specified groups of such particles.
     */
    Unit.MOLE = new Unit(1, Dimensions.AMOUNT_OF_SUBSTANCE, SYMBOLS_SI);
    /**
     * Unit of luminous intensity.
     * The candela is the luminous intensity, in a given direction,
     * of a source that emits monochromatic radiation of frequency 540 x 10<sup>12</sup> hertz and that has a radiant intensity in that direction of 1/683 watt per steradian.
     */
    Unit.CANDELA = new Unit(1, Dimensions.LUMINOUS_INTENSITY, SYMBOLS_SI);
    Unit.COULOMB_SQUARED_PER_NEWTON = new Unit(1, Dimensions.ELECTRIC_PERMITTIVITY_TIMES_AREA, SYMBOLS_SI);
    Unit.ELECTRIC_FIELD = new Unit(1, Dimensions.ELECTRIC_FIELD, SYMBOLS_SI);
    /**
     *
     */
    Unit.NEWTON = new Unit(1, Dimensions.FORCE, SYMBOLS_SI);
    /**
     *
     */
    Unit.JOULE = new Unit(1, Dimensions.ENERGY_OR_TORQUE, SYMBOLS_SI);
    /**
     * The unit of angular momentum.
     */
    Unit.JOULE_SECOND = new Unit(1, Dimensions.ANGULAR_MOMENTUM, SYMBOLS_SI);
    Unit.METER_SQUARED = new Unit(1, Dimensions.AREA, SYMBOLS_SI);
    Unit.METER_CUBED = new Unit(1, Dimensions.VOLUME, SYMBOLS_SI);
    Unit.SECOND_SQUARED = new Unit(1, Dimensions.TIME_SQUARED, SYMBOLS_SI);
    Unit.INV_KILOGRAM = new Unit(1, Dimensions.INV_MASS, SYMBOLS_SI);
    Unit.INV_METER = new Unit(1, Dimensions.INV_LENGTH, SYMBOLS_SI);
    Unit.INV_SECOND = new Unit(1, Dimensions.INV_TIME, SYMBOLS_SI);
    Unit.KILOGRAM_METER_SQUARED = new Unit(1, Dimensions.MOMENT_OF_INERTIA, SYMBOLS_SI);
    /**
     * The unit of momentum.
     */
    Unit.KILOGRAM_METER_PER_SECOND = new Unit(1, Dimensions.MOMENTUM, SYMBOLS_SI);
    Unit.KILOGRAM_SQUARED_METER_SQUARED_PER_SECOND_SQUARED = new Unit(1, Dimensions.MOMENTUM_SQUARED, SYMBOLS_SI);
    Unit.INV_KILOGRAM_METER_SQUARED = new Unit(1, Dimensions.INV_MOMENT_OF_INERTIA, SYMBOLS_SI);
    Unit.STIFFNESS = new Unit(1, Dimensions.STIFFNESS, SYMBOLS_SI);
    Unit.METER_PER_SECOND = new Unit(1, Dimensions.VELOCITY, SYMBOLS_SI);
    Unit.METER_SQUARED_PER_SECOND = new Unit(1, Dimensions.RATE_OF_CHANGE_OF_AREA, SYMBOLS_SI);
    Unit.METER_SQUARED_PER_SECOND_SQUARED = new Unit(1, Dimensions.VELOCITY_SQUARED, SYMBOLS_SI);
    return Unit;
}());

function extG3(a, b, out) {
    out.uom = Unit.mul(a.uom, b.uom);
    var a0 = compG3Get(a, 0);
    var a1 = compG3Get(a, 1);
    var a2 = compG3Get(a, 2);
    var a3 = compG3Get(a, 3);
    var a4 = compG3Get(a, 4);
    var a5 = compG3Get(a, 5);
    var a6 = compG3Get(a, 6);
    var a7 = compG3Get(a, 7);
    var b0 = compG3Get(b, 0);
    var b1 = compG3Get(b, 1);
    var b2 = compG3Get(b, 2);
    var b3 = compG3Get(b, 3);
    var b4 = compG3Get(b, 4);
    var b5 = compG3Get(b, 5);
    var b6 = compG3Get(b, 6);
    var b7 = compG3Get(b, 7);
    for (var i = 0; i < 8; i++) {
        compG3Set(out, i, extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, i));
    }
    return out;
}

var abs = Math.abs;
function makeColumnVector(n, v) {
    var a = [];
    for (var i = 0; i < n; i++) {
        a.push(v);
    }
    return a;
}
function rowWithMaximumInColumn(A, column, N) {
    var biggest = abs(A[column][column]);
    var maxRow = column;
    for (var row = column + 1; row < N; row++) {
        if (abs(A[row][column]) > biggest) {
            biggest = abs(A[row][column]);
            maxRow = row;
        }
    }
    return maxRow;
}
function swapRows(A, i, j, N) {
    var colLength = N + 1;
    for (var column = i; column < colLength; column++) {
        var temp = A[j][column];
        A[j][column] = A[i][column];
        A[i][column] = temp;
    }
}
function makeZeroBelow(A, i, N) {
    for (var row = i + 1; row < N; row++) {
        var c = -A[row][i] / A[i][i];
        for (var column = i; column < N + 1; column++) {
            if (i === column) {
                A[row][column] = 0;
            }
            else {
                A[row][column] += c * A[i][column];
            }
        }
    }
}
function solve(A, N) {
    var x = makeColumnVector(N, 0);
    for (var i = N - 1; i > -1; i--) {
        x[i] = A[i][N] / A[i][i];
        for (var k = i - 1; k > -1; k--) {
            A[k][N] -= A[k][i] * x[i];
        }
    }
    return x;
}
/**
 * Gaussian elimination
 * Ax = b
 */
function gauss(A, b) {
    var N = A.length;
    for (var i = 0; i < N; i++) {
        var Ai = A[i];
        var bi = b[i];
        Ai.push(bi);
    }
    for (var j = 0; j < N; j++) {
        swapRows(A, j, rowWithMaximumInColumn(A, j, N), N);
        makeZeroBelow(A, j, N);
    }
    return solve(A, N);
}

function isScalarG3(m) {
    return m.x === 0 && m.y === 0 && m.z === 0 && m.xy === 0 && m.yz === 0 && m.zx === 0 && m.b === 0;
}

function isNumber(x) {
    return (typeof x === 'number');
}

function isObject(x) {
    return (typeof x === 'object');
}

/**
 * Determines whether the argument supports the VectorE3 interface.
 * The argument must be a non-null object and must support the x, y, and z numeric properties.
 */
function isVectorE3(v) {
    if (isObject(v) && !isNull(v)) {
        return isNumber(v.x) && isNumber(v.y) && isNumber(v.z);
    }
    else {
        return false;
    }
}

function isVectorG3(m) {
    return m.a === 0 && m.xy === 0 && m.yz === 0 && m.zx === 0 && m.b === 0;
}

/**
 * Returns true if all coordinates of the bivector are exactly zero.
 */
function isZeroBivectorE3(m) {
    return m.yz === 0 && m.zx === 0 && m.xy === 0;
}

/**
 * Returns true if all coordinates of the vector are exactly zero.
 */
function isZeroVectorE3(v) {
    return v.x === 0 && v.y === 0 && v.z === 0;
}

/**
 * Returns true if all coordinates of the vector are exactly zero.
 */
function isZeroGeometricE3(m) {
    return isZeroVectorE3(m) && isZeroBivectorE3(m) && m.a === 0 && m.b === 0;
}

function lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index | 0;
    var x = 0.0;
    switch (~(~index)) {
        case 0:
            {
                x = +(a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3 - a4 * b4 - a5 * b5 - a6 * b6 - a7 * b7);
            }
            break;
        case 1:
            {
                x = +(a0 * b1 - a2 * b4 + a3 * b6 - a5 * b7);
            }
            break;
        case 2:
            {
                x = +(a0 * b2 + a1 * b4 - a3 * b5 - a6 * b7);
            }
            break;
        case 3:
            {
                x = +(a0 * b3 - a1 * b6 + a2 * b5 - a4 * b7);
            }
            break;
        case 4:
            {
                x = +(a0 * b4 + a3 * b7);
            }
            break;
        case 5:
            {
                x = +(a0 * b5 + a1 * b7);
            }
            break;
        case 6:
            {
                x = +(a0 * b6 + a2 * b7);
            }
            break;
        case 7:
            {
                x = +(a0 * b7);
            }
            break;
        default: {
            throw new Error("index must be in the range [0..7]");
        }
    }
    return +x;
}

function lcoG3(a, b, out) {
    out.uom = Unit.mul(a.uom, b.uom);
    var a0 = compG3Get(a, 0);
    var a1 = compG3Get(a, 1);
    var a2 = compG3Get(a, 2);
    var a3 = compG3Get(a, 3);
    var a4 = compG3Get(a, 4);
    var a5 = compG3Get(a, 5);
    var a6 = compG3Get(a, 6);
    var a7 = compG3Get(a, 7);
    var b0 = compG3Get(b, 0);
    var b1 = compG3Get(b, 1);
    var b2 = compG3Get(b, 2);
    var b3 = compG3Get(b, 3);
    var b4 = compG3Get(b, 4);
    var b5 = compG3Get(b, 5);
    var b6 = compG3Get(b, 6);
    var b7 = compG3Get(b, 7);
    for (var i = 0; i < 8; i++) {
        compG3Set(out, i, lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, i));
    }
    return out;
}

var ONE = void 0; // Unit.ONE;
var scratch = { a: 0, x: 0, y: 0, z: 0, yz: 0, zx: 0, xy: 0, b: 0, uom: ONE };
function maskG3(arg) {
    if (isObject(arg) && 'maskG3' in arg) {
        var duck = arg;
        var g = arg;
        if (duck.maskG3 & 0x1) {
            scratch.a = g.a;
        }
        else {
            scratch.a = 0;
        }
        if (duck.maskG3 & 0x2) {
            scratch.x = g.x;
            scratch.y = g.y;
            scratch.z = g.z;
        }
        else {
            scratch.x = 0;
            scratch.y = 0;
            scratch.z = 0;
        }
        if (duck.maskG3 & 0x4) {
            scratch.yz = g.yz;
            scratch.zx = g.zx;
            scratch.xy = g.xy;
        }
        else {
            scratch.yz = 0;
            scratch.zx = 0;
            scratch.xy = 0;
        }
        if (duck.maskG3 & 0x8) {
            scratch.b = g.b;
        }
        else {
            scratch.b = 0;
        }
        scratch.uom = Unit.mustBeUnit('g.uom', g.uom);
        return scratch;
    }
    else if (isNumber(arg)) {
        scratch.a = arg;
        scratch.x = 0;
        scratch.y = 0;
        scratch.z = 0;
        scratch.yz = 0;
        scratch.zx = 0;
        scratch.xy = 0;
        scratch.b = 0;
        scratch.uom = ONE;
        return scratch;
    }
    else {
        return void 0;
    }
}

/**
 * Multiplication of Geometric3.
 * This was originally written for asm.
 */
function mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    switch (index) {
        case 0: {
            return a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3 - a4 * b4 - a5 * b5 - a6 * b6 - a7 * b7;
        }
        case 1: {
            return a0 * b1 + a1 * b0 - a2 * b4 + a3 * b6 + a4 * b2 - a5 * b7 - a6 * b3 - a7 * b5;
        }
        case 2: {
            return a0 * b2 + a1 * b4 + a2 * b0 - a3 * b5 - a4 * b1 + a5 * b3 - a6 * b7 - a7 * b6;
        }
        case 3: {
            return a0 * b3 - a1 * b6 + a2 * b5 + a3 * b0 - a4 * b7 - a5 * b2 + a6 * b1 - a7 * b4;
        }
        case 4: {
            return a0 * b4 + a1 * b2 - a2 * b1 + a3 * b7 + a4 * b0 - a5 * b6 + a6 * b5 + a7 * b3;
        }
        case 5: {
            return a0 * b5 + a1 * b7 + a2 * b3 - a3 * b2 + a4 * b6 + a5 * b0 - a6 * b4 + a7 * b1;
        }
        case 6: {
            return a0 * b6 - a1 * b3 + a2 * b7 + a3 * b1 - a4 * b5 + a5 * b4 + a6 * b0 + a7 * b2;
        }
        case 7: {
            return a0 * b7 + a1 * b5 + a2 * b6 + a3 * b4 + a4 * b3 + a5 * b1 + a6 * b2 + a7 * b0;
        }
        default: {
            throw new Error("index must be in the range [0..7]");
        }
    }
}

/**
 * Computes a random number within the specified range.
 */
function randomRange(a, b) {
    return (b - a) * Math.random() + a;
}

function mustSatisfy(name, condition, messageBuilder, contextBuilder) {
    if (!condition) {
        var message = messageBuilder ? messageBuilder() : "satisfy some condition";
        var context = contextBuilder ? " in " + contextBuilder() : "";
        throw new Error(name + " must " + message + context + ".");
    }
}

function isString(s) {
    return (typeof s === 'string');
}

function beAString() {
    return "be a string";
}
function mustBeString(name, value, contextBuilder) {
    mustSatisfy(name, isString(value), beAString, contextBuilder);
    return value;
}

function readOnly(name) {
    mustBeString('name', name);
    var message = {
        get message() {
            return "Property `" + name + "` is readonly.";
        }
    };
    return message;
}

function rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index | 0;
    var x = 0.0;
    switch (~(~index)) {
        case 0:
            {
                x = +(a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3 - a4 * b4 - a5 * b5 - a6 * b6 - a7 * b7);
            }
            break;
        case 1:
            {
                x = +(+a1 * b0 + a4 * b2 - a6 * b3 - a7 * b5);
            }
            break;
        case 2:
            {
                x = +(+a2 * b0 - a4 * b1 + a5 * b3 - a7 * b6);
            }
            break;
        case 3:
            {
                x = +(+a3 * b0 - a5 * b2 + a6 * b1 - a7 * b4);
            }
            break;
        case 4:
            {
                x = +(+a4 * b0 + a7 * b3);
            }
            break;
        case 5:
            {
                x = +(+a5 * b0 + a7 * b1);
            }
            break;
        case 6:
            {
                x = +(+a6 * b0 + a7 * b2);
            }
            break;
        case 7:
            {
                x = +(+a7 * b0);
            }
            break;
        default: {
            throw new Error("index must be in the range [0..7]");
        }
    }
    return +x;
}

function rcoG3(a, b, out) {
    out.uom = Unit.mul(a.uom, b.uom);
    var a0 = compG3Get(a, 0);
    var a1 = compG3Get(a, 1);
    var a2 = compG3Get(a, 2);
    var a3 = compG3Get(a, 3);
    var a4 = compG3Get(a, 4);
    var a5 = compG3Get(a, 5);
    var a6 = compG3Get(a, 6);
    var a7 = compG3Get(a, 7);
    var b0 = compG3Get(b, 0);
    var b1 = compG3Get(b, 1);
    var b2 = compG3Get(b, 2);
    var b3 = compG3Get(b, 3);
    var b4 = compG3Get(b, 4);
    var b5 = compG3Get(b, 5);
    var b6 = compG3Get(b, 6);
    var b7 = compG3Get(b, 7);
    for (var i = 0; i < 8; i++) {
        compG3Set(out, i, rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, i));
    }
    return out;
}

function quadVectorE3(vector) {
    var x = vector.x;
    var y = vector.y;
    var z = vector.z;
    return x * x + y * y + z * z;
}

/**
 * Computes the z component of the cross-product of Cartesian vector components.
 */
function wedgeXY(ax, ay, az, bx, by, bz) {
    return ax * by - ay * bx;
}

/**
 * Computes the x component of the cross-product of Cartesian vector components.
 */
function wedgeYZ(ax, ay, az, bx, by, bz) {
    return ay * bz - az * by;
}

/**
 * Computes the y component of the cross-product of Cartesian vector components.
 */
function wedgeZX(ax, ay, az, bx, by, bz) {
    return az * bx - ax * bz;
}

var sqrt = Math.sqrt;
var cosPIdiv4 = Math.cos(Math.PI / 4);
var sinPIdiv4 = Math.sin(Math.PI / 4);
/**
 * Sets the output spinor to a rotor representing a rotation from a to b.
 * R = (|b||a| + b * a) / sqrt(2 * |b||a|(|b||a| + b << a))
 * If the vectors are anti-parallel, making the plane of rotation ambiguous,
 * the bivector B will be used if specified.
 * Otherwise, sets the output spinor to a random bivector if the vectors are anti-parallel.
 * The result is independent of the magnitudes of a and b.
 */
function rotorFromDirectionsE3(a, b, B, m) {
    // Optimization for equal vectors.
    if (a.x === b.x && a.y === b.y && a.z === b.z) {
        // An easy optimization is simply to compare the vectors for equality.
        m.one();
        return;
    }
    // Optimizations for cardinal directions.
    if (a.x === 1 && a.y === 0 && a.z === 0 && b.x === 0 && b.y === 1 && b.z === 0) {
        // e1 to e2
        m.zero();
        m.a = cosPIdiv4;
        m.xy = -sinPIdiv4;
        return;
    }
    if (a.x === 1 && a.y === 0 && a.z === 0 && b.x === 0 && b.y === 0 && b.z === 1) {
        // e1 to e3
        m.zero();
        m.a = cosPIdiv4;
        m.zx = sinPIdiv4;
        return;
    }
    if (a.x === 0 && a.y === 1 && a.z === 0 && b.x === 1 && b.y === 0 && b.z === 0) {
        // e2 to e1
        m.zero();
        m.a = cosPIdiv4;
        m.xy = sinPIdiv4;
        return;
    }
    if (a.x === 0 && a.y === 1 && a.z === 0 && b.x === 0 && b.y === 0 && b.z === 1) {
        // e2 to e3
        m.zero();
        m.a = cosPIdiv4;
        m.yz = -sinPIdiv4;
        return;
    }
    if (a.x === 0 && a.y === 0 && a.z === 1 && b.x === 1 && b.y === 0 && b.z === 0) {
        // e3 to e1
        m.zero();
        m.a = cosPIdiv4;
        m.zx = -sinPIdiv4;
        return;
    }
    if (a.x === 0 && a.y === 0 && a.z === 1 && b.x === 0 && b.y === 1 && b.z === 0) {
        // e3 to e2
        m.zero();
        m.a = cosPIdiv4;
        m.yz = sinPIdiv4;
        return;
    }
    if (a.x === 1 && a.y === 0 && a.z === 0 && b.x === 0 && b.y === -1 && b.z === 0) {
        // e1 to -e2
        m.zero();
        m.a = cosPIdiv4;
        m.xy = sinPIdiv4;
        return;
    }
    if (a.x === 1 && a.y === 0 && a.z === 0 && b.x === 0 && b.y === 0 && b.z === -1) {
        // e1 to -e3
        m.zero();
        m.a = cosPIdiv4;
        m.zx = -sinPIdiv4;
        return;
    }
    if (a.x === 0 && a.y === 1 && a.z === 0 && b.x === -1 && b.y === 0 && b.z === 0) {
        // e2 to -e1
        m.zero();
        m.a = cosPIdiv4;
        m.xy = -sinPIdiv4;
        return;
    }
    if (a.x === 0 && a.y === 1 && a.z === 0 && b.x === 0 && b.y === 0 && b.z === -1) {
        // e2 to -e3
        m.zero();
        m.a = cosPIdiv4;
        m.yz = sinPIdiv4;
        return;
    }
    if (a.x === 0 && a.y === 0 && a.z === 1 && b.x === -1 && b.y === 0 && b.z === 0) {
        // e3 to -e1
        m.zero();
        m.a = cosPIdiv4;
        m.zx = sinPIdiv4;
        return;
    }
    if (a.x === 0 && a.y === 0 && a.z === 1 && b.x === 0 && b.y === -1 && b.z === 0) {
        // e3 to -e2
        m.zero();
        m.a = cosPIdiv4;
        m.yz = -sinPIdiv4;
        return;
    }
    if (a.x === -1 && a.y === 0 && a.z === 0 && b.x === 0 && b.y === 1 && b.z === 0) {
        // -e1 to +e2
        m.zero();
        m.a = cosPIdiv4;
        m.xy = sinPIdiv4;
        return;
    }
    if (a.x === -1 && a.y === 0 && a.z === 0 && b.x === 0 && b.y === 0 && b.z === 1) {
        // -e1 to +e3
        m.zero();
        m.a = cosPIdiv4;
        m.zx = -sinPIdiv4;
        return;
    }
    // Optimizations when the plane of rotation is ambiguous and a default bivector is not defined.
    if (typeof B === 'undefined') {
        if (a.x === 1 && a.y === 0 && a.z === 0 && b.x === -1 && b.y === 0 && b.z === 0) {
            // +e1 to -e1.
            m.zero();
            m.xy = -1;
            return;
        }
        if (a.x === -1 && a.y === 0 && a.z === 0 && b.x === 1 && b.y === 0 && b.z === 0) {
            // -e1 to +e1.
            m.zero();
            m.xy = -1;
            return;
        }
        if (a.x === 0 && a.y === 1 && a.z === 0 && b.x === 0 && b.y === -1 && b.z === 0) {
            // +e2 to -e2.
            m.zero();
            m.xy = -1;
            return;
        }
        if (a.x === 0 && a.y === -1 && a.z === 0 && b.x === 0 && b.y === +1 && b.z === 0) {
            // -e2 to +e2.
            m.zero();
            m.xy = -1;
            return;
        }
        if (a.x === 0 && a.y === 0 && a.z === 1 && b.x === 0 && b.y === 0 && b.z === -1) {
            // +e3 to -e3.
            m.zero();
            m.zx = -1;
            return;
        }
        if (a.x === 0 && a.y === 0 && a.z === -1 && b.x === 0 && b.y === 0 && b.z === +1) {
            // -e3 to +e3.
            m.zero();
            m.zx = -1;
            return;
        }
    }
    var quadA = quadVectorE3(a);
    var absA = sqrt(quadA);
    var quadB = quadVectorE3(b);
    var absB = sqrt(quadB);
    var BA = absB * absA;
    var dotBA = dotVectorE3(b, a);
    var denom = sqrt(2 * (quadB * quadA + BA * dotBA));
    if (denom !== 0) {
        m = m.versor(b, a);
        m = m.addScalar(BA);
        m = m.divByScalar(denom);
    }
    else {
        // The denominator is zero when |a||b| + a << b = 0.
        // If θ is the angle between a and b, then  cos(θ) = (a << b) /|a||b| = -1
        // Then a and b are anti-parallel.
        // The plane of the rotation is ambiguous.
        // Compute a random bivector containing the start vector, then turn
        // it into a rotor that achieves the 180-degree rotation.
        if (B) {
            m.rotorFromGeneratorAngle(B, Math.PI);
        }
        else {
            var rx = Math.random();
            var ry = Math.random();
            var rz = Math.random();
            m.zero();
            m.yz = wedgeYZ(rx, ry, rz, a.x, a.y, a.z);
            m.zx = wedgeZX(rx, ry, rz, a.x, a.y, a.z);
            m.xy = wedgeXY(rx, ry, rz, a.x, a.y, a.z);
            m.direction(true);
            m.rotorFromGeneratorAngle(m, Math.PI);
        }
    }
}

function scpG3(a, b, out) {
    var a0 = compG3Get(a, 0);
    var a1 = compG3Get(a, 1);
    var a2 = compG3Get(a, 2);
    var a3 = compG3Get(a, 3);
    var a4 = compG3Get(a, 4);
    var a5 = compG3Get(a, 5);
    var a6 = compG3Get(a, 6);
    var a7 = compG3Get(a, 7);
    var b0 = compG3Get(b, 0);
    var b1 = compG3Get(b, 1);
    var b2 = compG3Get(b, 2);
    var b3 = compG3Get(b, 3);
    var b4 = compG3Get(b, 4);
    var b5 = compG3Get(b, 5);
    var b6 = compG3Get(b, 6);
    var b7 = compG3Get(b, 7);
    compG3Set(out, 0, mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0));
    compG3Set(out, 1, 0);
    compG3Set(out, 2, 0);
    compG3Set(out, 3, 0);
    compG3Set(out, 4, 0);
    compG3Set(out, 5, 0);
    compG3Set(out, 6, 0);
    compG3Set(out, 7, 0);
    out.uom = Unit.mul(a.uom, b.uom);
    return out;
}

function squaredNormG3(m) {
    var a = m.a;
    var x = m.x;
    var y = m.y;
    var z = m.z;
    var yz = m.yz;
    var zx = m.zx;
    var xy = m.xy;
    var b = m.b;
    return a * a + x * x + y * y + z * z + yz * yz + zx * zx + xy * xy + b * b;
}

function isArray(x) {
    return Object.prototype.toString.call(x) === '[object Array]';
}

function beAnArray() {
    return "be an array";
}
function mustBeArray(name, value, contextBuilder) {
    mustSatisfy(name, isArray(value), beAnArray, contextBuilder);
    return value;
}

function isLabelOne(label) {
    if (typeof label === 'string') {
        return label === "1";
    }
    else {
        var labels = mustBeArray('label', label);
        if (labels.length === 2) {
            return isLabelOne(labels[0]) && isLabelOne(labels[1]);
        }
        else if (labels.length === 1) {
            return isLabelOne(labels[0]);
        }
        else {
            return false;
        }
    }
}
function appendLabel(coord, label, sb) {
    if (typeof label === 'string') {
        sb.push(label);
    }
    else {
        var labels = mustBeArray('label', label);
        if (labels.length === 2) {
            sb.push(coord > 0 ? labels[1] : labels[0]);
        }
        else if (labels.length === 1) {
            sb.push(labels[0]);
        }
        else if (labels.length === 0) {
            // Do nothing.
        }
        else {
            throw new Error("Unexpected basis label array length: " + labels.length);
        }
    }
}
function appendCoord(coord, numberToString, label, sb) {
    if (coord !== 0) {
        if (coord >= 0) {
            if (sb.length > 0) {
                sb.push("+");
            }
        }
        else {
            // The coordinate is negative.
            if (typeof label === 'string') {
                // There's only one label, we must use minus signs.
                sb.push("-");
            }
            else {
                var labels = mustBeArray('label', label);
                if (labels.length === 2) {
                    if (labels[0] !== labels[1]) {
                        if (sb.length > 0) {
                            sb.push("+");
                        }
                    }
                    else {
                        sb.push("-");
                    }
                }
                else if (labels.length === 1) {
                    sb.push("-");
                }
                else {
                    // This could be considered an error, but we'll let appendLabel deal with it!
                    sb.push("-");
                }
            }
        }
        var n = Math.abs(coord);
        if (n === 1) {
            // 1 times something is just 1, so we only need the label.
            appendLabel(coord, label, sb);
        }
        else {
            sb.push(numberToString(n));
            if (!isLabelOne(label)) {
                sb.push("*");
                appendLabel(coord, label, sb);
            }
            else {
                // 1 times anything is just the thing.
                // We don't need the scalar label, but maybe we might?
            }
        }
    }
    else {
        // Do nothing if the coordinate is zero.
    }
}
function stringFromCoordinates(coordinates, numberToString, labels, uom) {
    var sb = [];
    for (var i = 0, iLength = coordinates.length; i < iLength; i++) {
        var coord = coordinates[i];
        if (isDefined(coord)) {
            appendCoord(coord, numberToString, labels[i], sb);
        }
        else {
            // We'll just say that the whole thing is undefined.
            return void 0;
        }
    }
    if (Unit.isOne(uom)) {
        return sb.length > 0 ? sb.join("") : "0";
    }
    else {
        return sb.length > 0 ? sb.join("") + " " + uom.toString(10, true) : "0";
    }
}

// Symbolic constants for the coordinate indices into the data array.
var COORD_SCALAR = 0;
var COORD_X = 1;
var COORD_Y = 2;
var COORD_Z = 3;
var COORD_XY = 4;
var COORD_YZ = 5;
var COORD_ZX = 6;
var COORD_PSEUDO = 7;
// FIXME: Change to Canonical ordering.
var BASIS_LABELS = ["1", "e1", "e2", "e3", "e12", "e23", "e31", "e123"];
BASIS_LABELS[COORD_SCALAR] = '1';
BASIS_LABELS[COORD_X] = 'e1';
BASIS_LABELS[COORD_Y] = 'e2';
BASIS_LABELS[COORD_Z] = 'e3';
var zero = function zero() {
    return [0, 0, 0, 0, 0, 0, 0, 0];
};
var scalar = function scalar(a) {
    var coords = zero();
    coords[COORD_SCALAR] = a;
    return coords;
};
var vector = function vector(x, y, z) {
    var coords = zero();
    coords[COORD_X] = x;
    coords[COORD_Y] = y;
    coords[COORD_Z] = z;
    return coords;
};
var bivector = function bivector(yz, zx, xy) {
    var coords = zero();
    coords[COORD_YZ] = yz;
    coords[COORD_ZX] = zx;
    coords[COORD_XY] = xy;
    return coords;
};
var spinor = function spinor(a, yz, zx, xy) {
    var coords = zero();
    coords[COORD_SCALAR] = a;
    coords[COORD_YZ] = yz;
    coords[COORD_ZX] = zx;
    coords[COORD_XY] = xy;
    return coords;
};
var multivector = function multivector(a, x, y, z, yz, zx, xy, b) {
    var coords = zero();
    coords[COORD_SCALAR] = a;
    coords[COORD_X] = x;
    coords[COORD_Y] = y;
    coords[COORD_Z] = z;
    coords[COORD_YZ] = yz;
    coords[COORD_ZX] = zx;
    coords[COORD_XY] = xy;
    coords[COORD_PSEUDO] = b;
    return coords;
};
var pseudo = function pseudo(b) {
    var coords = zero();
    coords[COORD_PSEUDO] = b;
    return coords;
};
/**
 * Coordinates corresponding to basis labels.
 */
var coordinates = function coordinates(m) {
    var coords = zero();
    coords[COORD_SCALAR] = m.a;
    coords[COORD_X] = m.x;
    coords[COORD_Y] = m.y;
    coords[COORD_Z] = m.z;
    coords[COORD_YZ] = m.yz;
    coords[COORD_ZX] = m.zx;
    coords[COORD_XY] = m.xy;
    coords[COORD_PSEUDO] = m.b;
    return coords;
};
/**
 * Computes the cosine of the angle between two vectors.
 * cos(a, b) = (a | b) / |a||b|
 * This is dimensionless, so we are justified in simply returning a number.
 */
function cosVectorVector(a, b) {
    function scp(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }
    function norm(v) {
        return Math.sqrt(scp(v, v));
    }
    return scp(a, b) / (norm(a) * norm(b));
}
/**
 * Sets the lock on the multivector argument and returns the same argument.
 * This is a convenience function for the dunder (double underscore) methods.
 * All dunder methods should return locked values.
 */
function lock(m) {
    m.lock();
    return m;
}
/**
 * Scratch variable for holding cosines.
 */
var cosines = [];
/**
 * Sentinel value to indicate that the Geometric3 is not locked.
 * UNLOCKED is in the range -1 to 0.
 */
var UNLOCKED = -1 * Math.random();
/**
 * A multivector with a Euclidean metric and Cartesian coordinates.
 */
var Geometric3 = (function () {
    /**
     * Do not call this constructor. Use the static construction methods instead.
     */
    function Geometric3(coords, uom) {
        if (coords === void 0) { coords = zero(); }
        /**
         *
         */
        this.lock_ = UNLOCKED;
        if (coords.length !== 8) {
            throw new Error("coords.length must be 8");
        }
        this.coords_ = coords;
        this.uom_ = uom;
        this.modified_ = false;
    }
    /**
     * Determines whether this multivector is locked.
     * If the multivector is in the unlocked state then it is mutable.
     * If the multivector is in the locked state then it is immutable.
     */
    Geometric3.prototype.isLocked = function () {
        return this.lock_ !== UNLOCKED;
    };
    /**
     * Locks this multivector (preventing any further mutation),
     * and returns a token that may be used to unlock it.
     */
    Geometric3.prototype.lock = function () {
        if (this.lock_ !== UNLOCKED) {
            throw new Error("already locked");
        }
        else {
            this.lock_ = Math.random();
            return this.lock_;
        }
    };
    /**
     * Unlocks this multivector (allowing mutation),
     * using a token that was obtained from a preceding lock method call.
     */
    Geometric3.prototype.unlock = function (token) {
        if (this.lock_ === UNLOCKED) {
            throw new Error("not locked");
        }
        else if (this.lock_ === token) {
            this.lock_ = UNLOCKED;
        }
        else {
            throw new Error("unlock denied");
        }
    };
    /**
     * Consistently set a coordinate value in the most optimized way.
     * Permits mutation only when the lock status is UNLOCKED.
     * It is safe to use this as an alternative to the named property accessors.
     */
    Geometric3.prototype.setCoordinate = function (index, newValue, name) {
        if (this.lock_ === UNLOCKED) {
            var coords = this.coords_;
            var previous = coords[index];
            if (newValue !== previous) {
                coords[index] = newValue;
                this.modified_ = true;
            }
        }
        else {
            throw new Error(readOnly(name).message);
        }
    };
    Object.defineProperty(Geometric3.prototype, "a", {
        /**
         * The scalar part of this multivector.
         */
        get: function () {
            return this.coords_[COORD_SCALAR];
        },
        set: function (a) {
            this.setCoordinate(COORD_SCALAR, a, 'a');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Geometric3.prototype, "b", {
        /**
         * The pseudoscalar part of this multivector.
         */
        get: function () {
            return this.coords_[COORD_PSEUDO];
        },
        set: function (b) {
            this.setCoordinate(COORD_PSEUDO, b, 'b');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Geometric3.prototype, "maskG3", {
        /**
         * A bitmask describing the grades.
         *
         * 0x0 = zero
         * 0x1 = scalar
         * 0x2 = vector
         * 0x4 = bivector
         * 0x8 = pseudoscalar
         */
        get: function () {
            var coords = this.coords_;
            var α = coords[COORD_SCALAR];
            var x = coords[COORD_X];
            var y = coords[COORD_Y];
            var z = coords[COORD_Z];
            var yz = coords[COORD_YZ];
            var zx = coords[COORD_ZX];
            var xy = coords[COORD_XY];
            var β = coords[COORD_PSEUDO];
            var mask = 0x0;
            if (α !== 0) {
                mask += 0x1;
            }
            if (x !== 0 || y !== 0 || z !== 0) {
                mask += 0x2;
            }
            if (yz !== 0 || zx !== 0 || xy !== 0) {
                mask += 0x4;
            }
            if (β !== 0) {
                mask += 0x8;
            }
            return mask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Geometric3.prototype, "uom", {
        /**
         * The optional unit of measure.
         */
        get: function () {
            return this.uom_;
        },
        set: function (uom) {
            if (this.lock_ === UNLOCKED) {
                // This is the only place where we should check the unit of measure.
                // It also should be the only place where we access the private member.
                this.uom_ = Unit.mustBeUnit('uom', uom);
            }
            else {
                throw new Error(readOnly('uom').message);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Geometric3.prototype, "x", {
        /**
         * The coordinate corresponding to the <b>e</b><sub>1</sub> standard basis vector.
         */
        get: function () {
            return this.coords_[COORD_X];
        },
        set: function (x) {
            this.setCoordinate(COORD_X, x, 'x');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Geometric3.prototype, "y", {
        /**
         * The coordinate corresponding to the <b>e</b><sub>2</sub> standard basis vector.
         */
        get: function () {
            return this.coords_[COORD_Y];
        },
        set: function (y) {
            this.setCoordinate(COORD_Y, y, 'y');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Geometric3.prototype, "z", {
        /**
         * The coordinate corresponding to the <b>e</b><sub>3</sub> standard basis vector.
         */
        get: function () {
            return this.coords_[COORD_Z];
        },
        set: function (z) {
            this.setCoordinate(COORD_Z, z, 'z');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Geometric3.prototype, "yz", {
        /**
         * The coordinate corresponding to the <b>e</b><sub>2</sub><b>e</b><sub>3</sub> standard basis bivector.
         */
        get: function () {
            return this.coords_[COORD_YZ];
        },
        set: function (yz) {
            this.setCoordinate(COORD_YZ, yz, 'yz');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Geometric3.prototype, "zx", {
        /**
         * The coordinate corresponding to the <b>e</b><sub>3</sub><b>e</b><sub>1</sub> standard basis bivector.
         */
        get: function () {
            return this.coords_[COORD_ZX];
        },
        set: function (zx) {
            this.setCoordinate(COORD_ZX, zx, 'zx');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Geometric3.prototype, "xy", {
        /**
         * The coordinate corresponding to the <b>e</b><sub>1</sub><b>e</b><sub>2</sub> standard basis bivector.
         */
        get: function () {
            return this.coords_[COORD_XY];
        },
        set: function (xy) {
            this.setCoordinate(COORD_XY, xy, 'xy');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a multivector value to this multivector with optional scaling.
     *
     * @param M The multivector to be added to this multivector.
     * @param α An optional scale factor that multiplies the multivector argument.
     * @returns this + M * α
     */
    Geometric3.prototype.add = function (M, α) {
        if (α === void 0) { α = 1; }
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().add(M, α));
        }
        else {
            if (this.isZero()) {
                this.a = M.a * α;
                this.x = M.x * α;
                this.y = M.y * α;
                this.z = M.z * α;
                this.yz = M.yz * α;
                this.zx = M.zx * α;
                this.xy = M.xy * α;
                this.b = M.b * α;
                this.uom = M.uom;
                return this;
            }
            else if (isZeroGeometricE3(M)) {
                return this;
            }
            else {
                this.a += M.a * α;
                this.x += M.x * α;
                this.y += M.y * α;
                this.z += M.z * α;
                this.yz += M.yz * α;
                this.zx += M.zx * α;
                this.xy += M.xy * α;
                this.b += M.b * α;
                this.uom = Unit.compatible(this.uom, M.uom);
                return this;
            }
        }
    };
    /**
     * this ⟼ a + b
     *
     * @param a
     * @param b
     * @returns this multivector
     */
    Geometric3.prototype.add2 = function (a, b) {
        if (isZeroGeometricE3(a)) {
            this.uom = b.uom;
        }
        else if (isZeroGeometricE3(b)) {
            this.uom = a.uom;
        }
        else {
            this.uom = Unit.compatible(a.uom, b.uom);
        }
        this.a = a.a + b.a;
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        this.yz = a.yz + b.yz;
        this.zx = a.zx + b.zx;
        this.xy = a.xy + b.xy;
        this.b = a.b + b.b;
        return this;
    };
    /**
     * Adds a pseudoscalar value to this multivector.
     *
     * @param β The pseudoscalar value to be added to this multivector.
     * @param uom The optional unit of measure.
     * @returns this + (Iβ * uom)
     */
    Geometric3.prototype.addPseudo = function (β, uom) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().addPseudo(β, uom));
        }
        else {
            if (this.isZero()) {
                this.uom = uom;
            }
            else if (β === 0) {
                return this;
            }
            else {
                this.uom = Unit.compatible(this.uom, uom);
            }
            this.b += β;
            return this;
        }
    };
    /**
     * Adds a scalar value to this multivector.
     *
     * @param α The scalar value to be added to this multivector.
     * @param uom The optional unit of measure.
     * @returns this + (α * uom)
     */
    Geometric3.prototype.addScalar = function (α, uom) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().addScalar(α, uom));
        }
        else {
            if (this.isZero()) {
                this.uom = uom;
            }
            else if (α === 0) {
                return this;
            }
            else {
                this.uom = Unit.compatible(this.uom, uom);
            }
            this.a += α;
            return this;
        }
    };
    /**
     * @param v The vector to be added to this multivector.
     * @param α An optional scale factor that multiplies the vector argument.
     * @returns this + v * α
     */
    Geometric3.prototype.addVector = function (v, α) {
        if (α === void 0) { α = 1; }
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().addVector(v, α));
        }
        else {
            if (this.isZero()) {
                this.uom = v.uom;
            }
            else if (isZeroVectorE3(v)) {
                return this;
            }
            else {
                this.uom = Unit.compatible(this.uom, v.uom);
            }
            this.x += v.x * α;
            this.y += v.y * α;
            this.z += v.z * α;
            return this;
        }
    };
    /**
     * Sets this multivector to the angle, defined as the bivector part of the logarithm.
     * @returns grade(log(this), 2)
     */
    Geometric3.prototype.angle = function () {
        return this.log().grade(2);
    };
    /**
     * Sets any coordinate whose absolute value is less than pow(10, -n) times the absolute value of the largest coordinate.
     * @param n
     * @returns approx(this, n)
     */
    Geometric3.prototype.approx = function (n) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().approx(n));
        }
        else {
            approx(this.coords_, n);
            return this;
        }
    };
    /**
     * @returns copy(this)
     */
    Geometric3.prototype.clone = function () {
        return Geometric3.copy(this);
    };
    /**
     * Clifford conjugation
     */
    Geometric3.prototype.conj = function () {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().conj());
        }
        else {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            this.yz = -this.yz;
            this.zx = -this.zx;
            this.xy = -this.xy;
            return this;
        }
    };
    /**
     * Copies the coordinate values into this <code>Geometric3</code>.
     *
     * @param coordinates The coordinates in order a, x, y, z, yz, zx, xy, b.
     */
    Geometric3.prototype.copyCoordinates = function (coordinates) {
        // Copy using the setters so that the modified flag is updated.
        this.a = coordinates[COORD_SCALAR];
        this.x = coordinates[COORD_X];
        this.y = coordinates[COORD_Y];
        this.z = coordinates[COORD_Z];
        this.yz = coordinates[COORD_YZ];
        this.zx = coordinates[COORD_ZX];
        this.xy = coordinates[COORD_XY];
        this.b = coordinates[COORD_PSEUDO];
        return this;
    };
    /**
     * <p>
     * <code>this ⟼ copy(M)</code>
     * </p>
     *
     * @param M The multivector to be copied.
     */
    Geometric3.prototype.copy = function (M) {
        this.a = M.a;
        this.x = M.x;
        this.y = M.y;
        this.z = M.z;
        this.yz = M.yz;
        this.zx = M.zx;
        this.xy = M.xy;
        this.b = M.b;
        this.uom = M.uom;
        return this;
    };
    /**
     * <p>
     * <code>this ⟼ copy(B)</code>
     * </p>
     *
     * @param B The bivector to be copied.
     */
    Geometric3.prototype.copyBivector = function (B) {
        this.setCoordinate(COORD_SCALAR, 0, 'a');
        this.setCoordinate(COORD_X, 0, 'x');
        this.setCoordinate(COORD_Y, 0, 'y');
        this.setCoordinate(COORD_Z, 0, 'z');
        this.setCoordinate(COORD_YZ, B.yz, 'yz');
        this.setCoordinate(COORD_ZX, B.zx, 'zx');
        this.setCoordinate(COORD_XY, B.xy, 'xy');
        this.setCoordinate(COORD_PSEUDO, 0, 'b');
        this.uom = B.uom;
        return this;
    };
    /**
     * Sets this multivector to the value of the scalar, α.
     * The non-scalar components are set to zero.
     *
     * @param α The scalar to be copied.
     * @param uom The unit of measure.
     */
    Geometric3.prototype.copyScalar = function (α, uom) {
        this.setCoordinate(COORD_SCALAR, α, 'a');
        this.setCoordinate(COORD_X, 0, 'x');
        this.setCoordinate(COORD_Y, 0, 'y');
        this.setCoordinate(COORD_Z, 0, 'z');
        this.setCoordinate(COORD_YZ, 0, 'yz');
        this.setCoordinate(COORD_ZX, 0, 'zx');
        this.setCoordinate(COORD_XY, 0, 'xy');
        this.setCoordinate(COORD_PSEUDO, 0, 'b');
        this.uom = uom;
        return this;
    };
    /**
     * Copies the spinor argument value into this multivector.
     * The non-spinor components are set to zero.
     *
     * @param spinor The spinor to be copied.
     */
    Geometric3.prototype.copySpinor = function (spinor) {
        this.setCoordinate(COORD_SCALAR, spinor.a, 'a');
        this.setCoordinate(COORD_X, 0, 'x');
        this.setCoordinate(COORD_Y, 0, 'y');
        this.setCoordinate(COORD_Z, 0, 'z');
        this.setCoordinate(COORD_YZ, spinor.yz, 'yz');
        this.setCoordinate(COORD_ZX, spinor.zx, 'zx');
        this.setCoordinate(COORD_XY, spinor.xy, 'xy');
        this.setCoordinate(COORD_PSEUDO, 0, 'b');
        this.uom = spinor.uom;
        return this;
    };
    /**
     * Copies the vector argument value into this multivector.
     * The non-vector components are set to zero.
     *
     * @param vector The vector to be copied.
     */
    Geometric3.prototype.copyVector = function (vector) {
        this.setCoordinate(COORD_SCALAR, 0, 'a');
        this.setCoordinate(COORD_X, vector.x, 'x');
        this.setCoordinate(COORD_Y, vector.y, 'y');
        this.setCoordinate(COORD_Z, vector.z, 'z');
        this.setCoordinate(COORD_YZ, 0, 'yz');
        this.setCoordinate(COORD_ZX, 0, 'zx');
        this.setCoordinate(COORD_XY, 0, 'xy');
        this.setCoordinate(COORD_PSEUDO, 0, 'b');
        this.uom = vector.uom;
        return this;
    };
    /**
     * Sets this multivector to the generalized vector cross product with another multivector.
     *
     * @returns -I * (this ^ m)
     */
    Geometric3.prototype.cross = function (m) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().cross(m));
        }
        else {
            this.ext(m);
            this.dual(this).neg();
            return this;
        }
    };
    /**
     * @param mutate Must be `true` when calling the `direction` method on an unlocked Geometric3.
     * @returns this / magnitude(this)
     */
    Geometric3.prototype.direction = function (mutate) {
        if (this.lock_ !== UNLOCKED) {
            if (!mutate) {
                return lock(this.clone().direction(true));
            }
            else {
                throw new Error("Unable to mutate this locked Geometric3.");
            }
        }
        else {
            if (mutate) {
                var norm = this.magnitudeSansUnits();
                if (norm !== 0) {
                    this.a = this.a / norm;
                    this.x = this.x / norm;
                    this.y = this.y / norm;
                    this.z = this.z / norm;
                    this.yz = this.yz / norm;
                    this.zx = this.zx / norm;
                    this.xy = this.xy / norm;
                    this.b = this.b / norm;
                }
                this.uom = void 0;
                return this;
            }
            else {
                return lock(this.clone().direction(true));
            }
        }
    };
    /**
     * @param m The multivector dividend.
     * @returns this / m;
     */
    Geometric3.prototype.div = function (m) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().div(m));
        }
        else {
            if (isScalarG3(m)) {
                this.divByScalar(m.a, m.uom);
                return this;
            }
            else if (isVectorG3(m)) {
                return this.divByVector(m);
            }
            else {
                this.uom = Unit.div(this.uom, m.uom);
                var α = m.a;
                var x = m.x;
                var y = m.y;
                var z = m.z;
                var xy = m.xy;
                var yz = m.yz;
                var zx = m.zx;
                var β = m.b;
                var A = [
                    [α, x, y, z, -xy, -yz, -zx, -β],
                    [x, α, xy, -zx, -y, -β, z, -yz],
                    [y, -xy, α, yz, x, -z, -β, -zx],
                    [z, zx, -yz, α, -β, y, -x, -xy],
                    [xy, -y, x, β, α, zx, -yz, z],
                    [yz, β, -z, y, -zx, α, xy, x],
                    [zx, z, β, -x, yz, -xy, α, y],
                    [β, yz, zx, xy, z, x, y, α]
                ];
                var b = [1, 0, 0, 0, 0, 0, 0, 0];
                var X = gauss(A, b);
                var a0 = this.a;
                var a1 = this.x;
                var a2 = this.y;
                var a3 = this.z;
                var a4 = this.xy;
                var a5 = this.yz;
                var a6 = this.zx;
                var a7 = this.b;
                var b0 = X[0];
                var b1 = X[1];
                var b2 = X[2];
                var b3 = X[3];
                var b4 = X[4];
                var b5 = X[5];
                var b6 = X[6];
                var b7 = X[7];
                var c0 = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
                var c1 = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
                var c2 = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
                var c3 = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
                var c4 = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
                var c5 = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
                var c6 = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
                var c7 = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
                this.a = c0;
                this.x = c1;
                this.y = c2;
                this.z = c3;
                this.xy = c4;
                this.yz = c5;
                this.zx = c6;
                this.b = c7;
            }
            return this;
        }
    };
    Geometric3.prototype.divByNumber = function (α) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().divByNumber(α));
        }
        else {
            this.a /= α;
            this.x /= α;
            this.y /= α;
            this.z /= α;
            this.yz /= α;
            this.zx /= α;
            this.xy /= α;
            this.b /= α;
            return this;
        }
    };
    /**
     * <p>
     * <code>this ⟼ this / (α * uom)</code>
     * </p>
     *
     * @param α The scalar dividend.
     * @param uom The unit of measure.
     */
    Geometric3.prototype.divByScalar = function (α, uom) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().divByScalar(α, uom));
        }
        else {
            this.uom = Unit.div(this.uom, uom);
            this.a /= α;
            this.x /= α;
            this.y /= α;
            this.z /= α;
            this.yz /= α;
            this.zx /= α;
            this.xy /= α;
            this.b /= α;
            return this;
        }
    };
    Geometric3.prototype.divByVector = function (v) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().divByVector(v));
        }
        else {
            var x = v.x;
            var y = v.y;
            var z = v.z;
            var uom2 = Unit.pow(v.uom, QQ.valueOf(2, 1));
            var squaredNorm = x * x + y * y + z * z;
            return this.mulByVector(v).divByScalar(squaredNorm, uom2);
        }
    };
    /**
     * <p>
     * <code>this ⟼ a / b</code>
     * </p>
     *
     * @param a The numerator.
     * @param b The denominator.
     */
    Geometric3.prototype.div2 = function (a, b) {
        this.uom = Unit.div(a.uom, b.uom);
        // FIXME: Generalize
        var a0 = a.a;
        var a1 = a.yz;
        var a2 = a.zx;
        var a3 = a.xy;
        var b0 = b.a;
        var b1 = b.yz;
        var b2 = b.zx;
        var b3 = b.xy;
        // Compare this to the product for Quaternions
        // It would be interesting to DRY this out.
        this.a = a0 * b0 - a1 * b1 - a2 * b2 - a3 * b3;
        // this.a = a0 * b0 - dotVectorCartesianE3(a1, a2, a3, b1, b2, b3)
        this.yz = a0 * b1 + a1 * b0 - a2 * b3 + a3 * b2;
        this.zx = a0 * b2 + a1 * b3 + a2 * b0 - a3 * b1;
        this.xy = a0 * b3 - a1 * b2 + a2 * b1 + a3 * b0;
        return this;
    };
    /**
     * dual(m) = I<sub>n</sub> * m = m / I<sub>n</sub>
     *
     * @returns dual(m) or dual(this) if m is undefined.
     */
    Geometric3.prototype.dual = function (m) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().dual(m));
        }
        else {
            if (isDefined(m)) {
                var w = -m.b;
                var x = -m.yz;
                var y = -m.zx;
                var z = -m.xy;
                var yz = m.x;
                var zx = m.y;
                var xy = m.z;
                var β = m.a;
                this.a = w;
                this.x = x;
                this.y = y;
                this.z = z;
                this.yz = yz;
                this.zx = zx;
                this.xy = xy;
                this.b = β;
                this.uom = m.uom;
                return this;
            }
            else {
                return this.dual(this);
            }
        }
    };
    /**
     * @param other
     * @returns
     */
    Geometric3.prototype.equals = function (other) {
        if (other instanceof Geometric3) {
            // TODO: Check units of measure.
            return arraysEQ(this.coords_, other.coords_);
        }
        else {
            return false;
        }
    };
    /**
     * <p>
     * <code>this ⟼ e<sup>this</sup></code>
     * </p>
     */
    Geometric3.prototype.exp = function () {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().exp());
        }
        else {
            Unit.assertDimensionless(this.uom);
            // It's always the case that the scalar commutes with every other
            // grade of the multivector, so we can pull it out the front.
            var expW = Math.exp(this.a);
            // In Geometric3 we have the special case that the pseudoscalar also commutes.
            // And since it squares to -1, we get a exp(Iβ) = cos(β) + I * sin(β) factor.
            // let cosβ = cos(this.b)
            // let sinβ = sin(this.b)
            // We are left with the vector and bivector components.
            // For a bivector (usual case), let B = I * φ, where φ is a vector.
            // We would get cos(φ) + I * n * sin(φ), where φ = |φ|n and n is a unit vector.
            var yz = this.yz;
            var zx = this.zx;
            var xy = this.xy;
            // φ is actually the absolute value of one half the rotation angle.
            // The orientation of the rotation gets carried in the bivector components.
            var φ = Math.sqrt(yz * yz + zx * zx + xy * xy);
            var s = φ !== 0 ? Math.sin(φ) / φ : 1;
            var cosφ = Math.cos(φ);
            // For a vector a, we use exp(a) = cosh(a) + n * sinh(a)
            // The mixture of vector and bivector parts is more complex!
            this.a = cosφ;
            this.yz = yz * s;
            this.zx = zx * s;
            this.xy = xy * s;
            return this.mulByNumber(expW);
        }
    };
    /**
     * Computes the inverse of this multivector.
     * @returns inverse(this)
     */
    Geometric3.prototype.inv = function () {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().inv());
        }
        else {
            var α = this.a;
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var xy = this.xy;
            var yz = this.yz;
            var zx = this.zx;
            var β = this.b;
            var A = [
                [α, x, y, z, -xy, -yz, -zx, -β],
                [x, α, xy, -zx, -y, -β, z, -yz],
                [y, -xy, α, yz, x, -z, -β, -zx],
                [z, zx, -yz, α, -β, y, -x, -xy],
                [xy, -y, x, β, α, zx, -yz, z],
                [yz, β, -z, y, -zx, α, xy, x],
                [zx, z, β, -x, yz, -xy, α, y],
                [β, yz, zx, xy, z, x, y, α]
            ];
            var b = [1, 0, 0, 0, 0, 0, 0, 0];
            var X = gauss(A, b);
            this.a = X[0];
            this.x = X[1];
            this.y = X[2];
            this.z = X[3];
            this.xy = X[4];
            this.yz = X[5];
            this.zx = X[6];
            this.b = X[7];
            this.uom = Unit.inv(this.uom);
            return this;
        }
    };
    /**
     * Determines whether this multivector is exactly 1 (one).
     */
    Geometric3.prototype.isOne = function () {
        if (Unit.isOne(this.uom)) {
            return this.a === 1 && this.x === 0 && this.y === 0 && this.z === 0 && this.yz === 0 && this.zx === 0 && this.xy === 0 && this.b === 0;
        }
        else {
            return false;
        }
    };
    /**
     * Determines whether this multivector is exactly 0 (zero).
     */
    Geometric3.prototype.isZero = function () {
        // It does not matter what the unit of measure is if all the coordinates are zero.
        return this.a === 0 && this.x === 0 && this.y === 0 && this.z === 0 && this.yz === 0 && this.zx === 0 && this.xy === 0 && this.b === 0;
    };
    /**
     * @param m
     * @returns this << m
     */
    Geometric3.prototype.lco = function (m) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().lco(m));
        }
        else {
            return this.lco2(this, m);
        }
    };
    /**
     * <p>
     * <code>this ⟼ a << b</code>
     * </p>
     *
     * @param a
     * @param b
     */
    Geometric3.prototype.lco2 = function (a, b) {
        return lcoG3(a, b, this);
    };
    /**
     * @param target
     * @param α
     * @returns this + α * (target - this)
     */
    Geometric3.prototype.lerp = function (target, α) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().lerp(target, α));
        }
        else {
            if (this.isZero()) {
                this.uom = target.uom;
            }
            else if (isZeroGeometricE3(target)) {
                // Fall through.
            }
            else {
                this.uom = Unit.compatible(this.uom, target.uom);
            }
            this.a += (target.a - this.a) * α;
            this.x += (target.x - this.x) * α;
            this.y += (target.y - this.y) * α;
            this.z += (target.z - this.z) * α;
            this.yz += (target.yz - this.yz) * α;
            this.zx += (target.zx - this.zx) * α;
            this.xy += (target.xy - this.xy) * α;
            this.b += (target.b - this.b) * α;
            return this;
        }
    };
    /**
     * <p>
     * <code>this ⟼ a + α * (b - a)</code>
     * </p>
     *
     * @param a
     * @param b
     * @param α
     */
    Geometric3.prototype.lerp2 = function (a, b, α) {
        this.copy(a).lerp(b, α);
        return this;
    };
    /**
     * <p>
     * <code>this ⟼ log(this)</code>
     * </p>
     */
    Geometric3.prototype.log = function () {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().log());
        }
        else {
            Unit.assertDimensionless(this.uom);
            var α = this.a;
            var x = this.yz;
            var y = this.zx;
            var z = this.xy;
            var BB = x * x + y * y + z * z;
            var B = Math.sqrt(BB);
            var f = Math.atan2(B, α) / B;
            this.a = Math.log(Math.sqrt(α * α + BB));
            this.yz = x * f;
            this.zx = y * f;
            this.xy = z * f;
            return this;
        }
    };
    /**
     * <p>
     * Computes the <em>square root</em> of the <em>squared norm</em>.
     * </p>
     */
    Geometric3.prototype.magnitude = function (mutate) {
        if (this.lock_ !== UNLOCKED) {
            if (!mutate) {
                return lock(this.clone().magnitude(true));
            }
            else {
                throw new Error("Unable to mutate this locked Geometric3.");
            }
        }
        else {
            if (mutate) {
                this.a = Math.sqrt(this.squaredNormSansUnits());
                this.x = 0;
                this.y = 0;
                this.z = 0;
                this.xy = 0;
                this.yz = 0;
                this.zx = 0;
                this.b = 0;
                // The unit of measure is unchanged.
                return this;
            }
            else {
                return lock(this.clone().magnitude(true));
            }
        }
    };
    /**
     * Intentionally undocumented.
     */
    Geometric3.prototype.magnitudeSansUnits = function () {
        return Math.sqrt(this.squaredNormSansUnits());
    };
    /**
     * Returns the geometric product of this multivector with the rhs multivector.
     * @param rhs The operand on the right hand side of the * operator.
     * @return this * rhs
     */
    Geometric3.prototype.mul = function (rhs) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().mul(rhs));
        }
        else {
            return this.mul2(this, rhs);
        }
    };
    Geometric3.prototype.mulByBivector = function (B) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().mulByBivector(B));
        }
        else {
            this.uom = Unit.mul(this.uom, B.uom);
            var a0 = this.a;
            var a1 = this.x;
            var a2 = this.y;
            var a3 = this.z;
            var a4 = this.xy;
            var a5 = this.yz;
            var a6 = this.zx;
            var a7 = this.b;
            var b4 = B.xy;
            var b5 = B.yz;
            var b6 = B.zx;
            this.a = -a4 * b4 - a5 * b5 - a6 * b6;
            this.x = -a2 * b4 + a3 * b6 - a7 * b5;
            this.y = +a1 * b4 - a3 * b5 - a7 * b6;
            this.z = -a1 * b6 + a2 * b5 - a7 * b4;
            this.xy = a0 * b4 - a5 * b6 + a6 * b5;
            this.yz = a0 * b5 + a4 * b6 - a6 * b4;
            this.zx = a0 * b6 - a4 * b5 + a5 * b4;
            this.b = +a1 * b5 + a2 * b6 + a3 * b4;
            return this;
        }
    };
    Geometric3.prototype.mulByVector = function (v) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().mulByVector(v));
        }
        else {
            this.uom = Unit.mul(this.uom, v.uom);
            var a0 = this.a;
            var a1 = this.x;
            var a2 = this.y;
            var a3 = this.z;
            var a4 = this.xy;
            var a5 = this.yz;
            var a6 = this.zx;
            var a7 = this.b;
            var b1 = v.x;
            var b2 = v.y;
            var b3 = v.z;
            this.a = a1 * b1 + a2 * b2 + a3 * b3;
            this.x = a0 * b1 + a4 * b2 - a6 * b3;
            this.y = a0 * b2 - a4 * b1 + a5 * b3;
            this.z = a0 * b3 - a5 * b2 + a6 * b1;
            this.xy = a1 * b2 - a2 * b1 + a7 * b3;
            this.yz = a2 * b3 - a3 * b2 + a7 * b1;
            this.zx = -a1 * b3 + a3 * b1 + a7 * b2;
            this.b = a4 * b3 + a5 * b1 + a6 * b2;
            return this;
        }
    };
    /**
     * <p>
     * <code>this ⟼ a * b</code>
     * </p>
     *
     * @param a
     * @param b
     */
    Geometric3.prototype.mul2 = function (a, b) {
        if (this.lock_ !== UNLOCKED) {
            throw new Error("TODO");
        }
        var a0 = a.a;
        var a1 = a.x;
        var a2 = a.y;
        var a3 = a.z;
        var a4 = a.xy;
        var a5 = a.yz;
        var a6 = a.zx;
        var a7 = a.b;
        var b0 = b.a;
        var b1 = b.x;
        var b2 = b.y;
        var b3 = b.z;
        var b4 = b.xy;
        var b5 = b.yz;
        var b6 = b.zx;
        var b7 = b.b;
        this.a = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
        this.x = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
        this.y = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
        this.z = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
        this.xy = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
        this.yz = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
        this.zx = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
        this.b = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
        this.uom = Unit.mul(a.uom, b.uom);
        return this;
    };
    /**
     * @returns this * -1
     */
    Geometric3.prototype.neg = function () {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().neg());
        }
        else {
            this.a = -this.a;
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            this.yz = -this.yz;
            this.zx = -this.zx;
            this.xy = -this.xy;
            this.b = -this.b;
            // There is no change in the unit of measure.
            return this;
        }
    };
    /**
     * An alias for the `magnitude` method.
     * <p>
     * <code>this ⟼ sqrt(this * conj(this))</code>
     * </p>
     */
    Geometric3.prototype.norm = function () {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().norm());
        }
        else {
            this.a = this.magnitudeSansUnits();
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.yz = 0;
            this.zx = 0;
            this.xy = 0;
            this.b = 0;
            // There is no change to the unit of measure.
            return this;
        }
    };
    /**
     * Sets this multivector to the identity element for multiplication, <b>1</b>.
     */
    Geometric3.prototype.one = function () {
        this.a = 1;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.yz = 0;
        this.zx = 0;
        this.xy = 0;
        this.b = 0;
        this.uom = void 0;
        return this;
    };
    /**
     * The quaditude of a multivector is defined in terms of the scalar products
     * of its blades.
     * this ⟼ scp(this, rev(this)) = this | ~this
     */
    Geometric3.prototype.quaditude = function (mutate) {
        if (this.lock_ !== UNLOCKED) {
            if (!mutate) {
                return lock(this.clone().quaditude(true));
            }
            else {
                throw new Error("Unable to mutate this locked Geometric3.");
            }
        }
        else {
            if (mutate) {
                this.a = this.squaredNormSansUnits();
                this.x = 0;
                this.y = 0;
                this.z = 0;
                this.yz = 0;
                this.zx = 0;
                this.xy = 0;
                this.b = 0;
                this.uom = Unit.mul(this.uom, this.uom);
                return this;
            }
            else {
                return lock(this.clone().quaditude(true));
            }
        }
    };
    /**
     * @param m
     * @returns this >> m
     */
    Geometric3.prototype.rco = function (m) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().rco(m));
        }
        else {
            return this.rco2(this, m);
        }
    };
    /**
     * <p>
     * <code>this ⟼ a >> b</code>
     * </p>
     *
     * @param a
     * @param b
     */
    Geometric3.prototype.rco2 = function (a, b) {
        return rcoG3(a, b, this);
    };
    /**
     * Computes the <em>squared norm</em> of this multivector.
     *
     * This is an alias for the `quaditude` method.
     */
    Geometric3.prototype.squaredNorm = function (mutate) {
        return this.quaditude(mutate);
    };
    /**
     * Intentionally undocumented
     */
    Geometric3.prototype.squaredNormSansUnits = function () {
        return squaredNormG3(this);
    };
    /**
     * Sets this multivector to its reflection in the plane orthogonal to vector n.
     *
     * Mathematically,
     *
     * this ⟼ - n * this * n
     *
     * Geometrically,
     *
     * Reflects this multivector in the plane orthogonal to the unit vector, n.
     *
     * If n is not a unit vector then the result is scaled by n squared.
     *
     * @param n The unit vector that defines the reflection plane.
     */
    Geometric3.prototype.reflect = function (n) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().reflect(n));
        }
        else {
            // We are assuming that n is dimensionless, so that our unit of measure does not change.
            Unit.assertDimensionless(n.uom);
            var n1 = n.x;
            var n2 = n.y;
            var n3 = n.z;
            var n11 = n1 * n1;
            var n22 = n2 * n2;
            var n33 = n3 * n3;
            var nn = n11 + n22 + n33;
            var f1 = 2 * n2 * n3;
            var f2 = 2 * n3 * n1;
            var f3 = 2 * n1 * n2;
            var t1 = n22 + n33 - n11;
            var t2 = n33 + n11 - n22;
            var t3 = n11 + n22 - n33;
            var cs = this.coords_;
            var a = cs[COORD_SCALAR];
            var x1 = cs[COORD_X];
            var x2 = cs[COORD_Y];
            var x3 = cs[COORD_Z];
            var B3 = cs[COORD_XY];
            var B1 = cs[COORD_YZ];
            var B2 = cs[COORD_ZX];
            var b = cs[COORD_PSEUDO];
            this.setCoordinate(COORD_SCALAR, -nn * a, 'a');
            this.setCoordinate(COORD_X, x1 * t1 - x2 * f3 - x3 * f2, 'x');
            this.setCoordinate(COORD_Y, x2 * t2 - x3 * f1 - x1 * f3, 'y');
            this.setCoordinate(COORD_Z, x3 * t3 - x1 * f2 - x2 * f1, 'z');
            this.setCoordinate(COORD_XY, B3 * t3 - B1 * f2 - B2 * f1, 'xy');
            this.setCoordinate(COORD_YZ, B1 * t1 - B2 * f3 - B3 * f2, 'yz');
            this.setCoordinate(COORD_ZX, B2 * t2 - B3 * f1 - B1 * f3, 'zx');
            this.setCoordinate(COORD_PSEUDO, -nn * b, 'b');
            return this;
        }
    };
    /**
     * @returns reverse(this)
     */
    Geometric3.prototype.rev = function () {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().rev());
        }
        else {
            // reverse has a ++-- structure on the grades.
            this.a = +this.a;
            this.x = +this.x;
            this.y = +this.y;
            this.z = +this.z;
            this.yz = -this.yz;
            this.zx = -this.zx;
            this.xy = -this.xy;
            this.b = -this.b;
            // The unit of measure is unchanged.
            return this;
        }
    };
    /**
     * @param R the spinor that rotates this multivector.
     * @returns R * this * reverse(R)
     */
    Geometric3.prototype.rotate = function (R) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().rotate(R));
        }
        else {
            // We are assuming that R is dimensionless.
            Unit.assertDimensionless(R.uom);
            // FIXME: This only rotates the vector components.
            var x = this.x;
            var y = this.y;
            var z = this.z;
            var a = R.xy;
            var b = R.yz;
            var c = R.zx;
            var α = R.a;
            var ix = α * x - c * z + a * y;
            var iy = α * y - a * x + b * z;
            var iz = α * z - b * y + c * x;
            var iα = b * x + c * y + a * z;
            this.x = ix * α + iα * b + iy * a - iz * c;
            this.y = iy * α + iα * c + iz * b - ix * a;
            this.z = iz * α + iα * a + ix * c - iy * b;
            return this;
        }
    };
    /**
     * Sets this multivector to a rotor that rotates through angle θ around the specified axis.
     *
     * @param axis The (unit) vector defining the rotation aspect and orientation.
     * @param θ The rotation angle in radians when the rotor is applied on both sides as R * M * ~R
     */
    Geometric3.prototype.rotorFromAxisAngle = function (axis, θ) {
        Unit.assertDimensionless(axis.uom);
        // Compute the dual of the axis to obtain the corresponding bivector.
        var x = axis.x;
        var y = axis.y;
        var z = axis.z;
        var squaredNorm = x * x + y * y + z * z;
        if (squaredNorm === 1) {
            return this.rotorFromGeneratorAngle({ yz: x, zx: y, xy: z, uom: void 0 }, θ);
        }
        else {
            var norm = Math.sqrt(squaredNorm);
            var yz = x / norm;
            var zx = y / norm;
            var xy = z / norm;
            return this.rotorFromGeneratorAngle({ yz: yz, zx: zx, xy: xy, uom: void 0 }, θ);
        }
    };
    /**
     * <p>
     * Computes a rotor, R, from two unit vectors, where
     * R = (|b||a| + b * a) / sqrt(2 * |b||a|(|b||a| + b << a))
     * </p>
     *
     * The result is independent of the magnitudes of a and b.
     *
     * @param a The starting vector
     * @param b The ending vector
     * @returns The rotor representing a rotation from a to b.
     */
    Geometric3.prototype.rotorFromDirections = function (a, b) {
        var B = void 0;
        return this.rotorFromVectorToVector(a, b, B);
    };
    /**
     * Helper function for rotorFromFrameToFrame.
     */
    Geometric3.prototype.rotorFromTwoVectors = function (e1, f1, e2, f2) {
        // FIXME: This creates a lot of temporary objects.
        // Compute the rotor that takes e1 to f1.
        // There is no concern that the two vectors are anti-parallel.
        var R1 = Geometric3.rotorFromDirections(e1, f1);
        // Compute the image of e2 under the first rotation in order to calculate R2.
        var f = Geometric3.fromVector(e2).rotate(R1);
        // In case of rotation for antipodal vectors, define the fallback rotation bivector.
        var B = Geometric3.dualOfVector(f1);
        // Compute R2
        var R2 = Geometric3.rotorFromVectorToVector(f, f2, B);
        // The total rotor, R, is the composition of R1 followed by R2.
        return this.mul2(R2, R1);
    };
    /**
     *
     */
    Geometric3.prototype.rotorFromFrameToFrame = function (es, fs) {
        // There is instability when the rotation angle is near 180 degrees.
        // So we don't use the lovely formula based upon reciprocal frames.
        // Our algorithm is to first pick the vector that stays most aligned with itself.
        // This allows for the possibility that the other two vectors may become anti-aligned.
        // Observe that all three vectors can't be anti-aligned because that would be a reflection!
        // We then compute the rotor R1 that maps this first vector to its image.
        // Allowing then for the possibility that the remaining vectors may have ambiguous rotors,
        // we compute the dual of this image vector as the default rotation plane for one of the
        // other vectors. We only need to calculate the rotor R2 for one more vector because our
        // frames are orthogonal and so R1 and R2 determine R.
        //
        var biggestValue = -1;
        var firstVector;
        for (var i = 0; i < 3; i++) {
            cosines[i] = cosVectorVector(es[i], fs[i]);
            if (cosines[i] > biggestValue) {
                firstVector = i;
                biggestValue = cosines[i];
            }
        }
        var secondVector = (firstVector + 1) % 3;
        return this.rotorFromTwoVectors(es[firstVector], fs[firstVector], es[secondVector], fs[secondVector]);
    };
    /**
     * Sets this multivector to a rotor that rotates through angle θ in the oriented plane defined by B.
     *
     * this ⟼ exp(- B * θ / 2) = cos(|B| * θ / 2) - B * sin(|B| * θ / 2) / |B|
     *
     * @param B The (unit) bivector generating the rotation.
     * @param θ The rotation angle in radians when the rotor is applied on both sides as R * M * ~R
     */
    Geometric3.prototype.rotorFromGeneratorAngle = function (B, θ) {
        Unit.assertDimensionless(B.uom);
        var φ = θ / 2;
        var yz = B.yz;
        var zx = B.zx;
        var xy = B.xy;
        var absB = Math.sqrt(yz * yz + zx * zx + xy * xy);
        var mφ = absB * φ;
        var sinDivAbsB = Math.sin(mφ) / absB;
        this.a = Math.cos(mφ);
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.yz = -yz * sinDivAbsB;
        this.zx = -zx * sinDivAbsB;
        this.xy = -xy * sinDivAbsB;
        this.b = 0;
        return this;
    };
    /**
     * R = (|b||a| + b * a) / sqrt(2 * |b||a|(|b||a| + b << a))
     *
     * The result is independent of the magnitudes of a and b.
     */
    Geometric3.prototype.rotorFromVectorToVector = function (a, b, B) {
        rotorFromDirectionsE3(a, b, B, this);
        return this;
    };
    /**
     * @param m
     * @returns this | m
     */
    Geometric3.prototype.scp = function (m) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().scp(m));
        }
        else {
            return this.scp2(this, m);
        }
    };
    /**
     * <p>
     * <code>this ⟼ scp(a, b) = a | b</code>
     * </p>
     *
     * @param a
     * @param b
     */
    Geometric3.prototype.scp2 = function (a, b) {
        return scpG3(a, b, this);
    };
    /**
     * Currently limited to taking the square root of a positive scalar quantity.
     */
    Geometric3.prototype.sqrt = function () {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().sqrt());
        }
        else {
            this.a = Math.sqrt(this.a);
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.yz = 0;
            this.zx = 0;
            this.xy = 0;
            this.b = 0;
            this.uom = Unit.sqrt(this.uom);
            return this;
        }
    };
    /**
     * @param α
     * @returns this * α
     */
    Geometric3.prototype.mulByNumber = function (α) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().mulByNumber(α));
        }
        else {
            this.a *= α;
            this.x *= α;
            this.y *= α;
            this.z *= α;
            this.yz *= α;
            this.zx *= α;
            this.xy *= α;
            this.b *= α;
            // There is no change in the unit of measure.
            return this;
        }
    };
    /**
     * @param α
     * @param uom
     * @returns this * (α * uom)
     */
    Geometric3.prototype.mulByScalar = function (α, uom) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().mulByScalar(α, uom));
        }
        else {
            this.a *= α;
            this.x *= α;
            this.y *= α;
            this.z *= α;
            this.yz *= α;
            this.zx *= α;
            this.xy *= α;
            this.b *= α;
            this.uom = Unit.mul(this.uom, uom);
            return this;
        }
    };
    /**
     * Applies the diagonal elements of a scaling matrix to this multivector.
     *
     * @param σ
     */
    Geometric3.prototype.stress = function (σ) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().stress(σ));
        }
        else {
            this.x *= σ.x;
            this.y *= σ.y;
            this.z *= σ.z;
            this.uom = Unit.mul(σ.uom, this.uom);
            // TODO: Action on other components TBD.
            return this;
        }
    };
    /**
     * <p>
     * <code>this ⟼ a * b</code>
     * </p>
     * Sets this Geometric3 to the geometric product a * b of the vector arguments.
     *
     * @param a
     * @param b
     */
    Geometric3.prototype.versor = function (a, b) {
        this.uom = Unit.mul(a.uom, b.uom);
        var ax = a.x;
        var ay = a.y;
        var az = a.z;
        var bx = b.x;
        var by = b.y;
        var bz = b.z;
        this.zero();
        this.a = dotVectorE3(a, b);
        this.yz = wedgeYZ(ax, ay, az, bx, by, bz);
        this.zx = wedgeZX(ax, ay, az, bx, by, bz);
        this.xy = wedgeXY(ax, ay, az, bx, by, bz);
        return this;
    };
    Geometric3.prototype.writeVector = function (vector) {
        vector.x = this.x;
        vector.y = this.y;
        vector.z = this.z;
        vector.uom = this.uom;
    };
    /**
     * @param M
     * @param α
     * @returns this - M * α
     */
    Geometric3.prototype.sub = function (M, α) {
        if (α === void 0) { α = 1; }
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().sub(M, α));
        }
        else {
            if (this.isZero()) {
                this.uom = M.uom;
            }
            else if (isZeroGeometricE3(M)) {
                return this;
            }
            else {
                this.uom = Unit.compatible(this.uom, M.uom);
            }
            this.a -= M.a * α;
            this.x -= M.x * α;
            this.y -= M.y * α;
            this.z -= M.z * α;
            this.yz -= M.yz * α;
            this.zx -= M.zx * α;
            this.xy -= M.xy * α;
            this.b -= M.b * α;
            return this;
        }
    };
    Geometric3.prototype.subScalar = function (M, α) {
        if (α === void 0) { α = 1; }
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().subScalar(M, α));
        }
        else {
            if (this.isZero()) {
                this.uom = M.uom;
            }
            else {
                this.uom = Unit.compatible(this.uom, M.uom);
            }
            this.a -= M.a * α;
            return this;
        }
    };
    /**
     * @param v The vector to subtract from this multivector.
     * @param α The multiplier for the amount of the vector to subtract.
     * @returns this - v * α
     */
    Geometric3.prototype.subVector = function (v, α) {
        if (α === void 0) { α = 1; }
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().subVector(v, α));
        }
        else {
            if (this.isZero()) {
                this.uom = v.uom;
            }
            else if (isZeroVectorE3(v)) {
                return this;
            }
            else {
                this.uom = Unit.compatible(this.uom, v.uom);
            }
            this.x -= v.x * α;
            this.y -= v.y * α;
            this.z -= v.z * α;
            return this;
        }
    };
    /**
     * <p>
     * <code>this ⟼ a - b</code>
     * </p>
     *
     * @param a
     * @param b
     */
    Geometric3.prototype.sub2 = function (a, b) {
        if (isZeroGeometricE3(a)) {
            this.a = -b.a;
            this.x = -b.x;
            this.y = -b.y;
            this.z = -b.z;
            this.yz = -b.yz;
            this.zx = -b.zx;
            this.xy = -b.xy;
            this.b = -b.b;
            this.uom = b.uom;
        }
        else if (isZeroGeometricE3(b)) {
            this.a = a.a;
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            this.yz = a.yz;
            this.zx = a.zx;
            this.xy = a.xy;
            this.b = a.b;
            this.uom = a.uom;
        }
        else {
            this.a = a.a - b.a;
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            this.z = a.z - b.z;
            this.yz = a.yz - b.yz;
            this.zx = a.zx - b.zx;
            this.xy = a.xy - b.xy;
            this.b = a.b - b.b;
            this.uom = Unit.compatible(a.uom, b.uom);
        }
        return this;
    };
    /**
     * Returns a string representing the number in exponential notation.
     *
     * @param fractionDigits
     * @returns
     */
    Geometric3.prototype.toExponential = function (fractionDigits) {
        var coordToString = function (coord) { return coord.toExponential(fractionDigits); };
        return stringFromCoordinates(coordinates(this), coordToString, BASIS_LABELS, this.uom);
    };
    /**
     * Returns a string representing the number in fixed-point notation.
     *
     * @param fractionDigits
     * @returns
     */
    Geometric3.prototype.toFixed = function (fractionDigits) {
        var coordToString = function (coord) { return coord.toFixed(fractionDigits); };
        return stringFromCoordinates(coordinates(this), coordToString, BASIS_LABELS, this.uom);
    };
    /**
     * @param precision
     * @returns
     */
    Geometric3.prototype.toPrecision = function (precision) {
        var coordToString = function (coord) { return coord.toPrecision(precision); };
        return stringFromCoordinates(coordinates(this), coordToString, BASIS_LABELS, this.uom);
    };
    /**
     * Returns a string representation of the number.
     *
     * @param radix
     * @returns
     */
    Geometric3.prototype.toString = function (radix) {
        var coordToString = function (coord) { return coord.toString(radix); };
        return stringFromCoordinates(coordinates(this), coordToString, BASIS_LABELS, this.uom);
    };
    /**
     * Sets this multivector to the result of keeping only the specified grade.
     * This is the grade extraction operation.
     *
     * @param n the grade to be retained.
     * @returns grade(this, n)
     */
    Geometric3.prototype.grade = function (n) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().grade(n));
        }
        else {
            // There is no change to the unit of measure.
            switch (n) {
                case 0: {
                    this.x = 0;
                    this.y = 0;
                    this.z = 0;
                    this.yz = 0;
                    this.zx = 0;
                    this.xy = 0;
                    this.b = 0;
                    break;
                }
                case 1: {
                    this.a = 0;
                    this.yz = 0;
                    this.zx = 0;
                    this.xy = 0;
                    this.b = 0;
                    break;
                }
                case 2: {
                    this.a = 0;
                    this.x = 0;
                    this.y = 0;
                    this.z = 0;
                    this.b = 0;
                    break;
                }
                case 3: {
                    this.a = 0;
                    this.x = 0;
                    this.y = 0;
                    this.z = 0;
                    this.yz = 0;
                    this.zx = 0;
                    this.xy = 0;
                    break;
                }
                default: {
                    this.a = 0;
                    this.x = 0;
                    this.y = 0;
                    this.z = 0;
                    this.yz = 0;
                    this.zx = 0;
                    this.xy = 0;
                    this.b = 0;
                }
            }
            return this;
        }
    };
    /**
     * @param m
     * @return this ^ m
     */
    Geometric3.prototype.ext = function (m) {
        if (this.lock_ !== UNLOCKED) {
            return lock(this.clone().ext(m));
        }
        else {
            return this.ext2(this, m);
        }
    };
    /**
     * <p>
     * <code>this ⟼ a ^ b</code>
     * </p>
     *
     * @param a
     * @param b
     */
    Geometric3.prototype.ext2 = function (a, b) {
        return extG3(a, b, this);
    };
    /**
     * Sets this multivector to the identity element for addition, 0.
     */
    Geometric3.prototype.zero = function () {
        this.a = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.yz = 0;
        this.zx = 0;
        this.xy = 0;
        this.b = 0;
        // The unit of measure does not matter if all the coordinates are zero.
        return this;
    };
    /**
     * Implements `this + rhs`.
     */
    Geometric3.prototype.__add__ = function (rhs) {
        var duckR = maskG3(rhs);
        if (duckR) {
            return lock(this.clone().add(duckR));
        }
        else if (isVectorE3(rhs)) {
            return lock(this.clone().addVector(rhs));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `this / rhs`.
     */
    Geometric3.prototype.__div__ = function (rhs) {
        var duckR = maskG3(rhs);
        if (duckR) {
            return lock(this.clone().div(duckR));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `lhs / this`.
     */
    Geometric3.prototype.__rdiv__ = function (lhs) {
        if (lhs instanceof Geometric3) {
            return lock(Geometric3.copy(lhs).div(this));
        }
        else if (typeof lhs === 'number') {
            return lock(Geometric3.scalar(lhs, void 0).div(this));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `this * rhs`.
     */
    Geometric3.prototype.__mul__ = function (rhs) {
        var duckR = maskG3(rhs);
        if (duckR) {
            return lock(this.clone().mul(duckR));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `lhs * this`.
     */
    Geometric3.prototype.__rmul__ = function (lhs) {
        if (lhs instanceof Geometric3) {
            return lock(Geometric3.copy(lhs).mul(this));
        }
        else if (typeof lhs === 'number') {
            return lock(Geometric3.copy(this).mulByNumber(lhs));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `lhs + this`.
     */
    Geometric3.prototype.__radd__ = function (lhs) {
        if (lhs instanceof Geometric3) {
            return lock(Geometric3.copy(lhs).add(this));
        }
        else if (typeof lhs === 'number') {
            return lock(Geometric3.scalar(lhs).add(this));
        }
        else if (isVectorE3(lhs)) {
            return lock(Geometric3.fromVector(lhs).add(this));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `this - rhs`.
     */
    Geometric3.prototype.__sub__ = function (rhs) {
        var duckR = maskG3(rhs);
        if (duckR) {
            return lock(this.clone().sub(duckR));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `lhs - rhs`.
     */
    Geometric3.prototype.__rsub__ = function (lhs) {
        if (lhs instanceof Geometric3) {
            return lock(Geometric3.copy(lhs).sub(this));
        }
        else if (typeof lhs === 'number') {
            return lock(Geometric3.scalar(lhs).sub(this));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `~this`.
     */
    Geometric3.prototype.__tilde__ = function () {
        return lock(Geometric3.copy(this).rev());
    };
    /**
     * Implements `this ^ rhs`.
     */
    Geometric3.prototype.__wedge__ = function (rhs) {
        if (rhs instanceof Geometric3) {
            return lock(Geometric3.copy(this).ext(rhs));
        }
        else if (typeof rhs === 'number') {
            // The outer product with a scalar is scalar multiplication.
            return lock(Geometric3.copy(this).mulByNumber(rhs));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `lhs ^ this`.
     */
    Geometric3.prototype.__rwedge__ = function (lhs) {
        if (lhs instanceof Geometric3) {
            return lock(Geometric3.copy(lhs).ext(this));
        }
        else if (typeof lhs === 'number') {
            // The outer product with a scalar is scalar multiplication, and commutes.
            return lock(Geometric3.copy(this).mulByNumber(lhs));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `this << rhs`.
     */
    Geometric3.prototype.__lshift__ = function (rhs) {
        if (rhs instanceof Geometric3) {
            return lock(Geometric3.copy(this).lco(rhs));
        }
        else if (typeof rhs === 'number') {
            return lock(Geometric3.copy(this).lco(Geometric3.scalar(rhs)));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `lhs << this`.
     */
    Geometric3.prototype.__rlshift__ = function (lhs) {
        if (lhs instanceof Geometric3) {
            return lock(Geometric3.copy(lhs).lco(this));
        }
        else if (typeof lhs === 'number') {
            return lock(Geometric3.scalar(lhs).lco(this));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `this >> rhs`.
     */
    Geometric3.prototype.__rshift__ = function (rhs) {
        if (rhs instanceof Geometric3) {
            return lock(Geometric3.copy(this).rco(rhs));
        }
        else if (typeof rhs === 'number') {
            return lock(Geometric3.copy(this).rco(Geometric3.scalar(rhs)));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `lhs >> rhs`.
     */
    Geometric3.prototype.__rrshift__ = function (lhs) {
        if (lhs instanceof Geometric3) {
            return lock(Geometric3.copy(lhs).rco(this));
        }
        else if (typeof lhs === 'number') {
            return lock(Geometric3.scalar(lhs).rco(this));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `this | rhs`.
     */
    Geometric3.prototype.__vbar__ = function (rhs) {
        if (rhs instanceof Geometric3) {
            return lock(Geometric3.copy(this).scp(rhs));
        }
        else if (typeof rhs === 'number') {
            return lock(Geometric3.copy(this).scp(Geometric3.scalar(rhs)));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `lhs | this`.
     */
    Geometric3.prototype.__rvbar__ = function (lhs) {
        if (lhs instanceof Geometric3) {
            return lock(Geometric3.copy(lhs).scp(this));
        }
        else if (typeof lhs === 'number') {
            return lock(Geometric3.scalar(lhs).scp(this));
        }
        else {
            return void 0;
        }
    };
    /**
     * Implements `!this`.
     */
    Geometric3.prototype.__bang__ = function () {
        return lock(Geometric3.copy(this).inv());
    };
    /**
     * Implements `+this`.
     */
    Geometric3.prototype.__pos__ = function () {
        return lock(Geometric3.copy(this));
    };
    /**
     * Implements `-this`.
     */
    Geometric3.prototype.__neg__ = function () {
        return lock(Geometric3.copy(this).neg());
    };
    /**
     * Creates a grade 2 (bivector) multivector from the specified cartesian coordinates.
     * @param yz The coordinate corresponding to the e2e3 basis bivector.
     * @param zx The coordinate corresponding to the e3e1 basis bivector.
     * @param xy The coordinate corresponding to the e1e2 basis bivector.
     * @param uom The optional unit of measure. Equivalent to 1 if omitted.
     */
    Geometric3.bivector = function (yz, zx, xy, uom) {
        return Geometric3.spinor(0, yz, zx, xy, uom);
    };
    /**
     * @param mv The multivector to be copied.
     */
    Geometric3.copy = function (mv) {
        return new Geometric3(coordinates(mv), mv.uom);
    };
    Geometric3.dual = function (m) {
        return new Geometric3(zero(), m.uom).dual(m);
    };
    Geometric3.dualOfBivector = function (B) {
        return new Geometric3(vector(-B.yz, -B.zx, -B.xy), B.uom);
    };
    Geometric3.dualOfVector = function (v) {
        return new Geometric3(bivector(v.x, v.y, v.z), v.uom);
    };
    Geometric3.fromBivector = function (B) {
        return new Geometric3(bivector(B.yz, B.zx, B.xy), B.uom);
    };
    /**
     * @param alpha
     */
    Geometric3.fromScalar = function (alpha) {
        return new Geometric3(scalar(alpha.a), alpha.uom);
    };
    /**
     * @param s
     */
    Geometric3.fromSpinor = function (R) {
        return new Geometric3(spinor(R.a, R.yz, R.zx, R.xy), R.uom);
    };
    /**
     * @param v
     * @returns
     */
    Geometric3.fromVector = function (v) {
        return new Geometric3(vector(v.x, v.y, v.z), v.uom);
    };
    /**
     * @param A
     * @param B
     * @param α
     * @returns <code>A + α * (B - A)</code>
     */
    Geometric3.lerp = function (A, B, α) {
        return Geometric3.copy(A).lerp(B, α);
    };
    Geometric3.pseudo = function (b, uom) {
        return new Geometric3(pseudo(b), uom);
    };
    /**
     * <p>
     * Computes a multivector with random components.
     * </p>
     */
    Geometric3.random = function () {
        var lowerBound = -1;
        var upperBound = +1;
        var a = randomRange(lowerBound, upperBound);
        var x = randomRange(lowerBound, upperBound);
        var y = randomRange(lowerBound, upperBound);
        var z = randomRange(lowerBound, upperBound);
        var yz = randomRange(lowerBound, upperBound);
        var zx = randomRange(lowerBound, upperBound);
        var xy = randomRange(lowerBound, upperBound);
        var b = randomRange(lowerBound, upperBound);
        return new Geometric3(multivector(a, x, y, z, yz, zx, xy, b), void 0);
    };
    /**
     * Computes the rotor that rotates vector <code>a</code> to vector <code>b</code>.
     *
     * @param a The <em>from</em> vector.
     * @param b The <em>to</em> vector.
     */
    Geometric3.rotorFromDirections = function (a, b) {
        return new Geometric3(zero(), void 0).rotorFromDirections(a, b);
    };
    Geometric3.rotorFromFrameToFrame = function (es, fs) {
        return new Geometric3(zero(), void 0).rotorFromFrameToFrame(es, fs);
    };
    Geometric3.rotorFromVectorToVector = function (a, b, B) {
        return new Geometric3(zero(), void 0).rotorFromVectorToVector(a, b, B);
    };
    /**
     * Creates a grade 0 (scalar) multivector with value `alpha * uom`.
     * @param a The scaling factor for the unit of measure.
     * @param uom The optional unit of measure. Equivalent to 1 if omitted.
     */
    Geometric3.scalar = function (a, uom) {
        return new Geometric3(scalar(a), uom);
    };
    /**
     * Creates a spinor valued multivector from the specified cartesian coordinates.
     * @param a The scalar coordinate.
     * @param yz The coordinate corresponding to the e2e3 basis bivector.
     * @param zx The coordinate corresponding to the e3e1 basis bivector.
     * @param xy The coordinate corresponding to the e1e2 basis bivector.
     * @param uom The optional unit of measure. Equivalent to 1 if omitted.
     */
    Geometric3.spinor = function (a, yz, zx, xy, uom) {
        return new Geometric3(spinor(a, yz, zx, xy), uom);
    };
    /**
     * Creates a grade 1 (vector) multivector from the specified cartesian coordinates.
     * @param x The coordinate corresponding to the e1 basis vector.
     * @param y The coordinate corresponding to the e2 basis vector.
     * @param z The coordinate corresponding to the e3 basis vector.
     * @param uom The optional unit of measure. Equivalent to 1 if omitted.
     */
    Geometric3.vector = function (x, y, z, uom) {
        return new Geometric3(vector(x, y, z), uom);
    };
    /**
     * @param a
     * @param b
     */
    Geometric3.wedge = function (a, b) {
        var ax = a.x;
        var ay = a.y;
        var az = a.z;
        var bx = b.x;
        var by = b.y;
        var bz = b.z;
        var yz = wedgeYZ(ax, ay, az, bx, by, bz);
        var zx = wedgeZX(ax, ay, az, bx, by, bz);
        var xy = wedgeXY(ax, ay, az, bx, by, bz);
        return Geometric3.spinor(0, yz, zx, xy, Unit.mul(a.uom, b.uom));
    };
    /**
     * Constructs a Geometric3 representing the number zero.
     * The identity element for addition, <b>0</b>.
     * The returned multivector is locked.
     */
    Geometric3.zero = lock(new Geometric3(zero(), void 0));
    /**
     * Constructs a Geometric3 representing the number one.
     * The identity element for multiplication, <b>1</b>.
     * The returned multivector is locked.
     */
    Geometric3.one = lock(new Geometric3(scalar(1), void 0));
    /**
     * Constructs a basis vector corresponding to the <code>x</code> coordinate.
     * The returned multivector is locked.
     */
    Geometric3.e1 = lock(new Geometric3(vector(1, 0, 0), void 0));
    /**
     * Constructs a basis vector corresponding to the <code>y</code> coordinate.
     * The returned multivector is locked.
     */
    Geometric3.e2 = lock(new Geometric3(vector(0, 1, 0), void 0));
    /**
     * Constructs a basis vector corresponding to the <code>z</code> coordinate.
     * The returned multivector is locked.
     */
    Geometric3.e3 = lock(new Geometric3(vector(0, 0, 1), void 0));
    /**
     * Constructs a basis vector corresponding to the <code>β</code> coordinate.
     * The returned multivector is locked.
     */
    Geometric3.I = lock(new Geometric3(pseudo(1), void 0));
    /**
     * SI base unit of length.
     * The meter is the length of the path travelled by light in vacuum during a time interval of 1 / 299 792 458 of a second.
     */
    Geometric3.meter = lock(new Geometric3(scalar(1), Unit.METER));
    /**
     * SI base unit of mass.
     * The kilogram is the unit of mass; it is equal to the mass of the international prototype of the kilogram.
     */
    Geometric3.kilogram = lock(new Geometric3(scalar(1), Unit.KILOGRAM));
    /**
     * SI base unit of time.
     * The second is the duration of 9 192 631 770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium 133 atom.
     */
    Geometric3.second = lock(new Geometric3(scalar(1), Unit.SECOND));
    /**
     * SI base unit of electric current.
     * The ampere is that constant current which, if maintained in two straight parallel conductors of infinite length, of negligible circular cross-section, and placed 1 meter apart in vacuum, would produce between these conductors a force equal to 2 x 10<sup>-7</sup> newton per meter of length.
     */
    Geometric3.ampere = lock(new Geometric3(scalar(1), Unit.AMPERE));
    /**
     * SI base unit of thermodynamic temperature.
     * The kelvin, unit of thermodynamic temperature, is the fraction 1 / 273.16 of the thermodynamic temperature of the triple point of water.
     */
    Geometric3.kelvin = lock(new Geometric3(scalar(1), Unit.KELVIN));
    /**
     * SI base unit of amount of substance.
     * 1. The mole is the amount of substance of a system which contains as many elementary entities as there are atoms in 0.012 kilogram of carbon 12; its symbol is "mol."
     *
     * 2. When the mole is used, the elementary entities must be specified and may be atoms, molecules, ions, electrons, other particles, or specified groups of such particles.
     */
    Geometric3.mole = lock(new Geometric3(scalar(1), Unit.MOLE));
    /**
     * SI base unit of luminous intensity.
     * The candela is the luminous intensity, in a given direction, of a source that emits monochromatic radiation of frequency 540 x 10<sup>12</sup> hertz and that has a radiant intensity in that direction of 1 / 683 watt per steradian.
     */
    Geometric3.candela = lock(new Geometric3(scalar(1), Unit.CANDELA));
    /**
     * SI derived unit of electric charge, quantity of electricity.
     */
    Geometric3.coulomb = lock(new Geometric3(scalar(1), Unit.COULOMB));
    /**
     * SI derived unit of force.
     */
    Geometric3.newton = lock(new Geometric3(scalar(1), Unit.NEWTON));
    /**
     * SI derived unit of energy, work, quantity of heat.
     */
    Geometric3.joule = lock(new Geometric3(scalar(1), Unit.JOULE));
    return Geometric3;
}());

function beANumber() {
    return "be a `number`";
}
function mustBeNumber(name, value, contextBuilder) {
    mustSatisfy(name, isNumber(value), beANumber, contextBuilder);
    return value;
}

/**
 * A mutable representation of a spinor with cartesian coordinates in 3 dimensions.
 */
var Spinor3 = (function () {
    /**
     *
     */
    function Spinor3(a, yz, zx, xy, uom) {
        this.a = mustBeNumber('a', a);
        this.yz = mustBeNumber('yz', yz);
        this.zx = mustBeNumber('zx', zx);
        this.xy = mustBeNumber('xy', xy);
        this.uom = Unit.mustBeUnit('uom', uom);
    }
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
            throw new Error(readOnly('maskG3').message);
        },
        enumerable: true,
        configurable: true
    });
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
    /**
     *
     */
    Spinor3.prototype.isOne = function () {
        return this.a === 1 && this.xy === 0 && this.yz === 0 && this.zx === 0;
    };
    /**
     *
     */
    Spinor3.prototype.magnitude = function () {
        return Math.sqrt(this.quaditude());
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
     *
     */
    Spinor3.prototype.toExponential = function (fractionDigits) {
        return "new Spinor3(" + this.a.toExponential(fractionDigits) + ", " + this.yz.toExponential(fractionDigits) + ", " + this.zx.toExponential(fractionDigits) + ", " + this.xy.toExponential(fractionDigits) + ")";
    };
    /**
     *
     */
    Spinor3.prototype.toFixed = function (fractionDigits) {
        return "new Spinor3(" + this.a.toFixed(fractionDigits) + ", " + this.yz.toFixed(fractionDigits) + ", " + this.zx.toFixed(fractionDigits) + ", " + this.xy.toFixed(fractionDigits) + ")";
    };
    /**
     *
     */
    Spinor3.prototype.toPrecision = function (precision) {
        return "new Spinor3(" + this.a.toPrecision(precision) + ", " + this.yz.toPrecision(precision) + ", " + this.zx.toPrecision(precision) + ", " + this.xy.toPrecision(precision) + ")";
    };
    /**
     * Returns a string representation of this spinor.
     */
    Spinor3.prototype.toString = function (radix) {
        return "new Spinor3(" + this.a.toString(radix) + ", " + this.yz.toString(radix) + ", " + this.zx.toString(radix) + ", " + this.xy.toString(radix) + ")";
    };
    /**
     * <p>
     * Computes a unit spinor with a random direction.
     * </p>
     */
    Spinor3.random = function () {
        var yz = randomRange(-1, 1);
        var zx = randomRange(-1, 1);
        var xy = randomRange(-1, 1);
        var α = randomRange(-1, 1);
        return Spinor3.spinor(yz, zx, xy, α).normalize();
    };
    /**
     * @param yz
     * @param zx
     * @param xy
     * @param α
     */
    Spinor3.spinor = function (yz, zx, xy, α, uom) {
        return new Spinor3(α, yz, zx, xy, uom);
    };
    return Spinor3;
}());

/**
 * Determines whether the argument supports the SpinorE3 interface.
 * The argument must be a non-null object and must support the a, xy, yz, and zx numeric properties.
 */
function isSpinorE3(v) {
    if (isObject(v) && !isNull(v)) {
        return isNumber(v.a) && isNumber(v.xy) && isNumber(v.yz) && isNumber(v.zx);
    }
    else {
        return false;
    }
}

function mustBeVectorE3(name, v) {
    if (isNaN(v.x) || isNaN(v.y) || isNaN(v.z)) {
        throw new Error(name + ", (" + v.x + ", " + v.y + ", " + v.z + "), must be a VectorE3.");
    }
    return v;
}

/**
 *
 */
var Vector3 = (function () {
    /**
     *
     */
    function Vector3(x, y, z, uom) {
        this.x = mustBeNumber('x', x);
        this.y = mustBeNumber('y', y);
        this.z = mustBeNumber('z', z);
        this.uom = Unit.mustBeUnit('uom', uom);
    }
    Object.defineProperty(Vector3.prototype, "maskG3", {
        /**
         *
         */
        get: function () {
            return this.isZero() ? 0x0 : 0x2;
        },
        set: function (unused) {
            throw new Error(readOnly('maskG3').message);
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     */
    Vector3.prototype.add = function (rhs) {
        this.x += rhs.x;
        this.y += rhs.y;
        this.z += rhs.z;
        this.uom = Unit.compatible(this.uom, rhs.uom);
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
        return new Vector3(this.x, this.y, this.z, this.uom);
    };
    /**
     *
     */
    Vector3.prototype.copy = function (source) {
        mustBeVectorE3('source', source);
        this.x = source.x;
        this.y = source.y;
        this.z = source.z;
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
        if (isVectorE3(rhs) && !isSpinorE3(rhs)) {
            var uom = Unit.compatible(this.uom, rhs.uom);
            return new Vector3(this.x + rhs.x, this.y + rhs.y, this.z + rhs.z, uom);
        }
        else {
            return void 0;
        }
    };
    Vector3.prototype.__div__ = function (rhs) {
        if (isNumber(rhs)) {
            return new Vector3(this.x / rhs, this.y / rhs, this.z / rhs, this.uom);
        }
        else {
            return void 0;
        }
    };
    Vector3.prototype.__mul__ = function (rhs) {
        if (isNumber(rhs)) {
            return new Vector3(this.x * rhs, this.y * rhs, this.z * rhs, this.uom);
        }
        else {
            return void 0;
        }
    };
    Vector3.prototype.__neg__ = function () {
        return new Vector3(-this.x, -this.y, -this.z, this.uom);
    };
    Vector3.prototype.__radd__ = function (lhs) {
        if (isVectorE3(lhs) && !isSpinorE3(lhs)) {
            var uom = Unit.compatible(lhs.uom, this.uom);
            return new Vector3(lhs.x + this.x, lhs.y + this.y, lhs.z + this.z, uom);
        }
        else {
            return void 0;
        }
    };
    Vector3.prototype.__rmul__ = function (lhs) {
        if (isNumber(lhs)) {
            return new Vector3(lhs * this.x, lhs * this.y, lhs * this.z, this.uom);
        }
        else {
            return void 0;
        }
    };
    Vector3.prototype.__rsub__ = function (lhs) {
        if (isVectorE3(lhs) && !isSpinorE3(lhs)) {
            var uom = Unit.compatible(lhs.uom, this.uom);
            return new Vector3(lhs.x - this.x, lhs.y - this.y, lhs.z - this.z, uom);
        }
        else {
            return void 0;
        }
    };
    Vector3.prototype.__sub__ = function (rhs) {
        if (isVectorE3(rhs) && !isSpinorE3(rhs)) {
            var uom = Unit.compatible(this.uom, rhs.uom);
            return new Vector3(this.x - rhs.x, this.y - rhs.y, this.z - rhs.z, uom);
        }
        else {
            return void 0;
        }
    };
    /**
     * Constructs a vector by computing the dual of a bivector.
     */
    Vector3.dual = function (B) {
        return new Vector3(0, 0, 0, void 0).dual(B);
    };
    /**
     * <p>
     * Computes a unit vector with a random direction.
     * </p>
     */
    Vector3.random = function () {
        var x = randomRange(-1, 1);
        var y = randomRange(-1, 1);
        var z = randomRange(-1, 1);
        return Vector3.vector(x, y, z).normalize();
    };
    /**
     * @param x
     * @param y
     * @param z
     * @param uom
     */
    Vector3.vector = function (x, y, z, uom) {
        return new Vector3(x, y, z, uom);
    };
    return Vector3;
}());

exports.Dimensions = Dimensions;
exports.Geometric3 = Geometric3;
exports.QQ = QQ;
exports.Spinor3 = Spinor3;
exports.Unit = Unit;
exports.Vector3 = Vector3;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
