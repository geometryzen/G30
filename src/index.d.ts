/**
 * The QQ class represents a rational number, ℚ.
 *
 * The QQ implementation is that of an <em>immutable</em> (value) type.
 *
 * The numerator and denominator are reduced to their lowest form.
 *
 * Construct new instances using the static <code>valueOf</code> method.
 */
export class QQ {
    /**
     * The numerator of the rational number.
     */
    private readonly numer_;
    /**
     * The denominator of the rational number.
     */
    private readonly denom_;
    /**
     * @param n The numerator.
     * @param d The denominator.
     */
    private constructor();
    /**
     * The numerator of the rational number.
     */
    readonly numer: number;
    /**
     * The denominator of the rational number.
     */
    readonly denom: number;
    /**
     * @returns this + rhs
     */
    add(rhs: QQ): QQ;
    /**
     * @returns this - rhs
     */
    sub(rhs: QQ): QQ;
    /**
     * @returns this * rhs
     */
    mul(rhs: QQ): QQ;
    /**
     * @returns this / rhs
     */
    div(rhs: QQ): QQ;
    /**
     * @returns `true` if this rational number is one (1), otherwise `false`.
     */
    isOne(): boolean;
    /**
     * @returns `true` if this rational number is zero (0), otherwise `false`.
     */
    isZero(): boolean;
    /**
     * @returns 37 * numerator + 13 * denominator
     */
    hashCode(): number;
    /**
     * Computes the multiplicative inverse of this rational number.
     *
     * @returns 1 / this
     */
    inv(): QQ;
    /**
     * Computes the additive inverse of this rational number.
     *
     * @returns -this
     */
    neg(): QQ;
    /**
     * Determines whether two rational numbers are equal.
     *
     * @returns `true` if `this` rational number equals the `other` rational number.
     */
    equals(other: QQ): boolean;
    /**
     * Computes a non-normative string representation of this rational.
     *
     * @returns
     */
    toString(radix?: number): string;
    /**
     * @returns this + rhs
     */
    __add__(rhs: QQ): QQ;
    /**
     * @returns lhs + this
     */
    __radd__(lhs: QQ): QQ;
    /**
     * @returns this - rhs
     */
    __sub__(rhs: QQ): QQ;
    /**
     * @returns lhs - this
     */
    __rsub__(lhs: QQ): QQ;
    /**
     * @returns this * rhs
     */
    __mul__(rhs: QQ): QQ;
    /**
     * @returns lhs * this
     */
    __rmul__(lhs: QQ): QQ;
    /**
     * @returns this / rhs
     */
    __div__(rhs: QQ): QQ;
    /**
     * @returns lhs / this
     */
    __rdiv__(lhs: QQ): QQ;
    /**
     * @returns +this
     */
    __pos__(): this;
    /**
     * @returns -this
     */
    __neg__(): QQ;
    private static readonly POS_08_01;
    private static readonly POS_07_01;
    private static readonly POS_06_01;
    private static readonly POS_05_01;
    private static readonly POS_04_01;
    private static readonly POS_03_01;
    private static readonly POS_02_01;
    private static readonly ONE;
    private static readonly POS_01_02;
    private static readonly POS_01_03;
    private static readonly POS_01_04;
    private static readonly POS_01_05;
    private static readonly ZERO;
    private static readonly NEG_01_03;
    private static readonly NEG_01_01;
    private static readonly NEG_02_01;
    private static readonly NEG_03_01;
    private static readonly POS_02_03;
    /**
     * @param numer The numerator of the rational number.
     * @param denom The denominator of the rational number.
     * @returns The rational number numer / denom reduced to its lowest form.
     */
    static valueOf(n: number, d: number): QQ;
}

export class Dimensions {
    /**
     * All exponents are zero, a dimensionless quantity.
     */
    static readonly ONE: Dimensions;
    /**
     * M<sup>1</sup>
     */
    static readonly MASS: Dimensions;
    /**
     * L<sup>1</sup>
     */
    static readonly LENGTH: Dimensions;
    /**
     * L<sup>2</sup>
     */
    static readonly AREA: Dimensions;
    /**
     * L<sup>3</sup>
     */
    static readonly VOLUME: Dimensions;
    /**
     * Inverse Length.
     */
    static readonly INV_LENGTH: Dimensions;
    /**
     * T<sup>1</sup>
     */
    static readonly TIME: Dimensions;
    /**
     * Q<sup>1</sup>
     */
    static readonly ELECTRIC_CHARGE: Dimensions;
    /**
     * Q<sup>1</sup>T<sup>-1<sup>
     */
    static readonly ELECTRIC_CURRENT: Dimensions;
    /**
     *
     */
    static readonly THERMODYNAMIC_TEMPERATURE: Dimensions;
    /**
     *
     */
    static readonly AMOUNT_OF_SUBSTANCE: Dimensions;
    /**
     *
     */
    static readonly LUMINOUS_INTENSITY: Dimensions;
    /**
     * Angular Momentum.
     */
    static readonly ANGULAR_MOMENTUM: Dimensions;
    /**
     * Rate of change of Area.
     */
    static readonly RATE_OF_CHANGE_OF_AREA: Dimensions;
    /**
     * Electric Field.
     */
    static readonly ELECTRIC_FIELD: Dimensions;
    /**
     * Electric Permittivity times Area.
     */
    static readonly ELECTRIC_PERMITTIVITY_TIMES_AREA: Dimensions;
    /**
     * Energy or Torque.
     */
    static readonly ENERGY_OR_TORQUE: Dimensions;
    /**
     * Force.
     */
    static readonly FORCE: Dimensions;
    /**
     * Inverse Mass.
     */
    static readonly INV_MASS: Dimensions;
    /**
     * Inverse Moment of Inertia.
     */
    static readonly INV_MOMENT_OF_INERTIA: Dimensions;
    /**
     * Inverse Time.
     */
    static readonly INV_TIME: Dimensions;
    /**
     * Moment of Inertia.
     */
    static readonly MOMENT_OF_INERTIA: Dimensions;
    /**
     * Momentum.
     */
    static readonly MOMENTUM: Dimensions;
    /**
     * Momentum squared.
     */
    static readonly MOMENTUM_SQUARED: Dimensions;
    /**
     * Stiffness.
     */
    static readonly STIFFNESS: Dimensions;
    /**
     * Time squared.
     */
    static readonly TIME_SQUARED: Dimensions;
    /**
     * Velocity
     */
    static readonly VELOCITY: Dimensions;
    /**
     * Velocity squared
     */
    static readonly VELOCITY_SQUARED: Dimensions;
    readonly M: QQ;
    readonly L: QQ;
    readonly T: QQ;
    readonly Q: QQ;
    readonly temperature: QQ;
    readonly amount: QQ;
    readonly intensity: QQ;
    private readonly summary_;
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
    private constructor();
    readonly summary: number;
    /**
     * Returns the dimensions if they are all equal, otherwise throws an <code>Error</code>
     *
     * @param rhs
     * @returns
     */
    compatible(rhs: Dimensions): Dimensions;
    equals(rhs: Dimensions): boolean;
    /**
     * Multiplies dimensions by adding rational exponents.
     *
     * @param rhs
     * @returns <code>this * rhs</code>
     */
    mul(rhs: Dimensions): Dimensions;
    /**
     * Divides dimensions by subtracting rational exponents.
     *
     * @param rhs
     * @returns <code>this / rhs</code>
     */
    div(rhs: Dimensions): Dimensions;
    /**
     * Computes the power function by multiplying rational exponents.
     *
     * @param rhs
     * @returns <code>pow(this, rhs)</code>
     */
    pow(exponent: QQ): Dimensions;
    /**
     * Computes the square root by dividing each rational component by two.
     *
     * @returns
     */
    sqrt(): Dimensions;
    /**
     * Determines whether all the exponents of this dimensions number are zero.
     * This implies a dimensionless quantity.
     *
     * @returns <code>true</code> if all the exponents are zero, otherwise <code>false</code>.
     */
    isOne(): boolean;
    /**
     * Computes the multiplicative inverse of this dimensions number.
     * This is achived by changing the signs of all the exponent quantities.
     *
     * @returns The multiplicative inverse of this dimensions number.
     */
    inv(): Dimensions;
    /**
     * Creates a representation of this <code>Dimensions</code> instance.
     *
     * @returns
     */
    toString(): string;
    /**
     * @returns this + rhs
     */
    __add__(rhs: Dimensions): Dimensions;
    /**
     * @returns lhs + this
     */
    __radd__(lhs: Dimensions): Dimensions;
    /**
     *
     * @param rhs
     * @returns
     */
    __sub__(rhs: Dimensions): Dimensions;
    /**
     *
     * @param lhs
     * @returns
     */
    __rsub__(lhs: Dimensions): Dimensions;
    /**
     *
     * @param rhs
     * @returns
     */
    __mul__(rhs: Dimensions): Dimensions;
    /**
     *
     * @param lhs
     * @returns
     */
    __rmul__(lhs: Dimensions): Dimensions;
    /**
     *
     * @param rhs
     * @returns
     */
    __div__(rhs: Dimensions): Dimensions;
    /**
     * @param lhs
     * @returns
     */
    __rdiv__(lhs: Dimensions): Dimensions;
    /**
     * @returns
     */
    __pos__(): Dimensions;
    /**
     *
     * @returns
     */
    __neg__(): Dimensions;
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
    static valueOf(M: QQ, L: QQ, T: QQ, Q: QQ, temperature: QQ, amount: QQ, intensity: QQ): Dimensions;
}

export class Unit {
    readonly multiplier: number;
    readonly dimensions: Dimensions;
    readonly labels: string[];
    /**
     * Internal symbolic constant to improve code readability.
     * May be undefined or an instance of Unit.
     */
    static readonly ONE: Unit;
    /**
     * Unit of mass.
     * The kilogram is the unit of mass; it is equal to the mass of the international prototype of the kilogram.
     */
    static readonly KILOGRAM: Unit;
    /**
     * Unit of length.
     * The meter is the length of the path travelled by light in vacuum during a time interval of 1/299 792 458 of a second.
     */
    static readonly METER: Unit;
    /**
     * Unit of time.
     * The second is the duration of 9 192 631 770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium 133 atom.
     */
    static readonly SECOND: Unit;
    /**
     * Unit of electric charge.
     *
     */
    static readonly COULOMB: Unit;
    /**
     * Unit of electric current.
     * The ampere is that constant current which,
     * if maintained in two straight parallel conductors of infinite length,
     * of negligible circular cross-section,
     * and placed 1 meter apart in vacuum,
     * would produce between these conductors a force equal to 2 x 10<sup>-7</sup> newton per meter of length.
     */
    static readonly AMPERE: Unit;
    /**
     * Unit of thermodynamic temperature.
     * The kelvin, unit of thermodynamic temperature, is the fraction 1/273.16 of the thermodynamic temperature of the triple point of water.
     */
    static readonly KELVIN: Unit;
    /**
     * Unit of amount of substance.
     * 1. The mole is the amount of substance of a system which contains as many elementary entities as there are atoms in 0.012 kilogram of carbon 12; its symbol is "mol."
     * 2. When the mole is used, the elementary entities must be specified and may be atoms, molecules, ions, electrons, other particles, or specified groups of such particles.
     */
    static readonly MOLE: Unit;
    /**
     * Unit of luminous intensity.
     * The candela is the luminous intensity, in a given direction,
     * of a source that emits monochromatic radiation of frequency 540 x 10<sup>12</sup> hertz and that has a radiant intensity in that direction of 1/683 watt per steradian.
     */
    static readonly CANDELA: Unit;
    private static readonly COULOMB_SQUARED_PER_NEWTON;
    private static readonly ELECTRIC_FIELD;
    /**
     *
     */
    static readonly NEWTON: Unit;
    /**
     *
     */
    static readonly JOULE: Unit;
    /**
     * The unit of angular momentum.
     */
    static readonly JOULE_SECOND: Unit;
    private static readonly METER_SQUARED;
    private static readonly METER_CUBED;
    private static readonly SECOND_SQUARED;
    private static readonly INV_KILOGRAM;
    private static readonly INV_METER;
    private static readonly INV_SECOND;
    private static readonly KILOGRAM_METER_SQUARED;
    /**
     * The unit of momentum.
     */
    static readonly KILOGRAM_METER_PER_SECOND: Unit;
    private static readonly KILOGRAM_SQUARED_METER_SQUARED_PER_SECOND_SQUARED;
    private static readonly INV_KILOGRAM_METER_SQUARED;
    private static readonly STIFFNESS;
    private static readonly METER_PER_SECOND;
    private static readonly METER_SQUARED_PER_SECOND;
    private static readonly METER_SQUARED_PER_SECOND_SQUARED;
    /**
     * @param multiplier
     * @param dimensions
     * @param labels The label strings to use for each dimension.
     */
    private constructor();
    private compatible(rhs);
    private isCompatible(rhs);
    /**
     *
     */
    __add__(rhs: Unit): Unit | undefined;
    __radd__(lhs: Unit): Unit | undefined;
    __sub__(rhs: Unit): Unit;
    __rsub__(lhs: Unit): Unit;
    /**
     * Computes the unit equal to `this * rhs`.
     */
    mul(rhs: Unit): Unit;
    __mul__(rhs: number | Unit): Unit;
    __rmul__(lhs: number | Unit): Unit;
    /**
     * Computes the unit equal to `this / rhs`.
     */
    div(rhs: Unit): Unit;
    __div__(rhs: number | Unit): Unit;
    __rdiv__(lhs: number | Unit): Unit;
    private pow(exponent);
    private inv();
    private neg();
    isOne(): boolean;
    private sqrt();
    toExponential(fractionDigits?: number, compact?: boolean): string;
    toFixed(fractionDigits?: number, compact?: boolean): string;
    toPrecision(precision?: number, compact?: boolean): string;
    toString(radix?: number, compact?: boolean): string;
    __pos__(): Unit;
    __neg__(): Unit;
    /**
     * @param uom The unit of measure.
     */
    static isOne(uom: Unit): boolean;
    /**
     * @param uom The unit of measure that must be dimensionless.
     */
    static assertDimensionless(uom: Unit): void;
    /**
     * @param lhs
     * @param rhs
     * @returns
     */
    static compatible(lhs: Unit, rhs: Unit): Unit | undefined;
    static isCompatible(lhs: Unit, rhs: Unit): boolean;
    /**
     * @param lhs
     * @param rhs
     * @returns
     */
    static mul(lhs: Unit, rhs: Unit): Unit | undefined;
    /**
     * @param lhs
     * @param rhs
     */
    static div(lhs: Unit, rhs: Unit): Unit;
    /**
     * Computes the multiplicative inverse of the specified unit of measure.
     */
    static inv(uom: Unit): Unit;
    /**
     *
     */
    static mustBeUnit(name: string, uom: Unit): Unit;
    /**
     * Computes the value of the unit of measure raised to the specified power.
     */
    static pow(uom: Unit, exponent: QQ): Unit | undefined;
    /**
     * @param uom
     * @returns
     */
    static sqrt(uom: Unit): Unit | undefined;
    /**
     * Constructs a Unit.
     */
    static valueOf(multiplier: number, dimensions: Dimensions, labels: string[]): Unit;
}

/**
 * Marker interface
 *
 * Cartesian coordinates
 * 3 linear dimensions
 * No units of measure
 * Euclidean metric.
 */
export interface CartesianG3 {
    /**
     * A bitmask describing the grades.
     *
     * 0x0 = zero
     * 0x1 = scalar
     * 0x2 = vector
     * 0x4 = bivector
     * 0x8 = pseudoscalar
     */
    maskG3: number;
}

export interface Pseudo {
    /**
     * The pseudoscalar coordinate as a number.I
     */
    b: number;
}

export interface Scalar {
    /**
     * The scalar coordinate as a number.
     */
    a: number;
    /**
     * The unit of measure.
     */
    uom: Unit;
}

export interface BivectorE3 {
    yz: number;
    zx: number;
    xy: number;
    /**
     * The unit of measure.
     */
    uom: Unit;
}

/**
 * The even sub-algebra of the Euclidean algebra 𝓖(3, 0).
 */
export interface SpinorE3 extends Scalar, BivectorE3 {
}

export interface VectorE3 {
    x: number;
    y: number;
    z: number;
    /**
     * The unit of measure.
     */
    uom: Unit;
}

export interface GeometricE3 extends Pseudo, Scalar, SpinorE3, VectorE3 {
}

export class Geometric3 implements CartesianG3, GeometricE3 {
    /**
     *
     */
    private readonly coords_;
    /**
     *
     */
    private modified_;
    /**
     * The unit of measure.
     * This property should only be changed through the accessors.
     */
    private uom_;
    /**
     *
     */
    private lock_;
    /**
     * Do not call this constructor. Use the static construction methods instead.
     */
    constructor(coords?: number[], uom?: Unit);
    /**
     * Determines whether this multivector is locked.
     * If the multivector is in the unlocked state then it is mutable.
     * If the multivector is in the locked state then it is immutable.
     */
    isLocked(): boolean;
    /**
     * Locks this multivector (preventing any further mutation),
     * and returns a token that may be used to unlock it.
     */
    lock(): number;
    /**
     * Unlocks this multivector (allowing mutation),
     * using a token that was obtained from a preceding lock method call.
     */
    unlock(token: number): void;
    /**
     * Consistently set a coordinate value in the most optimized way.
     * Permits mutation only when the lock status is UNLOCKED.
     * It is safe to use this as an alternative to the named property accessors.
     */
    private setCoordinate(index, newValue, name);
    /**
     * The scalar part of this multivector.
     */
    a: number;
    /**
     * The pseudoscalar part of this multivector.
     */
    b: number;
    /**
     * A bitmask describing the grades.
     *
     * 0x0 = zero
     * 0x1 = scalar
     * 0x2 = vector
     * 0x4 = bivector
     * 0x8 = pseudoscalar
     */
    readonly maskG3: number;
    /**
     * The optional unit of measure.
     */
    uom: Unit;
    /**
     * The coordinate corresponding to the <b>e</b><sub>1</sub> standard basis vector.
     */
    x: number;
    /**
     * The coordinate corresponding to the <b>e</b><sub>2</sub> standard basis vector.
     */
    y: number;
    /**
     * The coordinate corresponding to the <b>e</b><sub>3</sub> standard basis vector.
     */
    z: number;
    /**
     * The coordinate corresponding to the <b>e</b><sub>2</sub><b>e</b><sub>3</sub> standard basis bivector.
     */
    yz: number;
    /**
     * The coordinate corresponding to the <b>e</b><sub>3</sub><b>e</b><sub>1</sub> standard basis bivector.
     */
    zx: number;
    /**
     * The coordinate corresponding to the <b>e</b><sub>1</sub><b>e</b><sub>2</sub> standard basis bivector.
     */
    xy: number;
    /**
     * Adds a multivector value to this multivector with optional scaling.
     *
     * @param M The multivector to be added to this multivector.
     * @param α An optional scale factor that multiplies the multivector argument.
     * @returns this + M * α
     */
    add(M: GeometricE3, α?: number): Geometric3;
    /**
     * this ⟼ a + b
     *
     * @param a
     * @param b
     * @returns this multivector
     */
    add2(a: GeometricE3, b: GeometricE3): this;
    /**
     * Adds a pseudoscalar value to this multivector.
     *
     * @param β The pseudoscalar value to be added to this multivector.
     * @param uom The optional unit of measure.
     * @returns this + (Iβ * uom)
     */
    addPseudo(β: number, uom?: Unit): Geometric3;
    /**
     * Adds a scalar value to this multivector.
     *
     * @param α The scalar value to be added to this multivector.
     * @param uom The optional unit of measure.
     * @returns this + (α * uom)
     */
    addScalar(α: number, uom?: Unit): Geometric3;
    /**
     * @param v The vector to be added to this multivector.
     * @param α An optional scale factor that multiplies the vector argument.
     * @returns this + v * α
     */
    addVector(v: VectorE3, α?: number): Geometric3;
    /**
     * Sets this multivector to the angle, defined as the bivector part of the logarithm.
     * @returns grade(log(this), 2)
     */
    angle(): Geometric3;
    /**
     * Sets any coordinate whose absolute value is less than pow(10, -n) times the absolute value of the largest coordinate.
     * @param n
     * @returns approx(this, n)
     */
    approx(n: number): Geometric3;
    /**
     * @returns copy(this)
     */
    clone(): Geometric3;
    /**
     * Clifford conjugation
     */
    conj(): Geometric3;
    /**
     * Copies the coordinate values into this <code>Geometric3</code>.
     *
     * @param coordinates The coordinates in order a, x, y, z, yz, zx, xy, b.
     */
    copyCoordinates(coordinates: number[]): this;
    /**
     * <p>
     * <code>this ⟼ copy(M)</code>
     * </p>
     *
     * @param M The multivector to be copied.
     */
    copy(M: GeometricE3): this;
    /**
     * <p>
     * <code>this ⟼ copy(B)</code>
     * </p>
     *
     * @param B The bivector to be copied.
     */
    copyBivector(B: BivectorE3): this;
    /**
     * Sets this multivector to the value of the scalar, α.
     * The non-scalar components are set to zero.
     *
     * @param α The scalar to be copied.
     * @param uom The unit of measure.
     */
    copyScalar(α: number, uom: Unit): this;
    /**
     * Copies the spinor argument value into this multivector.
     * The non-spinor components are set to zero.
     *
     * @param spinor The spinor to be copied.
     */
    copySpinor(spinor: SpinorE3): this;
    /**
     * Copies the vector argument value into this multivector.
     * The non-vector components are set to zero.
     *
     * @param vector The vector to be copied.
     */
    copyVector(vector: VectorE3): this;
    /**
     * Sets this multivector to the generalized vector cross product with another multivector.
     *
     * @returns -I * (this ^ m)
     */
    cross(m: GeometricE3): Geometric3;
    /**
     * @param mutate Must be `true` when calling the `direction` method on an unlocked Geometric3.
     * @returns this / magnitude(this)
     */
    direction(mutate: boolean): Geometric3;
    /**
     * @param m The multivector dividend.
     * @returns this / m;
     */
    div(m: GeometricE3): Geometric3;
    divByNumber(α: number): Geometric3;
    /**
     * <p>
     * <code>this ⟼ this / (α * uom)</code>
     * </p>
     *
     * @param α The scalar dividend.
     * @param uom The unit of measure.
     */
    divByScalar(α: number, uom: Unit): Geometric3;
    divByVector(v: VectorE3): Geometric3;
    /**
     * <p>
     * <code>this ⟼ a / b</code>
     * </p>
     *
     * @param a The numerator.
     * @param b The denominator.
     */
    div2(a: SpinorE3, b: SpinorE3): this;
    /**
     * dual(m) = I<sub>n</sub> * m = m / I<sub>n</sub>
     *
     * @returns dual(m) or dual(this) if m is undefined.
     */
    dual(m?: GeometricE3): Geometric3;
    /**
     * @param other
     * @returns
     */
    equals(other: any): boolean;
    /**
     * <p>
     * <code>this ⟼ e<sup>this</sup></code>
     * </p>
     */
    exp(): Geometric3;
    /**
     * Computes the inverse of this multivector.
     * @returns inverse(this)
     */
    inv(): Geometric3;
    /**
     * Determines whether this multivector is exactly 1 (one).
     */
    isOne(): boolean;
    /**
     * Determines whether this multivector is exactly 0 (zero).
     */
    isZero(): boolean;
    /**
     * @param m
     * @returns this << m
     */
    lco(m: GeometricE3): Geometric3;
    /**
     * <p>
     * <code>this ⟼ a << b</code>
     * </p>
     *
     * @param a
     * @param b
     */
    lco2(a: GeometricE3, b: GeometricE3): this;
    /**
     * @param target
     * @param α
     * @returns this + α * (target - this)
     */
    lerp(target: GeometricE3, α: number): Geometric3;
    /**
     * <p>
     * <code>this ⟼ a + α * (b - a)</code>
     * </p>
     *
     * @param a
     * @param b
     * @param α
     */
    lerp2(a: GeometricE3, b: GeometricE3, α: number): this;
    /**
     * <p>
     * <code>this ⟼ log(this)</code>
     * </p>
     */
    log(): Geometric3;
    /**
     * <p>
     * Computes the <em>square root</em> of the <em>squared norm</em>.
     * </p>
     */
    magnitude(mutate: boolean): Geometric3;
    /**
     * Intentionally undocumented.
     */
    private magnitudeSansUnits();
    /**
     * Returns the geometric product of this multivector with the rhs multivector.
     * @param rhs The operand on the right hand side of the * operator.
     * @return this * rhs
     */
    mul(rhs: GeometricE3): Geometric3;
    mulByBivector(B: BivectorE3): Geometric3;
    mulByVector(v: VectorE3): Geometric3;
    /**
     * <p>
     * <code>this ⟼ a * b</code>
     * </p>
     *
     * @param a
     * @param b
     */
    mul2(a: GeometricE3, b: GeometricE3): this;
    /**
     * @returns this * -1
     */
    neg(): Geometric3;
    /**
     * An alias for the `magnitude` method.
     * <p>
     * <code>this ⟼ sqrt(this * conj(this))</code>
     * </p>
     */
    norm(): Geometric3;
    /**
     * Sets this multivector to the identity element for multiplication, <b>1</b>.
     */
    one(): this;
    /**
     * The quaditude of a multivector is defined in terms of the scalar products
     * of its blades.
     * this ⟼ scp(this, rev(this)) = this | ~this
     */
    quaditude(mutate: boolean): Geometric3;
    /**
     * @param m
     * @returns this >> m
     */
    rco(m: GeometricE3): Geometric3;
    /**
     * <p>
     * <code>this ⟼ a >> b</code>
     * </p>
     *
     * @param a
     * @param b
     */
    rco2(a: GeometricE3, b: GeometricE3): this;
    /**
     * Computes the <em>squared norm</em> of this multivector.
     *
     * This is an alias for the `quaditude` method.
     */
    squaredNorm(mutate: boolean): Geometric3;
    /**
     * Intentionally undocumented
     */
    private squaredNormSansUnits();
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
    reflect(n: VectorE3): Geometric3;
    /**
     * @returns reverse(this)
     */
    rev(): Geometric3;
    /**
     * @param R the spinor that rotates this multivector.
     * @returns R * this * reverse(R)
     */
    rotate(R: SpinorE3): Geometric3;
    /**
     * Sets this multivector to a rotor that rotates through angle θ around the specified axis.
     *
     * @param axis The (unit) vector defining the rotation aspect and orientation.
     * @param θ The rotation angle in radians when the rotor is applied on both sides as R * M * ~R
     */
    rotorFromAxisAngle(axis: VectorE3, θ: number): this;
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
    rotorFromDirections(a: VectorE3, b: VectorE3): this;
    /**
     * Helper function for rotorFromFrameToFrame.
     */
    private rotorFromTwoVectors(e1, f1, e2, f2);
    /**
     *
     */
    rotorFromFrameToFrame(es: VectorE3[], fs: VectorE3[]): this;
    /**
     * Sets this multivector to a rotor that rotates through angle θ in the oriented plane defined by B.
     *
     * this ⟼ exp(- B * θ / 2) = cos(|B| * θ / 2) - B * sin(|B| * θ / 2) / |B|
     *
     * @param B The (unit) bivector generating the rotation.
     * @param θ The rotation angle in radians when the rotor is applied on both sides as R * M * ~R
     */
    rotorFromGeneratorAngle(B: BivectorE3, θ: number): this;
    /**
     * R = (|b||a| + b * a) / sqrt(2 * |b||a|(|b||a| + b << a))
     *
     * The result is independent of the magnitudes of a and b.
     */
    rotorFromVectorToVector(a: VectorE3, b: VectorE3, B: BivectorE3): this;
    /**
     * @param m
     * @returns this | m
     */
    scp(m: GeometricE3): Geometric3;
    /**
     * <p>
     * <code>this ⟼ scp(a, b) = a | b</code>
     * </p>
     *
     * @param a
     * @param b
     */
    scp2(a: GeometricE3, b: GeometricE3): this;
    /**
     * Currently limited to taking the square root of a positive scalar quantity.
     */
    sqrt(): Geometric3;
    /**
     * @param α
     * @returns this * α
     */
    mulByNumber(α: number): Geometric3;
    /**
     * @param α
     * @param uom
     * @returns this * (α * uom)
     */
    mulByScalar(α: number, uom: Unit): Geometric3;
    /**
     * Applies the diagonal elements of a scaling matrix to this multivector.
     *
     * @param σ
     */
    stress(σ: VectorE3): Geometric3;
    /**
     * <p>
     * <code>this ⟼ a * b</code>
     * </p>
     * Sets this Geometric3 to the geometric product a * b of the vector arguments.
     *
     * @param a
     * @param b
     */
    versor(a: VectorE3, b: VectorE3): this;
    writeVector(vector: VectorE3): void;
    /**
     * @param M
     * @param α
     * @returns this - M * α
     */
    sub(M: GeometricE3, α?: number): Geometric3;
    subScalar(M: Scalar, α?: number): Geometric3;
    /**
     * @param v The vector to subtract from this multivector.
     * @param α The multiplier for the amount of the vector to subtract.
     * @returns this - v * α
     */
    subVector(v: VectorE3, α?: number): Geometric3;
    /**
     * <p>
     * <code>this ⟼ a - b</code>
     * </p>
     *
     * @param a
     * @param b
     */
    sub2(a: GeometricE3, b: GeometricE3): this;
    /**
     * Returns a string representing the number in exponential notation.
     *
     * @param fractionDigits
     * @returns
     */
    toExponential(fractionDigits?: number): string;
    /**
     * Returns a string representing the number in fixed-point notation.
     *
     * @param fractionDigits
     * @returns
     */
    toFixed(fractionDigits?: number): string;
    /**
     * @param precision
     * @returns
     */
    toPrecision(precision?: number): string;
    /**
     * Returns a string representation of the number.
     *
     * @param radix
     * @returns
     */
    toString(radix?: number): string;
    /**
     * Sets this multivector to the result of keeping only the specified grade.
     * This is the grade extraction operation.
     *
     * @param n the grade to be retained.
     * @returns grade(this, n)
     */
    grade(n: number): Geometric3;
    /**
     * @param m
     * @return this ^ m
     */
    ext(m: GeometricE3): Geometric3;
    /**
     * <p>
     * <code>this ⟼ a ^ b</code>
     * </p>
     *
     * @param a
     * @param b
     */
    ext2(a: GeometricE3, b: GeometricE3): this;
    /**
     * Sets this multivector to the identity element for addition, 0.
     */
    zero(): this;
    /**
     * Implements `this + rhs`.
     */
    __add__(rhs: number | CartesianG3): Geometric3;
    /**
     * Implements `this / rhs`.
     */
    __div__(rhs: number | CartesianG3): Geometric3;
    /**
     * Implements `lhs / this`.
     */
    __rdiv__(lhs: number | Geometric3): Geometric3;
    /**
     * Implements `this * rhs`.
     */
    __mul__(rhs: number | CartesianG3): Geometric3;
    /**
     * Implements `lhs * this`.
     */
    __rmul__(lhs: number | Geometric3): Geometric3;
    /**
     * Implements `lhs + this`.
     */
    __radd__(lhs: number | Geometric3): Geometric3;
    /**
     * Implements `this - rhs`.
     */
    __sub__(rhs: number | CartesianG3): Geometric3;
    /**
     * Implements `lhs - rhs`.
     */
    __rsub__(lhs: number | Geometric3): Geometric3;
    /**
     * Implements `~this`.
     */
    __tilde__(): Geometric3;
    /**
     * Implements `this ^ rhs`.
     */
    __wedge__(rhs: number | Geometric3): Geometric3;
    /**
     * Implements `lhs ^ this`.
     */
    __rwedge__(lhs: number | Geometric3): Geometric3;
    /**
     * Implements `this << rhs`.
     */
    __lshift__(rhs: number | Geometric3): Geometric3;
    /**
     * Implements `lhs << this`.
     */
    __rlshift__(lhs: number | Geometric3): Geometric3;
    /**
     * Implements `this >> rhs`.
     */
    __rshift__(rhs: number | Geometric3): Geometric3;
    /**
     * Implements `lhs >> rhs`.
     */
    __rrshift__(lhs: number | Geometric3): Geometric3;
    /**
     * Implements `this | rhs`.
     */
    __vbar__(rhs: number | Geometric3): Geometric3;
    /**
     * Implements `lhs | this`.
     */
    __rvbar__(lhs: number | Geometric3): Geometric3;
    /**
     * Implements `!this`.
     */
    __bang__(): Geometric3;
    /**
     * Implements `+this`.
     */
    __pos__(): Geometric3;
    /**
     * Implements `-this`.
     */
    __neg__(): Geometric3;
    /**
     * Constructs a Geometric3 representing the number zero.
     * The identity element for addition, <b>0</b>.
     * The returned multivector is locked.
     */
    static readonly zero: Geometric3;
    /**
     * Constructs a Geometric3 representing the number one.
     * The identity element for multiplication, <b>1</b>.
     * The returned multivector is locked.
     */
    static readonly one: Geometric3;
    /**
     * Constructs a basis vector corresponding to the <code>x</code> coordinate.
     * The returned multivector is locked.
     */
    static readonly e1: Geometric3;
    /**
     * Constructs a basis vector corresponding to the <code>y</code> coordinate.
     * The returned multivector is locked.
     */
    static readonly e2: Geometric3;
    /**
     * Constructs a basis vector corresponding to the <code>z</code> coordinate.
     * The returned multivector is locked.
     */
    static readonly e3: Geometric3;
    /**
     * Constructs a basis vector corresponding to the <code>β</code> coordinate.
     * The returned multivector is locked.
     */
    static readonly I: Geometric3;
    /**
     * SI base unit of length.
     * The meter is the length of the path travelled by light in vacuum during a time interval of 1 / 299 792 458 of a second.
     */
    static readonly meter: Geometric3;
    /**
     * SI base unit of mass.
     * The kilogram is the unit of mass; it is equal to the mass of the international prototype of the kilogram.
     */
    static readonly kilogram: Geometric3;
    /**
     * SI base unit of time.
     * The second is the duration of 9 192 631 770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium 133 atom.
     */
    static readonly second: Geometric3;
    /**
     * SI base unit of electric current.
     * The ampere is that constant current which, if maintained in two straight parallel conductors of infinite length, of negligible circular cross-section, and placed 1 meter apart in vacuum, would produce between these conductors a force equal to 2 x 10<sup>-7</sup> newton per meter of length.
     */
    static readonly ampere: Geometric3;
    /**
     * SI base unit of thermodynamic temperature.
     * The kelvin, unit of thermodynamic temperature, is the fraction 1 / 273.16 of the thermodynamic temperature of the triple point of water.
     */
    static readonly kelvin: Geometric3;
    /**
     * SI base unit of amount of substance.
     * 1. The mole is the amount of substance of a system which contains as many elementary entities as there are atoms in 0.012 kilogram of carbon 12; its symbol is "mol."
     *
     * 2. When the mole is used, the elementary entities must be specified and may be atoms, molecules, ions, electrons, other particles, or specified groups of such particles.
     */
    static readonly mole: Geometric3;
    /**
     * SI base unit of luminous intensity.
     * The candela is the luminous intensity, in a given direction, of a source that emits monochromatic radiation of frequency 540 x 10<sup>12</sup> hertz and that has a radiant intensity in that direction of 1 / 683 watt per steradian.
     */
    static readonly candela: Geometric3;
    /**
     * SI derived unit of electric charge, quantity of electricity.
     */
    static readonly coulomb: Geometric3;
    /**
     * SI derived unit of force.
     */
    static readonly newton: Geometric3;
    /**
     * SI derived unit of energy, work, quantity of heat.
     */
    static readonly joule: Geometric3;
    /**
     * Creates a grade 2 (bivector) multivector from the specified cartesian coordinates.
     * @param yz The coordinate corresponding to the e2e3 basis bivector.
     * @param zx The coordinate corresponding to the e3e1 basis bivector.
     * @param xy The coordinate corresponding to the e1e2 basis bivector.
     * @param uom The optional unit of measure. Equivalent to 1 if omitted.
     */
    static bivector(yz: number, zx: number, xy: number, uom?: Unit): Geometric3;
    /**
     * @param mv The multivector to be copied.
     */
    static copy(mv: GeometricE3): Geometric3;
    static dual(m: Geometric3): Geometric3;
    static dualOfBivector(B: BivectorE3): Geometric3;
    static dualOfVector(v: VectorE3): Geometric3;
    static fromBivector(B: BivectorE3): Geometric3;
    /**
     * @param alpha
     */
    static fromScalar(alpha: Scalar): Geometric3;
    /**
     * @param s
     */
    static fromSpinor(R: SpinorE3): Geometric3;
    /**
     * @param v
     * @returns
     */
    static fromVector(v: VectorE3): Geometric3;
    /**
     * @param A
     * @param B
     * @param α
     * @returns <code>A + α * (B - A)</code>
     */
    static lerp(A: GeometricE3, B: GeometricE3, α: number): Geometric3;
    static pseudo(b: number, uom?: Unit): Geometric3;
    /**
     * <p>
     * Computes a multivector with random components.
     * </p>
     */
    static random(): Geometric3;
    /**
     * Computes the rotor that rotates vector <code>a</code> to vector <code>b</code>.
     *
     * @param a The <em>from</em> vector.
     * @param b The <em>to</em> vector.
     */
    static rotorFromDirections(a: VectorE3, b: VectorE3): Geometric3;
    static rotorFromFrameToFrame(es: VectorE3[], fs: VectorE3[]): Geometric3;
    static rotorFromVectorToVector(a: VectorE3, b: VectorE3, B: BivectorE3): Geometric3;
    /**
     * Creates a grade 0 (scalar) multivector with value `alpha * uom`.
     * @param a The scaling factor for the unit of measure.
     * @param uom The optional unit of measure. Equivalent to 1 if omitted.
     */
    static scalar(a: number, uom?: Unit): Geometric3;
    /**
     * Creates a spinor valued multivector from the specified cartesian coordinates.
     * @param a The scalar coordinate.
     * @param yz The coordinate corresponding to the e2e3 basis bivector.
     * @param zx The coordinate corresponding to the e3e1 basis bivector.
     * @param xy The coordinate corresponding to the e1e2 basis bivector.
     * @param uom The optional unit of measure. Equivalent to 1 if omitted.
     */
    static spinor(a: number, yz: number, zx: number, xy: number, uom?: Unit): Geometric3;
    /**
     * Creates a grade 1 (vector) multivector from the specified cartesian coordinates.
     * @param x The coordinate corresponding to the e1 basis vector.
     * @param y The coordinate corresponding to the e2 basis vector.
     * @param z The coordinate corresponding to the e3 basis vector.
     * @param uom The optional unit of measure. Equivalent to 1 if omitted.
     */
    static vector(x: number, y: number, z: number, uom?: Unit): Geometric3;
    /**
     * @param a
     * @param b
     */
    static wedge(a: Geometric3, b: Geometric3): Geometric3;
}

/**
 * A mutable representation of a spinor with cartesian coordinates in 3 dimensions.
 */
export class Spinor3 implements SpinorE3, CartesianG3 {
    /**
     * The scalar coordinate of the spinor.
     */
    a: number;
    /**
     * The coordinate corresponding to the bivector e2 ^ e3.
     */
    yz: number;
    /**
     * The coordinate corresponding to the bivector e3 ^ e1.
     */
    zx: number;
    /**
     * The coordinate corresponding to the bivector e1 ^ e2.
     */
    xy: number;
    /**
     *
     */
    uom: Unit;
    /**
     *
     */
    constructor(a: number, yz: number, zx: number, xy: number, uom?: Unit);
    /**
     *
     */
    maskG3: number;
    /**
     *
     */
    copy(spinor: SpinorE3): this;
    /**
     *
     */
    divByScalar(alpha: number): this;
    /**
     *
     */
    isOne(): boolean;
    /**
     *
     */
    magnitude(): number;
    /**
     *
     */
    normalize(): this;
    /**
     *
     */
    one(): this;
    /**
     * a.k.a. squared norm
     */
    private quaditude();
    /**
     *
     */
    rev(): this;
    /**
     *
     */
    toExponential(fractionDigits?: number): string;
    /**
     *
     */
    toFixed(fractionDigits?: number): string;
    /**
     *
     */
    toPrecision(precision?: number): string;
    /**
     * Returns a string representation of this spinor.
     */
    toString(radix?: number): string;
    /**
     * <p>
     * Computes a unit spinor with a random direction.
     * </p>
     */
    static random(): Spinor3;
    /**
     * @param yz
     * @param zx
     * @param xy
     * @param α
     */
    static spinor(yz: number, zx: number, xy: number, α: number, uom?: Unit): Spinor3;
}

export class Vector3 implements VectorE3, CartesianG3 {
    x: number;
    y: number;
    z: number;
    uom: Unit;
    /**
     *
     */
    constructor(x: number, y: number, z: number, uom?: Unit);
    /**
     *
     */
    maskG3: number;
    /**
     *
     */
    add(rhs: VectorE3): this;
    /**
     * Pre-multiplies the column vector corresponding to this vector by the matrix.
     * The result is applied to this vector.
     *
     * @param σ The 3x3 matrix that pre-multiplies this column vector.
     */
    applyMatrix(σ: MatrixLike): this;
    /**
     *
     */
    clone(): Vector3;
    /**
     *
     */
    copy(source: VectorE3): this;
    /**
     *
     */
    direction(): this;
    /**
     *
     */
    divByScalar(alpha: number): this;
    /**
     *
     */
    dot(v: VectorE3): number;
    /**
     *
     */
    dual(B: BivectorE3): this;
    isZero(): boolean;
    /**
     *
     */
    magnitude(): number;
    /**
     *
     */
    mulByScalar(alpha: number): this;
    neg(): this;
    /**
     *
     */
    normalize(magnitude?: number): this;
    /**
     *
     */
    write(destination: VectorE3): this;
    /**
     *
     */
    zero(): this;
    /**
     * Computes the square of this vector.
     * This is an alias for the `squaredNorm` method.
     */
    quaditude(): number;
    /**
     *
     */
    quadranceTo(point: VectorE3): number;
    /**
     *
     */
    rotate(spinor: SpinorE3): this;
    /**
     * Computes the square of this vector.
     * This is an alias for the `quaditude` method.
     */
    squaredNorm(): number;
    /**
     *
     */
    sub(rhs: VectorE3): this;
    /**
     * Returns a string containing a number in exponential notation.
     */
    toExponential(fractionDigits?: number): string;
    /**
     * Returns a string containing a number in fixed-point notation.
     */
    toFixed(fractionDigits?: number): string;
    /**
     * Returns a string containing a number represented either in exponential or fixed-point notation
     * with a specified number of digits.
     */
    toPrecision(precision?: number): string;
    /**
     * Returns a string representation of this vector.
     */
    toString(radix?: number): string;
    __add__(rhs: VectorE3): Vector3;
    __div__(rhs: number): Vector3;
    __mul__(rhs: number): Vector3;
    __neg__(): Vector3;
    __radd__(lhs: VectorE3): Vector3;
    __rmul__(lhs: number): Vector3;
    __rsub__(lhs: VectorE3): Vector3;
    __sub__(rhs: VectorE3): Vector3;
    /**
     * Constructs a vector by computing the dual of a bivector.
     */
    static dual(B: BivectorE3): Vector3;
    /**
     * <p>
     * Computes a unit vector with a random direction.
     * </p>
     */
    static random(): Vector3;
    /**
     * @param x
     * @param y
     * @param z
     * @param uom
     */
    static vector(x: number, y: number, z: number, uom?: Unit): Vector3;
}


